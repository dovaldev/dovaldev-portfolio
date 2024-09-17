globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, d as renderSlot, e as createTransitionScope, f as renderComponent } from '../chunks/astro/server_DrIVYDa9.mjs';
import { $ as $$Layout } from '../chunks/Layout_jPuQp5Gg.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$t = createAstro("https://portfolio.dovaldev.com");
const $$IconDoc = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$IconDoc;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(props)} viewBox="0 0 48 48"> <linearGradient id="a" x1="-209.942" x2="-179.36" y1="-3.055" y2="27.526" gradientTransform="translate(208.979 6.006)" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#55adfd"></stop> <stop offset="1" stop-color="#438ffd"></stop> </linearGradient> <path fill="url(#a)" d="M39.001 13.999v27a2 2 0 0 1-2 2h-26a2 2 0 0 1-2-2v-34a2 2 0 0 1 2-2h19l2 7z"></path> <path fill="#fff" fill-rule="evenodd" d="M15.999 18.001V21h17.002v-2.999zm.002 6V27h17.002v-2.999zm-.002 6V33H28v-2.999z" clip-rule="evenodd"></path> <linearGradient id="b" x1="-197.862" x2="-203.384" y1="-4.632" y2=".89" gradientTransform="translate(234.385 12.109)" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#427fdb"></stop> <stop offset="1" stop-color="#0c52bb"></stop> </linearGradient> <path fill="url(#b)" d="m30.001 13.999.001-9 8.999 8.999z"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconDoc.astro", void 0);

const FILE_NAME = "juan-a-doval-nogueira-curriculum-vitae";

const $$Astro$s = createAstro("https://portfolio.dovaldev.com");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$NavLink;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a title="No tienes permisos de edición"${addAttribute(props.href, "href")}${addAttribute(`cursor-not-allowed text-sm text-black dark:text-white font-thin ${props.class} hover:bg-gray-200 dark:hover:bg-gray-700 rounded-[2px] transition-all ease-in-out py-0.5 px-2`, "class")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/components/NavLink.astro", void 0);

const $$Astro$r = createAstro("https://portfolio.dovaldev.com");
const $$IconStar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$IconStar;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} viewBox="0 0 24 24" data-name="Line Color" xmlns="http://www.w3.org/2000/svg"> <path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2" d="M12 4 9.22 9.27 3 10.11l4.5 4.1L6.44 20 12 17.27 17.56 20l-1.06-5.79 4.5-4.1-6.22-.84z"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconStar.astro", void 0);

const $$Astro$q = createAstro("https://portfolio.dovaldev.com");
const $$IconFolder = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$IconFolder;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} viewBox="0 0 24 24" data-name="Line Color" xmlns="http://www.w3.org/2000/svg"> <path d="M21 8v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5.59a1 1 0 0 1 .7.29l2.42 2.42a1 1 0 0 0 .7.29H20a1 1 0 0 1 1 1" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"></path></svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconFolder.astro", void 0);

const $$Astro$p = createAstro("https://portfolio.dovaldev.com");
const $$IconCloud = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$IconCloud;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} viewBox="0 0 24 24" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"> <path d="M17 9a4 4 0 0 0-.93.12 5 5 0 0 0-9 2.09A3 3 0 1 0 6 17h11a4 4 0 0 0 0-8" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconCloud.astro", void 0);

const $$Astro$o = createAstro("https://portfolio.dovaldev.com");
const $$IconSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$IconSearch;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg fill="currentColor"${spreadAttributes(props)} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>search</title><path d="M416 448L319 351Q277 383 224 383 181 383 144 362 107 340 86 303 64 266 64 223 64 180 86 143 107 106 144 85 181 63 224 63 267 63 304 85 341 106 363 143 384 180 384 223 384 277 351 319L448 416 416 448ZM223 336Q270 336 303 303 335 270 335 224 335 177 303 145 270 112 223 112 177 112 144 145 111 177 111 224 111 270 144 303 177 336 223 336Z"></path></svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconSearch.astro", void 0);

