globalThis.process ??= {}; globalThis.process.env ??= {};
import { h as decodeKey } from './chunks/astro/server_BKSh1SVN.mjs';
import './chunks/shared_lrB76AGK.mjs';
import './chunks/astro-designed-error-pages_5Snjga4R.mjs';

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){const a=document.getElementById(\"download-btn\"),e=document.getElementById(\"pages\");a&&e?a.addEventListener(\"click\",async function(){const o=e.querySelectorAll(\".page-content\"),n=document.createElement(\"div\");o.forEach((s,c)=>{const t=s.cloneNode(!0);t.style.border=\"none\",t.className=t.className.replace(/\\b(w-\\S+|h-\\S+|min-h-\\S+|min-w-\\S+)\\b/g,\"\"),t.style.pageBreakAfter=\"always\",n.appendChild(t)});const d={margin:0,filename:\"cv-juan-a-doval.pdf\",image:{type:\"jpeg\",quality:.98},html2canvas:{scale:1.9},jsPDF:{unit:\"in\",format:\"letter\",orientation:\"portrait\"},pagebreak:{mode:[\"avoid-all\",\"css\",\"legacy\"]}};await html2pdf().from(n).set(d).save(),n.remove()}):console.error(\"El botón de descarga o el contenedor de páginas no existen.\")});document.addEventListener(\"DOMContentLoaded\",function(){const a=document.querySelectorAll(\".tag\"),e=[\"bg-random-1\",\"bg-random-2\",\"bg-random-3\",\"bg-random-4\",\"bg-random-5\"];a.forEach(o=>{const n=e[Math.floor(Math.random()*e.length)];o.classList.add(n)})});\n"}],"styles":[{"type":"external","src":"/_astro/index.BQ7pWGm-.css"},{"type":"inline","content":"#themes-menu[data-astro-cid-x3pjskd3].open{display:inline;animation:scale-up-center .15s cubic-bezier(.25,.46,.45,.94) both}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}#themes-menu-mobile[data-astro-cid-4on6dsaz].open{display:inline;animation:scale-up-center .15s cubic-bezier(.25,.46,.45,.94) both}@keyframes scale-up-center{0%{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}\n"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){const a=document.getElementById(\"download-btn\"),e=document.getElementById(\"pages\");a&&e?a.addEventListener(\"click\",async function(){const o=e.querySelectorAll(\".page-content\"),n=document.createElement(\"div\");o.forEach((s,c)=>{const t=s.cloneNode(!0);t.style.border=\"none\",t.className=t.className.replace(/\\b(w-\\S+|h-\\S+|min-h-\\S+|min-w-\\S+)\\b/g,\"\"),t.style.pageBreakAfter=\"always\",n.appendChild(t)});const d={margin:0,filename:\"cv-juan-a-doval.pdf\",image:{type:\"jpeg\",quality:.98},html2canvas:{scale:1.9},jsPDF:{unit:\"in\",format:\"letter\",orientation:\"portrait\"},pagebreak:{mode:[\"avoid-all\",\"css\",\"legacy\"]}};await html2pdf().from(n).set(d).save(),n.remove()}):console.error(\"El botón de descarga o el contenedor de páginas no existen.\")});document.addEventListener(\"DOMContentLoaded\",function(){const a=document.querySelectorAll(\".tag\"),e=[\"bg-random-1\",\"bg-random-2\",\"bg-random-3\",\"bg-random-4\",\"bg-random-5\"];a.forEach(o=>{const n=e[Math.floor(Math.random()*e.length)];o.classList.add(n)})});\n"}],"styles":[{"type":"external","src":"/_astro/index.BQ7pWGm-.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){const a=document.getElementById(\"download-btn\"),e=document.getElementById(\"pages\");a&&e?a.addEventListener(\"click\",async function(){const o=e.querySelectorAll(\".page-content\"),n=document.createElement(\"div\");o.forEach((s,c)=>{const t=s.cloneNode(!0);t.style.border=\"none\",t.className=t.className.replace(/\\b(w-\\S+|h-\\S+|min-h-\\S+|min-w-\\S+)\\b/g,\"\"),t.style.pageBreakAfter=\"always\",n.appendChild(t)});const d={margin:0,filename:\"cv-juan-a-doval.pdf\",image:{type:\"jpeg\",quality:.98},html2canvas:{scale:1.9},jsPDF:{unit:\"in\",format:\"letter\",orientation:\"portrait\"},pagebreak:{mode:[\"avoid-all\",\"css\",\"legacy\"]}};await html2pdf().from(n).set(d).save(),n.remove()}):console.error(\"El botón de descarga o el contenedor de páginas no existen.\")});document.addEventListener(\"DOMContentLoaded\",function(){const a=document.querySelectorAll(\".tag\"),e=[\"bg-random-1\",\"bg-random-2\",\"bg-random-3\",\"bg-random-4\",\"bg-random-5\"];a.forEach(o=>{const n=e[Math.floor(Math.random()*e.length)];o.classList.add(n)})});\n"}],"styles":[{"type":"external","src":"/_astro/index.BQ7pWGm-.css"}],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/components/ThemeToggle.astro",{"propagation":"in-tree","containsHead":false}],["/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/components/Nav.astro",{"propagation":"in-tree","containsHead":false}],["/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/pages/es/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/es/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/components/ThemeToggleMobile.astro",{"propagation":"in-tree","containsHead":false}],["/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B7JVA4Qm.mjs","/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/content/es/page-1.mdx":"chunks/page-1_BG0ZK2Ji.mjs","/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/content/es/page-2.mdx":"chunks/page-2_PR_xOp1b.mjs","/Users/lilianacristinasilvacarvalho/Desktop/ProyectosAstro/dovaldev-portfolio/src/content/es/page-3.mdx":"chunks/page-3_C77QDggJ.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Biguy3Oe.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.BQ7pWGm-.css","/favicon.svg","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/middleware.mjs","/_worker.js/renderers.mjs","/_worker.js/_astro/index.BQ7pWGm-.css","/_worker.js/chunks/Layout_BF7Ekp__.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_QALyrsMt.mjs","/_worker.js/chunks/_astro_assets_BaXM5PEr.mjs","/_worker.js/chunks/astro-designed-error-pages_5Snjga4R.mjs","/_worker.js/chunks/astro_DhqG-jH0.mjs","/_worker.js/chunks/index_CY4TuP7T.mjs","/_worker.js/chunks/page-1_BG0ZK2Ji.mjs","/_worker.js/chunks/page-2_PR_xOp1b.mjs","/_worker.js/chunks/page-3_C77QDggJ.mjs","/_worker.js/chunks/shared_lrB76AGK.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/es.astro.mjs","/_worker.js/pages/index.astro.mjs","/images/icons/dovaldev-icon.webp","/_worker.js/chunks/astro/assets-service_Hm5Harxd.mjs","/_worker.js/chunks/astro/env-setup_nxDOIah1.mjs","/_worker.js/chunks/astro/server_BKSh1SVN.mjs"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always","locales":["en","es"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"DxEv0RDgh9vA1I2X4Q7C4Et7Ed0D9zU+XDjl8u30WMc=","experimentalEnvGetSecretEnabled":false});

export { manifest };
