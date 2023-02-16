import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { h, Component } from 'preact';
import render from 'preact-render-to-string';
import { s as server_default$1, k as deserializeManifest } from './chunks/astro.b67cc6e4.mjs';
import { _ as _page0, b as _page1, c as _page2, d as _page3, e as _page4, f as _page6 } from './chunks/pages/all.5337b5f7.mjs';
import { _ as _page5 } from './chunks/prerender.5a742037.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'html-escaper';
import 'string-width';
import 'preact/hooks';
import 'preact/jsx-runtime';
import '@astrojs/rss';
/* empty css                                  *//* empty css                                 *//* empty css                                                                         *//* empty css                                                                      *//* empty css                                                                      *//* empty css                                                                          *//* empty css                                 */
const contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "p" + this.c.toString();
    },
    signals: /* @__PURE__ */ new Map(),
    propsToSignals: /* @__PURE__ */ new Map()
  };
  contexts.set(result, ctx);
  return ctx;
}
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}

function isSignal(x) {
  return x != null && typeof x === "object" && typeof x.peek === "function" && "value" in x;
}
function restoreSignalsOnProps(ctx, props) {
  let propMap;
  if (ctx.propsToSignals.has(props)) {
    propMap = ctx.propsToSignals.get(props);
  } else {
    propMap = /* @__PURE__ */ new Map();
    ctx.propsToSignals.set(props, propMap);
  }
  for (const [key, signal] of propMap) {
    props[key] = signal;
  }
  return propMap;
}
function serializeSignals(ctx, props, attrs, map) {
  const signals = {};
  for (const [key, value] of Object.entries(props)) {
    if (isSignal(value)) {
      props[key] = value.peek();
      map.set(key, value);
      let id;
      if (ctx.signals.has(value)) {
        id = ctx.signals.get(value);
      } else {
        id = incrementId(ctx);
        ctx.signals.set(value, id);
      }
      signals[key] = id;
    }
  }
  if (Object.keys(signals).length) {
    attrs["data-preact-signals"] = JSON.stringify(signals);
  }
}