const $$Astro$n = createAstro("https://portfolio.dovaldev.com");
const $$IconUndo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$IconUndo;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 10H17C19.2091 10 21 11.7909 21 14V14C21 16.2091 19.2091 18 17 18H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 6L3 10L7 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconUndo.astro", void 0);

const $$Astro$m = createAstro("https://portfolio.dovaldev.com");
const $$IconRedo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$IconRedo;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 10H7C4.79086 10 3 11.7909 3 14V14C3 16.2091 4.79086 18 7 18H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 6L21 10L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconRedo.astro", void 0);

const $$Astro$l = createAstro("https://portfolio.dovaldev.com");
const $$IconPrint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$IconPrint;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 2h12v6h4v10h-4v4H6v-4H2V8h4V2zm2 6h8V4H8v4zm-2 8v-4h12v4h2v-6H4v6h2zm2-2v6h8v-6H8z" fill="currentColor"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconPrint.astro", void 0);

const $$Astro$k = createAstro("https://portfolio.dovaldev.com");
const $$IconText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$IconText;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(props)} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0M4 12V7a3 3 0 1 1 6 0v5M4 9h6m10-3v6M4 16h12M4 20h6m4 0l2 2l5-5"></path></svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconText.astro", void 0);

const $$Astro$j = createAstro("https://portfolio.dovaldev.com");
const $$IconFormat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$IconFormat;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} viewBox="0 -0.5 17 17" xmlns="http://www.w3.org/2000/svg" class="si-glyph si-glyph-roller"> <g fill="currentColor" fill-rule="evenodd"> <path d="M7.5 15.938a.5.5 0 0 1-.5-.5v-3.906c0-.275.225-.5.5-.5H8V8.389c0-.248.179-.456.425-.494L16 5.93V3.032h-.5a.5.5 0 0 1-.5-.5c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v3.857a.496.496 0 0 1-.423.494L9 8.849v2.183h.5c.275 0 .5.225.5.5v3.906c0 .275-.225.5-.5.5z" class="si-glyph-fill"></path> <path d="M14 3V2a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2" class="si-glyph-fill"></path> </g> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconFormat.astro", void 0);

const $$Astro$i = createAstro("https://portfolio.dovaldev.com");
const $$IconLock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$IconLock;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13 7h-1V5a4 4 0 1 0-8 0v2H3L2 8v6l1 1h10l1-1V8l-1-1zM5 5a3 3 0 1 1 6 0v2H5V5zm8 9H3V8h10v6z"></path></svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconLock.astro", void 0);

const $$Astro$h = createAstro("https://portfolio.dovaldev.com");
const $$IconArrowDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$IconArrowDown;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"> <polyline style="fill:none;stroke:currentCOlor;stroke-width:2;stroke-miterlimit:10;" points="28.5,11.5 16,24 3.5,11.5 "></polyline> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconArrowDown.astro", void 0);

