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
  "title": "Título de la página 3",
  "layout": "../../components/Page.astro",
  "page": 3
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "logros",
    "text": "LOGROS"
  }, {
    "depth": 2,
    "slug": "herramientas-y-tecnologías",
    "text": "HERRAMIENTAS Y TECNOLOGÍAS"
  }, {
    "depth": 2,
    "slug": "movilidad",
    "text": "MOVILIDAD"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "logros",
      children: createVNode(_components.strong, {
        children: "LOGROS"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Arteconlili.com"
        }), ": Desarrollo y gestión de un sitio en ", createVNode("span", {
          class: "tag",
          children: "WordPress"
        }), " con mejoras SEO, alcanzando más de 40K usuarios mensuales."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Marcadorvirtual.top"
        }), ": Creación de un proyecto personal que ha atraído más de 1K usuarios en picos de tráfico, utilizando técnicas avanzadas de SEO y análisis competitivo."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Simulador de la Kings League"
        }), ": Desarrollo de una aplicación en ", createVNode("span", {
          class: "tag",
          children: "React"
        }), ", optimizando visibilidad en motores de búsqueda según la documentación de Google."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Administración de VPS con HestiaCP"
        }), ": Instalación y configuración de un VPS con ", createVNode("span", {
          class: "tag",
          children: "HestiaCP"
        }), " para gestionar y desplegar aplicaciones web desarrolladas en ", createVNode("span", {
          class: "tag",
          children: "Laravel"
        }), ", ", createVNode("span", {
          class: "tag",
          children: "Next.js"
        }), " y ", createVNode("span", {
          class: "tag",
          children: "React"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "herramientas-y-tecnologías",
      children: createVNode(_components.strong, {
        children: "HERRAMIENTAS Y TECNOLOGÍAS"
      })
    }), "\n", createVNode(_components.p, {
      children: "A lo largo de mi experiencia, he trabajado con una variedad de herramientas y tecnologías que me han permitido optimizar el desarrollo de proyectos:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Herramientas de diseño y maquetación"
        }), ": Figma, Sketch, Photoshop, Inkscape, Canva"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Control de versiones"
        }), ": Git, GitHub"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Automatización de tareas y desarrollo"
        }), ": Docker"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Entorno de desarrollo"
        }), ": Visual Studio Code, Android Studio"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Gestión de proyectos"
        }), ": Jira, Trello, Asana"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cloud y VPS"
        }), ": HestiaCP"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "movilidad",
      children: createVNode(_components.strong, {
        children: "MOVILIDAD"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Coche propio"
        }), " y ", createVNode(_components.strong, {
          children: "disponibilidad para viajar"
        }), ", lo que me permite adaptarme a las necesidades del proyecto y realizar desplazamientos cuando sea necesario."]
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

const url = "src/content/es/page-3.mdx";
const file = "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/content/es/page-3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/content/es/page-3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
