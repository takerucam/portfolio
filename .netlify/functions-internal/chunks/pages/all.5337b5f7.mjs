import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderHead, f as renderSlot, g as defineStyleVars, h as createCollectionToGlobResultMap, i as createGetCollection, j as createGetEntryBySlug } from '../astro.b67cc6e4.mjs';
import 'preact';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
import rss, { pagesGlobToRssItems } from '@astrojs/rss';
/* empty css                            *//* empty css                           *//* empty css                                                                   *//* empty css                                                                *//* empty css                                                                *//* empty css                                                                    *//* empty css                           */
function Greeting({
  messages
}) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(randomMessage());
  return jsxs("div", {
    children: [jsxs("h3", {
      children: [greeting, "! Thank you for visiting!"]
    }), jsx("button", {
      onClick: () => setGreeting(randomMessage()),
      children: "New Greeting"
    })]
  });
}
__astro_tag_component__(Greeting, "@astrojs/preact");

const $$Astro$c = createAstro();
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead($$result)}<div class="hamburger">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</div>`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Hamburger.astro");

const $$Astro$b = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead($$result)}<div class="nav-links">
  <a href="/">Home</a>
  <a href="/about/">About</a>
  <a href="/blog/">Blog</a>
  <a href="/tags">Tags</a>
</div>`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Navigation.astro");

const $$Astro$a = createAstro();
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate`${maybeRenderHead($$result)}<div id="themeToggle" class="astro-OEMX5LE4">
  <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="astro-OEMX5LE4">
    <path class="sun astro-OEMX5LE4" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path>
    <path class="moon astro-OEMX5LE4" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path>
  </svg>
</div>`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/components/ThemeIcon.astro");

const $$Astro$9 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header>
  <nav>
    ${renderComponent($$result, "Hamburger", $$Hamburger, {})}
    ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})}
    ${renderComponent($$result, "Navigation", $$Navigation, {})}
  </nav>
</header>`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Header.astro");

const $$Astro$8 = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} class="astro-YXTIFMRQ">${platform}</a>`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Social.astro");

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`

${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
  ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "astrodotbuild", "class": "astro-SZ7XMLTE" })}
  ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "withastro", "class": "astro-SZ7XMLTE" })}
  ${renderComponent($$result, "Social", $$Social, { "platform": "youtube", "username": "astrodotbuild", "class": "astro-SZ7XMLTE" })}
</footer>`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Footer.astro");

const $$Astro$6 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-37FXCHFA">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${pageTitle}</title>
  ${renderHead($$result)}</head>
  <body class="astro-37FXCHFA">
    ${renderComponent($$result, "Header", $$Header, { "class": "astro-37FXCHFA" })}
    <h1 class="astro-37FXCHFA">${pageTitle}</h1>
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-37FXCHFA" })}
    
  </body>