const $$Astro$g = createAstro("https://portfolio.dovaldev.com");
const $$IconMessage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$IconMessage;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg fill="currentColor"${spreadAttributes(props)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17,7H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm0,4H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm2-9H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path></svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconMessage.astro", void 0);

const $$Astro$f = createAstro("https://portfolio.dovaldev.com");
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/Sun.astro", void 0);

const $$Astro$e = createAstro("https://portfolio.dovaldev.com");
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/Moon.astro", void 0);

const $$Astro$d = createAstro("https://portfolio.dovaldev.com");
const $$System = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$System;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/System.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="relative ml-1 mr-1 z-10" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3', '> <span class="sr-only" data-astro-cid-x3pjskd3>Elige el tema</span> ', " ", " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3', "> <ul data-astro-cid-x3pjskd3> ", ` </ul> </div> </div>  <script>
  let remove = null
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
  const themesMenu = document.getElementById("themes-menu")

  const getThemePreference = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "system"
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }

  const updateIcon = (themePreference) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.style.scale = element.id === themePreference ? "1" : "0"
    })
  }

  const updateTheme = () => {
    if (remove != null) {
      remove()
    }
    matchMedia.addEventListener("change", updateTheme)
    remove = () => {
      matchMedia.removeEventListener("change", updateTheme)
    }

    const themePreference = getThemePreference()
    const isDark =
      themePreference === "dark" ||
      (themePreference === "system" && matchMedia.matches)

    updateIcon(themePreference)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }

  updateTheme()

  document.addEventListener("click", () => themesMenu.classList.remove("open"))

  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {
    e.stopPropagation()
    const isClosed = !themesMenu.classList.contains("open")
    themesMenu.classList[isClosed ? "add" : "remove"]("open")
  })

  document.querySelectorAll(".themes-menu-option").forEach((element) => {
    element.addEventListener("click", (e) => {
      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim())
      updateTheme()
    })
  })

  document.addEventListener('astro:after-swap', () => {
    updateTheme();
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
  })
<\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "ko5uysgj"), "data-astro-transition-persist"), renderComponent($$result, "SunIcon", $$Sun, { "id": "light", "class": "text-gray-700 dark:text-white theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark", "class": "text-gray-700 dark:text-white theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system", "class": "text-gray-700 dark:text-white theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), addAttribute(createTransitionScope($$result, "d5hlxqxh"), "data-astro-transition-persist"), THEMES.map((theme) => renderTemplate`<li class="text-black dark:text-gray-100 themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/components/ThemeToggle.astro", "self");

