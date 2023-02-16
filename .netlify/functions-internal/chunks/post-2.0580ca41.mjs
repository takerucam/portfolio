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
const html = "<p>After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Second Blog Post","author":"Astro Learner","description":"After learning some Astro, I couldn't stop!","image":{"url":"https://astro.build/assets/blog/astro-showcase/astro-showcase-screenshot.jpg","alt":"Thumbnails of websites from the Astro Showcase site."},"pubDate":"2022-07-08","tags":["astro","blogging","learning in public","successes"]};
				const file = "/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-2.md";
				const url = undefined;
				function rawContent() {
					return "\nAfter a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!\n";
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