const StaticHtml = ({ value, name }) => {
  if (!value)
    return null;
  return h("astro-slot", { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
let originalConsoleError;
let consoleFilterRefs = 0;
function check(Component$1, props, children) {
  if (typeof Component$1 !== "function")
    return false;
  if (Component$1.prototype != null && typeof Component$1.prototype.render === "function") {
    return Component.isPrototypeOf(Component$1);
  }
  useConsoleFilter();
  try {
    try {
      const { html } = renderToStaticMarkup.call(this, Component$1, props, children);
      if (typeof html !== "string") {
        return false;
      }
      return !/\<undefined\>/.test(html);
    } catch (err) {
      return false;
    }
  } finally {
    finishUsingConsoleFilter();
  }
}
function renderToStaticMarkup(Component, props, { default: children, ...slotted }) {
  const ctx = getContext(this.result);
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = h(static_html_default, { value, name });
  }
  let propsMap = restoreSignalsOnProps(ctx, props);
  const newProps = { ...props, ...slots };
  const attrs = {};
  serializeSignals(ctx, props, attrs, propsMap);
  const html = render(
    h(Component, newProps, children != null ? h(static_html_default, { value: children }) : children)
  );
  return {
    attrs,
    html
  };
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
var server_default = {
  check,
  renderToStaticMarkup
};

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/rss.xml.js", _page1],["src/pages/about.astro", _page2],["src/pages/blog.astro", _page3],["src/pages/tags/index.astro", _page4],["src/pages/tags/[tag].astro", _page5],["src/pages/[slug].astro", _page6],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default$1 }),Object.assign({"name":"@astrojs/preact","clientEntrypoint":"@astrojs/preact/client.js","serverEntrypoint":"@astrojs/preact/server.js","jsxImportSource":"preact"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/global.653f2aa7.css","_astro/Social.astro_astro_type_style_index_0_lang.a28fedb9.css","_astro/Footer.astro_astro_type_style_index_0_lang.dcb19650.css","_astro/BaseLayout.astro_astro_type_style_index_0_lang.08b5c524.css","_astro/ThemeIcon.astro_astro_type_style_index_0_lang.821d0d1b.css"],"scripts":[{"type":"external","value":"_astro/hoisted.cbc0eb24.js"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.fd518f6d.css","_astro/global.653f2aa7.css","_astro/Social.astro_astro_type_style_index_0_lang.a28fedb9.css","_astro/Footer.astro_astro_type_style_index_0_lang.dcb19650.css","_astro/BaseLayout.astro_astro_type_style_index_0_lang.08b5c524.css","_astro/ThemeIcon.astro_astro_type_style_index_0_lang.821d0d1b.css"],"scripts":[{"type":"external","value":"_astro/hoisted.cbc0eb24.js"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/global.653f2aa7.css","_astro/Social.astro_astro_type_style_index_0_lang.a28fedb9.css","_astro/Footer.astro_astro_type_style_index_0_lang.dcb19650.css","_astro/BaseLayout.astro_astro_type_style_index_0_lang.08b5c524.css","_astro/ThemeIcon.astro_astro_type_style_index_0_lang.821d0d1b.css"],"scripts":[{"type":"external","value":"_astro/hoisted.cbc0eb24.js"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.3469886a.css","_astro/global.653f2aa7.css","_astro/Social.astro_astro_type_style_index_0_lang.a28fedb9.css","_astro/Footer.astro_astro_type_style_index_0_lang.dcb19650.css","_astro/BaseLayout.astro_astro_type_style_index_0_lang.08b5c524.css","_astro/ThemeIcon.astro_astro_type_style_index_0_lang.821d0d1b.css"],"scripts":[{"type":"external","value":"_astro/hoisted.cbc0eb24.js"}],"routeData":{"route":"/tags","type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"}],"routeData":{"route":"/[slug]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/[slug].astro","_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true,"contentDir":"file:///Users/takerumiyake/github.com/takerucam/portfolio/src/content/"},"pageMap":null,"propagation":[["/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Hamburger.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Navigation.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/components/ThemeIcon.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Header.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Social.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Footer.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/layouts/BaseLayout.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/index.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/rss.xml.js","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/about.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/[slug].astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/blog.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/tags/[tag].astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/tags/index.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/components/BlogPost.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-1.md","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/layouts/MarkdownPostLayout.astro","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-2.md","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-3.md","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-4.md","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/about.astro?astro&type=style&index=0&lang.css","in-tree"],["/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/tags/index.astro?astro&type=style&index=0&lang.css","in-tree"]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-1.md?astroContent=true":"chunks/post-1.b5178d5d.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-2.md?astroContent=true":"chunks/post-2.71681616.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-3.md?astroContent=true":"chunks/post-3.368bc197.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-4.md?astroContent=true":"chunks/post-4.d1c018d3.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-1.md?astroPropagatedAssets=true":"chunks/post-1.09e6f2e1.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-2.md?astroPropagatedAssets=true":"chunks/post-2.45c329fb.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-3.md?astroPropagatedAssets=true":"chunks/post-3.159723dc.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-4.md?astroPropagatedAssets=true":"chunks/post-4.9233c762.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-1.md":"chunks/post-1.d8b8f925.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-2.md":"chunks/post-2.0580ca41.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-3.md":"chunks/post-3.266c010c.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-4.md":"chunks/post-4.9c16f12c.mjs","/Users/takerumiyake/github.com/takerucam/portfolio/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.84831f1c.js","/Users/takerumiyake/github.com/takerucam/portfolio/src/components/ThemeIcon.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeIcon.astro_astro_type_script_index_0_lang.659723e5.js","/astro/hoisted.js?q=0":"_astro/hoisted.4ed993c7.js","/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Greeting":"_astro/Greeting.147f22dd.js","/astro/hoisted.js?q=1":"_astro/hoisted.cbc0eb24.js","@astrojs/preact/client.js":"_astro/client.28ec8778.js","/Users/takerumiyake/github.com/takerucam/portfolio/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.6a7993c4.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/BaseLayout.astro_astro_type_style_index_0_lang.08b5c524.css","/_astro/Footer.astro_astro_type_style_index_0_lang.dcb19650.css","/_astro/MarkdownPostLayout.astro_astro_type_style_index_0_lang.4144177e.css","/_astro/Social.astro_astro_type_style_index_0_lang.a28fedb9.css","/_astro/ThemeIcon.astro_astro_type_style_index_0_lang.821d0d1b.css","/_astro/about.fd518f6d.css","/_astro/global.653f2aa7.css","/_astro/index.3469886a.css","/favicon.svg","/_astro/BaseLayout.astro_astro_type_script_index_0_lang.84831f1c.js","/_astro/Greeting.147f22dd.js","/_astro/ThemeIcon.astro_astro_type_script_index_0_lang.659723e5.js","/_astro/client.28ec8778.js","/_astro/hoisted.cbc0eb24.js","/_astro/hooks.module.246ea023.js","/_astro/menu.6401ea2b.js","/_astro/preact.module.65f44398.js","/_astro/signals.module.6a7993c4.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