const $$Astro$c = createAstro("https://portfolio.dovaldev.com");
const $$IconArrowLeft = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$IconArrowLeft;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve"> <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="6" y1="16" x2="28" y2="16"></line> <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" points="14,24.5 5.5,16 14,7.5 "></polyline> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconArrowLeft.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggleMobile = createComponent(($$result, $$props, $$slots) => {
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a || (_a = __template(["<!-- Versi\xF3n m\xF3vil -->", '<div class="relative ml-1 mr-1 block md:hidden z-10" data-astro-cid-4on6dsaz> <button id="theme-toggle-btn-mobile" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-4on6dsaz', '> <span class="sr-only" data-astro-cid-4on6dsaz>Elige el tema</span> ', " ", " ", ' </button> <div id="themes-menu-mobile" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-4on6dsaz', "> <ul data-astro-cid-4on6dsaz> ", ` </ul> </div> </div>  <script>
  let removeMobile = null
  const matchMediaMobile = window.matchMedia("(prefers-color-scheme: dark)")
  const themesMenuMobile = document.getElementById("themes-menu-mobile")

  const getThemePreferenceMobile = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "system"
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }

  const updateIconMobile = (themePreference) => {
    document.querySelectorAll(".theme-toggle-icon-mobile").forEach((element) => {
      element.style.scale = element.id.includes(themePreference) ? "1" : "0"
    })
  }

  const updateThemeMobile = () => {
    if (removeMobile != null) {
      removeMobile()
    }
    matchMediaMobile.addEventListener("change", updateThemeMobile)
    removeMobile = () => {
      matchMediaMobile.removeEventListener("change", updateThemeMobile)
    }

    const themePreference = getThemePreferenceMobile()
    const isDark =
      themePreference === "dark" ||
      (themePreference === "system" && matchMediaMobile.matches)

    updateIconMobile(themePreference)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }

  updateThemeMobile()

  document.addEventListener("click", () => themesMenuMobile.classList.remove("open"))

  document.getElementById("theme-toggle-btn-mobile").addEventListener("click", (e) => {
    e.stopPropagation()
    const isClosed = !themesMenuMobile.classList.contains("open")
    themesMenuMobile.classList[isClosed ? "add" : "remove"]("open")
  })

  document.querySelectorAll(".themes-menu-option-mobile").forEach((element) => {
    element.addEventListener("click", (e) => {
      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim())
      updateThemeMobile()
    })
  })

  document.addEventListener('astro:after-swap', () => {
    updateThemeMobile();
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
  })
<\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "wo2gh7zv"), "data-astro-transition-persist"), renderComponent($$result, "SunIcon", $$Sun, { "id": "light-mobile", "class": "text-gray-700 dark:text-white theme-toggle-icon-mobile size-5 transition-all", "data-astro-cid-4on6dsaz": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark-mobile", "class": "text-gray-700 dark:text-white theme-toggle-icon-mobile absolute size-5 transition-all", "data-astro-cid-4on6dsaz": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system-mobile", "class": "text-gray-700 dark:text-white theme-toggle-icon-mobile absolute size-5 transition-all", "data-astro-cid-4on6dsaz": true }), addAttribute(createTransitionScope($$result, "a63jccew"), "data-astro-transition-persist"), THEMES.map((theme) => renderTemplate`<li class="text-black dark:text-gray-100 themes-menu-option-mobile px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-4on6dsaz> ${theme} </li>`));
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/components/ThemeToggleMobile.astro", "self");

const $$Astro$b = createAstro("https://portfolio.dovaldev.com");
const $$IconLinkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$IconLinkedin;
  const props = Astro2.props;
  return renderTemplate`<!-- License: MIT. Made by michaelampr: https://github.com/michaelampr/jam -->${maybeRenderHead()}<svg fill="currentColor"${spreadAttributes(props)} viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-linkedin"><path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"></path></svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconLinkedin.astro", void 0);

const $$Astro$a = createAstro("https://portfolio.dovaldev.com");
const $$IconGithub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$IconGithub;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"></path></svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconGithub.astro", void 0);

const $$Astro$9 = createAstro("https://portfolio.dovaldev.com");
const $$DropdownMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$DropdownMenu;
  const { class: className = "", name = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`dropdown ${className}`, "class")}> <button${addAttribute(`dropdown-toggle text-sm text-black dark:text-white font-thin hover:bg-gray-200 dark:hover:bg-gray-700 rounded-[2px] transition-all ease-in-out py-0.5 px-2`, "class")}> ${name} </button> <div class="dropdown-menu bg-white dark:bg-black"> <div class="w-full h-auto flex flex-col p-0.5"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/components/DropdownMenu.astro", void 0);

const $$Astro$8 = createAstro("https://portfolio.dovaldev.com");
const $$DropdownLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$DropdownLink;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a title="No tienes permisos de edición"${addAttribute(props.href, "href")}${addAttribute(`flex place-items-center text-sm text-black dark:text-white font-light ${props.class} hover:bg-gray-200 dark:hover:bg-gray-700 rounded-[2px] transition-all ease-in-out px-1 py-2`, "class")}> ${renderSlot($$result, $$slots["icon"])} ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/components/DropdownLink.astro", void 0);

const $$Astro$7 = createAstro("https://portfolio.dovaldev.com");
const $$IconNewDocument = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$IconNewDocument;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(props)} viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14 3v4a1 1 0 0 0 1 1h4"></path> <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path> <path d="M12 11l0 6"></path> <path d="M9 14l6 0"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconNewDocument.astro", void 0);

const $$Astro$6 = createAstro("https://portfolio.dovaldev.com");
const $$IconOpenFolder = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$IconOpenFolder;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(props)} viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5"></path> <path d="M16 19h6"></path> <path d="M19 16v6"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconOpenFolder.astro", void 0);

const $$Astro$5 = createAstro("https://portfolio.dovaldev.com");
const $$IconSave = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$IconSave;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(props)} viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path> <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M14 4l0 4l-6 0l0 -4"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconSave.astro", void 0);

const $$Astro$4 = createAstro("https://portfolio.dovaldev.com");
const $$IconPaste = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$IconPaste;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(props)} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path> <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconPaste.astro", void 0);

const $$Astro$3 = createAstro("https://portfolio.dovaldev.com");
const $$IconCopy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$IconCopy;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(props)} viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path> <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconCopy.astro", void 0);

const $$Astro$2 = createAstro("https://portfolio.dovaldev.com");
const $$IconCut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$IconCut;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(props)} viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path> <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path> <path d="M9.15 14.85l8.85 -10.85"></path> <path d="M6 4l8.85 10.85"></path> </svg>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/icons/IconCut.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Header 1 -->${maybeRenderHead()}<nav class="hidden w-full md:flex gap-2 justify-between"> <!-- Header 1-1 --> <div class="flex w-auto shrink"> <div title="Pagina principal de documentos" class="flex justify-center items-center shrink"> ${renderComponent($$result, "IconDoc", $$IconDoc, { "class": "size-9" })} </div> <div class="flex flex-col justify-center shrink"> <div class="flex items-center gap-2 pl-2 shrink"> <a href="/" class="text-black dark:text-white text-lg">${FILE_NAME}</a> ${renderComponent($$result, "IconStar", $$IconStar, { "class": "size-5 text-black/50 dark:text-white/50 ml-4" })} ${renderComponent($$result, "IconFolder", $$IconFolder, { "class": "size-5 text-black/50 dark:text-white/50" })} ${renderComponent($$result, "IconCloud", $$IconCloud, { "class": "size-6 text-black/50 dark:text-white/50" })} </div> <div class="flex items-center w-auto shrink"> ${renderComponent($$result, "DropdownMenu", $$DropdownMenu, { "name": "Archivo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DropdownLink", $$DropdownLink, { "href": "#", "class": "text-black/50 dark:text-white/50" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["icon"], renderTemplate` ${renderComponent($$result3, "IconNewDocument", $$IconNewDocument, { "class": "mx-2 size-5" })} `)}
Nuevo
` })} ${renderComponent($$result2, "DropdownLink", $$DropdownLink, { "href": "#", "class": "text-black/50 dark:text-white/50" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["icon"], renderTemplate` ${renderComponent($$result3, "IconOpenFolder", $$IconOpenFolder, { "class": "mx-2 size-5" })} `)}
Abrir
` })} ${renderComponent($$result2, "DropdownLink", $$DropdownLink, { "href": "#", "class": "text-black/50 dark:text-white/50" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["icon"], renderTemplate` ${renderComponent($$result3, "IconSave", $$IconSave, { "class": "mx-2 size-5" })} `)}
Guardar
` })} ` })} ${renderComponent($$result, "DropdownMenu", $$DropdownMenu, { "name": "Editar" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DropdownLink", $$DropdownLink, { "href": "#", "class": "text-black/50 dark:text-white/50" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["icon"], renderTemplate` ${renderComponent($$result3, "IconUndo", $$IconUndo, { "class": "mx-2 size-5" })} `)}
Deshacer
` })} ${renderComponent($$result2, "DropdownLink", $$DropdownLink, { "href": "#", "class": "text-black/50 dark:text-white/50" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["icon"], renderTemplate` ${renderComponent($$result3, "IconRedo", $$IconRedo, { "class": "mx-2 size-5" })} `)}
Rehacer
` })} <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"> ${renderComponent($$result2, "DropdownLink", $$DropdownLink, { "href": "#", "class": "text-black/50 dark:text-white/50" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["icon"], renderTemplate` ${renderComponent($$result3, "IconCut", $$IconCut, { "class": "mx-2 size-5" })} `)}
Cortar
` })} ${renderComponent($$result2, "DropdownLink", $$DropdownLink, { "href": "#", "class": "text-black/50 dark:text-white/50" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["icon"], renderTemplate` ${renderComponent($$result3, "IconCopy", $$IconCopy, { "class": "mx-2 size-5" })} `)}
Copiar
` })} ${renderComponent($$result2, "DropdownLink", $$DropdownLink, { "href": "#", "class": "text-black/50 dark:text-white/50" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["icon"], renderTemplate` ${renderComponent($$result3, "IconPaste", $$IconPaste, { "class": "mx-2 size-5" })} `)}
Pegar
` })} ` })} ${renderComponent($$result, "NavLink", $$NavLink, { "href": "#" }, { "default": ($$result2) => renderTemplate`Ver` })} ${renderComponent($$result, "NavLink", $$NavLink, { "href": "#" }, { "default": ($$result2) => renderTemplate`Insertar` })} ${renderComponent($$result, "NavLink", $$NavLink, { "href": "#" }, { "default": ($$result2) => renderTemplate`Formato` })} ${renderComponent($$result, "NavLink", $$NavLink, { "href": "#" }, { "default": ($$result2) => renderTemplate`Herramientas` })} ${renderComponent($$result, "NavLink", $$NavLink, { "href": "#" }, { "default": ($$result2) => renderTemplate`Extensiones` })} ${renderComponent($$result, "NavLink", $$NavLink, { "href": "#" }, { "default": ($$result2) => renderTemplate`Ayuda` })} </div> </div> </div> <!-- Header 1-2 --> <div class="flex flex-grow gap-4 justify-end items-center w-full"> <a href="https://www.linkedin.com/in/juanadoval/" class="hover:bg-gray-200 rounded-lg p-1">${renderComponent($$result, "IconLinkedin", $$IconLinkedin, { "class": "size-5 text-black dark:text-white" })}</a> <a href="https://github.com/dovaldev/" class="hover:bg-gray-200 rounded-lg p-1">${renderComponent($$result, "IconGithub", $$IconGithub, { "class": "size-5 text-black dark:text-white" })}</a> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "elID": "theme-toggle-btn", "menuID": "themes-menu" })} ${renderComponent($$result, "IconMessage", $$IconMessage, { "class": "size-5 text-black dark:text-white" })} <div class="bg-[#C2E7FF] rounded-3xl"> <div class="py-2.5 px-6 flex items-center gap-2"> ${renderComponent($$result, "IconLock", $$IconLock, { "class": "size-5 text-gray-800" })} <span>Compartir</span> <div class="h-5 w-[1px] bg-white ml-1"></div> ${renderComponent($$result, "IconArrowDown", $$IconArrowDown, { "class": "size-3 text-gray-800" })} </div> </div> <img src="/images/icons/dovaldev-icon.webp" class="rounded-full size-12 object-cover"> </div> </nav> <!-- Header 2 --> <nav class="hidden md:block mt-2 verflow-x-scroll whitespace-nowrap cursor-grab overflow-hidden w-full"> <ul class="flex bg-gray-100 ark:bg-gray-200 dark:bg-gray-700 w-full rounded-2xl p-2 gap-2 items-center"> <li>${renderComponent($$result, "IconSearch", $$IconSearch, { "class": "size-5 text-black/50 dark:text-white/50" })}</li> <li>${renderComponent($$result, "IconUndo", $$IconUndo, { "class": "size-5 text-black/50 dark:text-white/50" })}</li> <li>${renderComponent($$result, "IconRedo", $$IconRedo, { "class": "size-5 text-black/50 dark:text-white/50" })}</li> <li> <button class="m-0 p-1 flex justify-center items-center hover:bg-gray-200 rounded" id="download-btn">${renderComponent($$result, "IconPrint", $$IconPrint, { "class": "size-5 text-black dark:text-white" })}</button> </li> <li>${renderComponent($$result, "IconText", $$IconText, { "class": "size-5 text-black/50 dark:text-white/50" })}</li> <li>${renderComponent($$result, "IconFormat", $$IconFormat, { "class": "size-5 text-black/50 dark:text-white/50" })}</li> <li> <select id="scale-selector" class="bg-gray-100 dark:bg-gray-700 text-black/50 dark:text-white/50 text-sm rounded-lg"> <option value="1">100%</option> <option value="0.8">80%</option> </select> </li> <div class="h-5 w-[1px] bg-white"></div> <select class="bg-gray-100 dark:bg-gray-700 text-black/50 dark:text-white/50 text-sm rounded-lg"> <option value="100">Texto nor...</option> </select> <li> <select class="bg-gray-100 dark:bg-gray-700 text-black/50 dark:text-white/50 text-sm rounded-lg"> <option value="100">PT Mo...</option> </select> </li> <div class="h-5 w-[1px] bg-white"></div> <li> <select class="bg-gray-100 dark:bg-gray-700 text-black/50 dark:text-white/50 text-sm rounded-lg"> <option value="100">Subtítulo</option> </select> </li> <li> <select class="bg-gray-100 dark:bg-gray-700 text-black/50 dark:text-white/50 text-sm rounded-lg"> <option value="100">Robot...</option> </select> </li> <div class="h-5 w-[1px] bg-white mr-1"></div> <li> <div class="flex items-center gap-2.5"> <button class="text-black/50 dark:text-white/50">-</button> <input type="number" class="bg-gray-200 dark:bg-gray-700 text-black/50 dark:text-white/50 text-sm rounded border w-8 h-6 text-center" value="9"> <button class="text-black/50 dark:text-white/50">+</button> </div> </li> <div class="h-5 w-[1px] bg-white ml-1"></div> <div class="flex gap-4 items-center"> <li class="font-semibold text-black/50 dark:text-white/50">B</li> <li class="font-serif italic text-black/50 dark:text-white/50">I</li> <li class="underline underline-offset-4 text-black/50 dark:text-white/50">U</li> </div> </ul> </nav> <nav class="w-full flex md:hidden items-center gap-4 justify-between"> ${renderComponent($$result, "IconArrowLeft", $$IconArrowLeft, { "class": "size-8 text-black dark:text-white" })} <a href="/" class="text-black dark:text-white text-xl flex-1">${FILE_NAME}</a> ${renderComponent($$result, "ThemeToggleMobile", $$ThemeToggleMobile, {})} </nav> <nav class="flex gap-4 my-2 md:hidden"> <a href="https://www.linkedin.com/in/juanadoval/" class="hover:bg-gray-200 rounded-lg p-1">${renderComponent($$result, "IconLinkedin", $$IconLinkedin, { "class": "size-5 text-black dark:text-white" })}</a> <a href="https://github.com/dovaldev/" class="hover:bg-gray-200 rounded-lg p-1">${renderComponent($$result, "IconGithub", $$IconGithub, { "class": "size-5 text-black dark:text-white" })}</a> </nav> `;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/components/Nav.astro", void 0);

