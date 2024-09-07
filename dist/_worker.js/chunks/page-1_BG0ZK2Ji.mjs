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
  "title": "Título de la página 1",
  "layout": "../../components/Page.astro",
  "page": 1
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "juan-antonio-doval-nogueira",
    "text": "JUAN ANTONIO DOVAL NOGUEIRA"
  }, {
    "depth": 2,
    "slug": "experiencia-profesional",
    "text": "EXPERIENCIA PROFESIONAL"
  }, {
    "depth": 3,
    "slug": "busirocket-cáceres",
    "text": "Busirocket, Cáceres"
  }, {
    "depth": 3,
    "slug": "proyectos-personales-ourense",
    "text": "Proyectos Personales, Ourense"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("span", {
      class: "inline-block text-gray-600 font-light",
      children: "O BARCO DE VALDEORRAS (OURENSE)"
    }), "\n", createVNode(_components.h1, {
      id: "juan-antonio-doval-nogueira",
      children: "JUAN ANTONIO DOVAL NOGUEIRA"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "experiencia-profesional",
      children: createVNode(_components.strong, {
        children: "EXPERIENCIA PROFESIONAL"
      })
    }), "\n", createVNode("p", {
      class: "mb-4",
      children: "Algunos proyectos en los que he trabajado."
    }), "\n", createVNode(_components.h3, {
      id: "busirocket-cáceres",
      children: createVNode(_components.strong, {
        children: "Busirocket, Cáceres"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        class: "subtitle",
        children: "Maquetación de Webs WordPress"
      }), createVNode(_components.br, {}), "\n", createVNode("span", {
        class: "subtitle-2",
        children: "2021 - ACTUALIDAD (freelance)"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Maquetación y diseño de página web en ", createVNode("span", {
          class: "tag",
          children: "WordPress"
        }), " con diferentes temas y maquetadores."]
      }), "\n", createVNode(_components.li, {
        children: "Creación de pequeños plugins para adaptar la app a los requisitos del cliente."
      }), "\n", createVNode(_components.li, {
        children: "Marketing digital y RRSS."
      }), "\n", createVNode(_components.li, {
        children: [createVNode("span", {
          class: "tag",
          children: "Google Ads"
        }), " y ", createVNode("span", {
          class: "tag",
          children: "Facebook Ads"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://deluxeproducciones.es/",
          children: createVNode(_components.strong, {
            children: "deluxeproducciones.es"
          })
        }), ", diseño web usando ", createVNode("span", {
          class: "tag",
          children: "Oxygen"
        }), ", ", createVNode("span", {
          class: "tag",
          children: "CSS"
        }), ", ", createVNode("span", {
          class: "tag",
          children: "PHP"
        }), " personalizado y SEO."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://depositoagua.com/",
          children: createVNode(_components.strong, {
            children: "depositoagua.com"
          })
        }), ", diseño web, ", createVNode("span", {
          class: "tag",
          children: "CSS"
        }), ", ", createVNode("span", {
          class: "tag",
          children: "PHP"
        }), " personalizado y SEO."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "proyectos-personales-ourense",
      children: createVNode(_components.strong, {
        children: "Proyectos Personales, Ourense"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        class: "subtitle",
        children: "Web Developer"
      }), createVNode(_components.br, {}), "\n", createVNode("span", {
        class: "subtitle-2",
        children: "2021 - ACTUALIDAD (freelance)"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://marcadorvirtual.top/",
          children: createVNode(_components.strong, {
            children: "marcadorvirtual.top"
          })
        }), ", web creada en ", createVNode("span", {
          class: "tag",
          children: "Laravel"
        }), " + ", createVNode("span", {
          class: "tag",
          children: "Blade"
        }), ", ", createVNode("span", {
          class: "tag",
          children: "Filament PHP"
        }), ", con ", createVNode("span", {
          class: "tag",
          children: "React"
        }), " para ampliar funcionalidad en algunas páginas. Usando IA puedo automatizar la creación de las publicaciones e imágenes para la web."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://arteconlili.com",
          children: createVNode(_components.strong, {
            children: "arteconlili.com"
          })
        }), ", diseño web y modificaciones ", createVNode("span", {
          class: "tag",
          children: "CSS"
        }), ", plugins en ", createVNode("span", {
          class: "tag",
          children: "PHP"
        }), ", maquetado y SEO."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://scrapbookingdigital.top/",
          children: createVNode(_components.strong, {
            children: "scrapbookingdigital.top"
          })
        }), ", diseño web, plugins, maquetado y SEO (", createVNode("span", {
          class: "tag",
          children: "NextJS"
        }), " y ", createVNode("span", {
          class: "tag",
          children: "Tailwind"
        }), ")."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://cdbarco.com/",
          children: createVNode(_components.strong, {
            children: "cdbarco.com"
          })
        }), ", proyecto personal para el Club de Fútbol CD Barco creado en ", createVNode("span", {
          class: "tag",
          children: "Laravel"
        }), " y ", createVNode("span", {
          class: "tag",
          children: "Filament PHP"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://perfilazo.top/@dovaldev",
          children: createVNode(_components.strong, {
            children: "perfilazo.top"
          })
        }), ", un proyecto similar a Linktree, diseñado para gestionar y compartir múltiples enlaces en una única página personalizada."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://enlaza.top",
          children: createVNode(_components.strong, {
            children: "enlaza.top"
          })
        }), ": Un acortador de enlaces que ofrece un blog, funcionalidad de acortamiento de URLs y registro de usuarios."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://calculadoraonline.top",
          children: createVNode(_components.strong, {
            children: "calculadoraonline.top"
          })
        }), ", página web con múltiples"]
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

const url = "src/content/es/page-1.mdx";
const file = "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/content/es/page-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/content/es/page-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
