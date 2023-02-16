import { l as createVNode, F as Fragment } from './astro.b67cc6e4.mjs';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout.5d41e5f4.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
import './pages/all.5337b5f7.mjs';
import 'preact';
import 'preact/hooks';
import 'preact/jsx-runtime';
import '@astrojs/rss';
/* empty css                           *//* empty css                          *//* empty css                                                                  *//* empty css                                                               *//* empty css                                                               *//* empty css                                                                   *//* empty css                          *//* empty css                                                                           */
const html = "<p>It wasn’t always smooth sailing, but I’m enjoying building with Astro. And, the <a href=\"https://astro.build/chat\">Discord community</a> is really friendly and helpful!</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Third Blog Post","author":"Astro Learner","description":"I had some challenges, but asking in the community really helped!","image":{"url":"https://astro.build/assets/blog/community-day/cover.jpg","alt":"The word community with a heart."},"pubDate":"2022-07-15","tags":["astro","learning in public","setbacks","community"]};
				const file = "/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-3.md";
				const url = undefined;
				function rawContent() {
					return "\nIt wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$MarkdownPostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
