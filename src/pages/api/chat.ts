import type { APIRoute } from "astro";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY
});

// Almacenamiento en memoria para el contador de mensajes por IP
// IMPORTANTE: Este almacenamiento se reinicia cada vez que el servidor se reinicia
// En producción, considera usar una base de datos persistente
interface IPUsage {
  count: number;
  date: string;
}

const ipLimiter: Record<string, IPUsage> = {}; 
const MAX_MESSAGES_PER_DAY = 15; // Límite máximo de mensajes por IP por día

// Colección de chistes de programador para mostrar en los logs
const programmerJokes = [
  "¿Por qué los programadores prefieren el frío? Porque odian los bugs.",
  "¿Cómo se llama un grupo de 8 bits que salen de fiesta? Un byte de diversión.",
  "¿Por qué los programadores siempre confunden Halloween con Navidad? Porque Oct(31) = Dec(25).",
  "Un programador va al supermercado. Su esposa le dice: 'Compra una barra de pan, y si hay huevos, trae diez'. Volvió con diez barras de pan.",
  "¿Por qué Python no lleva gafas? Porque es un lenguaje interpretado.",
  "Solo hay 10 tipos de personas en el mundo: las que entienden binario y las que no.",
  "¿Qué le dice un bit al otro? Nos vemos en el bus.",
  "¿Cómo se organizan una fiesta los programadores? Enviando invitaciones a localhost.",
  "Mi código no funciona y no sé por qué. Mi código funciona y no sé por qué.",
  "Una IA entra en un bar y pide a qué saben los caracteres especiales.",
  "Un buen programador es alguien que siempre mira a los dos lados antes de cruzar una calle de sentido único.",
  "¿Qué es un terapeuta? 1024 gigapeutas.",
  "Si pones a mil monos a teclear al azar, eventualmente crearán un programa Java. El resto se convertirá en programadores de JavaScript.",
  "¿Por qué los desarrolladores de software siempre confunden Navidad con Halloween? Porque DEC 25 = OCT 31.",
  "La vida de un programador: café, código, dormir, repetir."
];

// Función para obtener un chiste aleatorio
const getRandomJoke = (): string => {
  const randomIndex = Math.floor(Math.random() * programmerJokes.length);
  return programmerJokes[randomIndex];
};

const JUAN_CONTEXT = `
Juan Antonio Doval Nogueira es un desarrollador web full-stack de O Barco de Valdeorras (Ourense).
Sus principales habilidades incluyen:
- Desarrollo web con Laravel, React, PHP, Python, Next.js
- Desarrollo en WordPress creando plugins y temas personalizados
- Experiencia en CSS3 y TailwindCSS para estilado
- Desarrollo de aplicaciones Android con Java y Kotlin
- Gestión de servidores y VPS con HestiaCP

Proyectos destacados:
- marcadorvirtual.top: Web creada con Laravel y React
- arteconlili.com: Tema de WordPress personalizado con plugins creados por Juan
- scrapbookingdigital.top: Proyecto NextJS
- cdbarco.com: Web del Club Deportivo Barco en Laravel
- deluxeproducciones.es y depositoagua.com: Sitios WordPress

Educación:
- FP Instalaciones Electrotécnicas
- Autodidacta en desarrollo web y programación

Idiomas:
- Español y Gallego: Nativo
- Inglés: Intermedio
- Portugués: Intermedio

Características personales:
- Constantemente inspirado por nuevas ideas
- Dedicado al aprendizaje continuo
- Apasionado por la tecnología y el desarrollo web
`;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (!openai.apiKey) {
    return new Response(
      JSON.stringify({
        error: "OpenAI API key not configured"
      }),
      { 
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  try {
    if (!request.body) {
      throw new Error("Request body is empty");
    }

    const body = await request.json();
    const { message } = body;
    
    // Mostrar un chiste aleatorio en el log cada vez que alguien envía un mensaje
    console.log(`📝 Nuevo mensaje recibido: "${message.substring(0, 30)}${message.length > 30 ? '...' : ''}"`);
    console.log(`😂 ${getRandomJoke()}`);
    
    // Crear logs para enviar al cliente
    const serverLogs = {
      messageReceived: `📝 Nuevo mensaje recibido: "${message.substring(0, 30)}${message.length > 30 ? '...' : ''}"`,
      joke: `😂 ${getRandomJoke()}`
    };
    
    // Obtener la IP del cliente
    const ip = clientAddress || "unknown";
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    
    // Comprobar si esta IP ya ha hecho solicitudes hoy
    if (!ipLimiter[ip] || ipLimiter[ip].date !== today) {
      // Primera solicitud del día o día diferente
      ipLimiter[ip] = { count: 1, date: today };
    } else {
      // Incrementar el contador para solicitudes del mismo día
      ipLimiter[ip].count++;
    }
    
    // Comprobar si se ha excedido el límite diario
    if (ipLimiter[ip].count > MAX_MESSAGES_PER_DAY) {
      return new Response(
        JSON.stringify({
          response: "Has alcanzado el límite de consultas diarias. Si con estas 15 preguntas no has podido decidir si Juan es la persona ideal para tu proyecto, quizás debas considerar otras opciones o contactar directamente con él para más información."
        }),
        { 
          status: 429, // Too Many Requests
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    if (!message) {
      return new Response(
        JSON.stringify({
          error: "Message is required"
        }),
        { 
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Eres un asistente virtual que representa a Juan A. Doval. Tu función principal es responder ÚNICAMENTE a preguntas sobre:
          1) Las habilidades profesionales de Juan en programación y desarrollo
          2) Si Juan es la persona ideal para contratar en proyectos de programación/tecnología basándote en su currículum
          3) Su experiencia profesional como desarrollador
          
          Cuando te pregunten "¿En qué puedes ayudarme?" o "¿Para qué estás?", responde explicando claramente: "Soy un asistente virtual diseñado para proporcionarte información profesional sobre Juan A. Doval. Puedo ayudarte a conocer sus habilidades como desarrollador, sus proyectos destacados, su experiencia profesional y evaluar si es el candidato ideal para tus proyectos tecnológicos. ¡Pregúntame cualquier cosa sobre su perfil profesional!"
          
          Si detectas que la pregunta no está relacionada con el currículum profesional de Juan o su idoneidad para ser contratado como programador, NO proporciones información técnica ni respondas la pregunta.
          En su lugar, responde de forma graciosa diciendo algo como: "¡Vaya! Eso está fuera de mi área de conocimiento. ¡Te recomiendo que uses ChatGPT para eso!"
          
          Perfiles profesionales que SÍ puedes compartir cuando te los pidan específicamente:
          - GitHub: https://github.com/dovaldev/
          - LinkedIn: https://www.linkedin.com/in/juanadoval/
          
          Para cualquier otra red social o información personal que te pregunten (Facebook, Instagram, teléfono, email, etc.), responde: "Lo siento, esa es información personal. Te recomiendo contactar directamente con Juan para esos detalles."
          
          SÍ puedes incluir enlaces reales HTTPS a los proyectos de Juan cuando sean relevantes para la conversación. Por ejemplo, los proyectos mencionados en su currículum como marcadorvirtual.top, arteconlili.com, etc.
          
          NO incluyas códigos, scripts o instrucciones técnicas en tus respuestas.
          
          Usa esta información sobre Juan para responder preguntas relacionadas con su perfil profesional: ${JUAN_CONTEXT}`
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return new Response(
      JSON.stringify({
        response: completion.choices[0].message.content,
        serverLogs: serverLogs // Incluir logs para mostrarlos en el navegador
      }),
      { 
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({
        error: "There was an error processing your request"
      }),
      { 
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}