globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderTemplate, f as renderComponent, a as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BKSh1SVN.mjs';
import { $ as $$Layout } from '../chunks/Layout_BF7Ekp__.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <nav></nav> <div id="content"></div> <footer></footer> </main> ` })}`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
