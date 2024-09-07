globalThis.process ??= {}; globalThis.process.env ??= {};
import { K as Fragment, _ as __astro_tag_component__, j as createVNode } from './astro/server_BKSh1SVN.mjs';
import { $ as $$Image, a as $$Page } from './_astro_assets_BaXM5PEr.mjs';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$Page, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "title": "Título de la página 2",
  "layout": "../../components/Page.astro",
  "page": 2
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "proyectos-personales-ourense",
    "text": "Proyectos Personales, Ourense"
  }, {
    "depth": 2,
    "slug": "formación",
    "text": "FORMACIÓN"
  }, {
    "depth": 2,
    "slug": "sobre-mí",
    "text": "SOBRE MÍ"
  }, {
    "depth": 2,
    "slug": "conocimientos",
    "text": "CONOCIMIENTOS"
  }, {
    "depth": 2,
    "slug": "idiomas",
    "text": "IDIOMAS"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "proyectos-personales-ourense",
      children: createVNode(_components.strong, {
        children: "Proyectos Personales, Ourense"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        class: "subtitle",
        children: "Aplicaciones Android - Kotlin"
      }), createVNode(_components.br, {}), "\n", createVNode("span", {
        class: "subtitle-2",
        children: "2016 - 2021"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Variedad de aplicaciones creadas para la tienda de Google ", createVNode(_components.a, {
          href: "https://play.google.com/store/apps/dev?id=8456900220652201691",
          children: createVNode(_components.strong, {
            children: "Play Store"
          })
        }), ". Puede encontrar más apps fuera de la tienda, ", createVNode(_components.strong, {
          children: "buscando el desarrollador liliandroid"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "formación",
      children: createVNode(_components.strong, {
        children: "FORMACIÓN"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "FP Instalaciones Electrotécnicas"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Educación Secundaria Obligatoria"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Autodidacta"
        }), ", con recursos de documentación técnica, YouTube y Udemy."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "sobre-mí",
      children: createVNode(_components.strong, {
        children: "SOBRE MÍ"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Estoy constantemente ", createVNode(_components.strong, {
        children: "inspirado por nuevas ideas"
      }), ", buscando siempre cómo ", createVNode(_components.strong, {
        children: "darles vida"
      }), " y aprendiendo ", createVNode(_components.strong, {
        children: "nuevas habilidades para mejorar"
      }), ". Me apasiona el ", createVNode(_components.strong, {
        children: "crecimiento continuo y el aprendizaje"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "conocimientos",
      children: createVNode(_components.strong, {
        children: "CONOCIMIENTOS"
      })
    }), "\n", createVNode(_components.p, {
      children: ["A lo largo del tiempo, he trabajado con diversas tecnologías como ", createVNode("span", {
        class: "tag",
        children: "Java"
      }), " y ", createVNode("span", {
        class: "tag",
        children: "Kotlin"
      }), " para el desarrollo de aplicaciones publicadas en el ", createVNode("span", {
        class: "tag",
        children: "Play Store de Android"
      }), ". Sin embargo, recientemente me he enfocado más en el stack ", createVNode("span", {
        class: "tag",
        children: "Laravel"
      }), ", ", createVNode("span", {
        class: "tag",
        children: "MySQL"
      }), ", ", createVNode("span", {
        class: "tag",
        children: "HTML"
      }), " y ", createVNode("span", {
        class: "tag",
        children: "React"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["En los últimos tres años, he realizado proyectos utilizando ", createVNode("span", {
        class: "tag",
        children: "Laravel"
      }), ", ", createVNode("span", {
        class: "tag",
        children: "React"
      }), ", ", createVNode("span", {
        class: "tag",
        children: "PHP"
      }), ", ", createVNode("span", {
        class: "tag",
        children: "Python"
      }), ", ", createVNode("span", {
        class: "tag",
        children: "Next.js"
      }), ", ", createVNode("span", {
        class: "tag",
        children: "CSS3"
      }), " y ", createVNode("span", {
        class: "tag",
        children: "TailwindCSS"
      }), " para el estilado. Además, he trabajado con ", createVNode("span", {
        class: "tag",
        children: "WordPress"
      }), ", creando plugins, adaptando temas, desarrollando y maquetando tiendas online y sitios web para diferentes clientes."]
    }), "\n", createVNode(_components.h2, {
      id: "idiomas",
      children: createVNode(_components.strong, {
        children: "IDIOMAS"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Español:"
        }), " Nativo"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Gallego:"
        }), " Nativo"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inglés:"
        }), " Intermedio (comprensión alta, escritura y conversación intermedias)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Portugués:"
        }), " Intermedio (comprensión alta, conversación intermedia)"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "src/content/es/page-2.mdx";
const file = "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/content/es/page-2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/content/es/page-2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
