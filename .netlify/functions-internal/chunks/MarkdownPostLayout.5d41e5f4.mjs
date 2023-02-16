import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, f as renderSlot } from './astro.b67cc6e4.mjs';
import { a as $$BaseLayout } from './pages/all.5337b5f7.mjs';
/* empty css                                                                           */
const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-5GRSW2HI" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1 class="astro-5GRSW2HI">${post.data.title}</h1><p class="astro-5GRSW2HI">Published on: ${post.data.pubDate.slice(0, 10)}</p><p class="astro-5GRSW2HI"><em class="astro-5GRSW2HI">${post.data.description}</em></p><p class="astro-5GRSW2HI">Written by ${post.data.author}</p><img${addAttribute(post.data.image.url, "src")} width="300"${addAttribute(post.data.image.alt, "alt")} class="astro-5GRSW2HI"><div class="tags astro-5GRSW2HI">
    ${post.data.tags.map((tag) => renderTemplate`<p class="tag astro-5GRSW2HI">
          <a${addAttribute(`/tags/${tag}`, "href")} class="astro-5GRSW2HI">${tag}</a>
        </p>`)}
  </div>${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/layouts/MarkdownPostLayout.astro");

export { $$MarkdownPostLayout as $ };