const $$Astro$1 = createAstro("https://portfolio.dovaldev.com");
const $$GoogleDocs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GoogleDocs;
  return renderTemplate`${maybeRenderHead()}<main class="h-screen w-full overflow-hidden flex flex-col"> <!-- Nav conent --> <header class="pt-4 px-4 w-full flex flex-col items-center"> ${renderComponent($$result, "Nav", $$Nav, {})} </header> ${renderSlot($$result, $$slots["default"])} <!-- Footer content --> <footer class="h-auto pt-1 pb-2 px-2 bg-black/10 flex justify-center items-center flex-col"> <p class="text-black dark:text-white font-thin text-sm">
Creado por <span class="font-bold text-yellow-600 dark:text-yellow-300">Juan A. Doval</span> en
        Astro y TailwindCSS
</p> <p class="text-black dark:text-white font-thin text-xs">Algunos componentes son del porfolio de <a class="font-bold hover:text-gray-700 dark:hover:text-gray-300" href="https://porfolio.dev/" rel="nofollow noopener" target="_blank">midudev</a></p> </footer> </main>`;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/components/GoogleDocs.astro", void 0);

const $$Astro = createAstro("https://portfolio.dovaldev.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pages = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/es/page-1.mdx": () => import('../chunks/page-1_BGfLBu58.mjs'),"../../content/es/page-2.mdx": () => import('../chunks/page-2_BMTiRwvn.mjs'),"../../content/es/page-3.mdx": () => import('../chunks/page-3_DGERRh3D.mjs')}), () => "../../content/es/*.mdx");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de Juan A. Doval con mis Proyectos | dovaldev", "data-astro-cid-7pewbour": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GoogleDocs", $$GoogleDocs, { "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div id="pages" class="flex flex-1 flex-col gap-10 items-center overflow-y-scroll scrollbar-custom p-2 md:py-5" data-astro-cid-7pewbour> ${pages.map((item) => renderTemplate`${renderComponent($$result3, "item.Content", item.Content, { "data-astro-cid-7pewbour": true })}`)} </div> ` })} ` })}  `;
}, "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/pages/es/index.astro", void 0);

const $$file = "/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