</html>`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/layouts/BaseLayout.astro");

const $$Astro$5 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$1;
  const pageTitle = "Home Page!!";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h2>My awesome blog subtitle</h2>${renderComponent($$result2, "Greeting", Greeting, { "client:load": true, "messages": ["Hi", "Hello", "Howdy", "Hey there"], "client:component-hydration": "load", "client:component-path": "/Users/takerumiyake/github.com/takerucam/portfolio/src/components/Greeting", "client:component-export": "default" })}` })}`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/index.astro");

const $$file$4 = "/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/index.astro";
const $$url$4 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

async function get() {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://my-blog-site.netlify.app",
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({})),
    customData: `<language>en-us</language>`,
  });
}

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const identity = {
    firstName: "Sarah",
    country: "Canada",
    occupation: "Technical Writer",
    hobbies: ["photography", "birdwatching", "baseball"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
  const skillColor = "navy";
  const fontWeight = "bold";
  const $$definedVars = defineStyleVars([{ skillColor, fontWeight }]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1 class="astro-KH7BTL4R"${addAttribute($$definedVars, "style")}>${pageTitle}</h1><h2 class="astro-KH7BTL4R"${addAttribute($$definedVars, "style")}>... and my new Astro site!</h2><p class="astro-KH7BTL4R"${addAttribute($$definedVars, "style")}>
    I am working through Astro's introductory tutorial. This is the second page
    on my website, and it's the first one I built myself!
  </p><p class="astro-KH7BTL4R"${addAttribute($$definedVars, "style")}>
    This site will update as I complete more of the tutorial, so keep checking
    back and see how my journey is going!
  </p><p class="astro-KH7BTL4R"${addAttribute($$definedVars, "style")}>Here are a few facts about me:</p><ul class="astro-KH7BTL4R"${addAttribute($$definedVars, "style")}>
    <li class="astro-KH7BTL4R">My name is ${identity.firstName}.</li>
    <li class="astro-KH7BTL4R">
      I live in ${identity.country} and I work as a ${identity.occupation}.
    </li>
    ${identity.hobbies.length >= 2 && renderTemplate`<li class="astro-KH7BTL4R">
          Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}
        </li>`}
  </ul><p class="astro-KH7BTL4R"${addAttribute($$definedVars, "style")}>My skills are:</p><ul class="astro-KH7BTL4R"${addAttribute($$definedVars, "style")}>
    ${skills.map((skill) => renderTemplate`<li class="skill astro-KH7BTL4R">${skill}</li>`)}
  </ul>${renderTemplate`<p class="astro-KH7BTL4R">I am happy to be learning Astro!</p>`}${renderTemplate`<p class="astro-KH7BTL4R">I finished this tutorial!</p>`}${renderTemplate`<p class="astro-KH7BTL4R">My goal is to finish in 3 days.</p>` }` })}`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/about.astro");

const $$file$3 = "/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/about.astro";
const $$url$3 = "/about";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

// astro-head-inject

const contentDir = '/src/content/';

const entryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/post-1.md": () => import('../post-1.b5178d5d.mjs'),"/src/content/posts/post-2.md": () => import('../post-2.71681616.mjs'),"/src/content/posts/post-3.md": () => import('../post-3.368bc197.mjs'),"/src/content/posts/post-4.md": () => import('../post-4.d1c018d3.mjs')

});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: entryGlob,
	contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/post-1.md": () => import('../post-1.09e6f2e1.mjs'),"/src/content/posts/post-2.md": () => import('../post-2.45c329fb.mjs'),"/src/content/posts/post-3.md": () => import('../post-3.159723dc.mjs'),"/src/content/posts/post-4.md": () => import('../post-4.9233c762.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	collectionToEntryMap,
	collectionToRenderEntryMap,
});

const getEntryBySlug = createGetEntryBySlug({
	getCollection,
	collectionToRenderEntryMap,
});

const $$Astro$3 = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li>
  <a${addAttribute(`/${url}`, "href")}>${title}</a>
</li>`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/components/BlogPost.astro");

const $$Astro$2 = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Blog;
  const pageTitle = "My Astro Learning Blog";
  const allPosts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<p>This is where I will post about my journey learning Astro.</p><ul>
    ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.slug, "title": post.data.title })}`)}
  </ul>` })}`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/blog.astro");

const $$file$2 = "/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/blog.astro";
const $$url$2 = "/blog";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("posts");
  const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  const pageTitle = "Tag Index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "class": "astro-OS4I7OWY" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="tags astro-OS4I7OWY">
    ${tags.map((tag) => renderTemplate`<p class="tag astro-OS4I7OWY">
          <a${addAttribute(`/tags/${tag}`, "href")} class="astro-OS4I7OWY">${tag}</a>
        </p>`)}
  </div>` })}`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/tags/index.astro");

const $$file$1 = "/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entry = await getEntryBySlug(
    "posts",
    slug
  );
  const { Content } = await entry.render();
  return renderTemplate`${maybeRenderHead($$result)}<h1>${entry.data.title}</h1>
${renderComponent($$result, "Content", Content, {})}`;
}, "/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/[slug].astro");

const $$file = "/Users/takerumiyake/github.com/takerucam/portfolio/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPost as $, _page0 as _, $$BaseLayout as a, _page1 as b, _page2 as c, _page3 as d, _page4 as e, _page6 as f, getCollection as g };
