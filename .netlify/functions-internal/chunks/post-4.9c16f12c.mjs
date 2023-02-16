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
const html = "<p>This post should show up with my other blog posts, because <code>Astro.glob()</code> is returning a list of all my posts in order to create my list.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Fourth Blog Post","author":"Astro Learner","description":"This post will show up on its own!","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"The word “astro” against an illustration of planets and stars."},"pubDate":"2022-08-08","tags":["astro","successes","hoge"]};
				const file = "/Users/takerumiyake/github.com/takerucam/portfolio/src/content/posts/post-4.md";
				const url = undefined;
				function rawContent() {
					return "\nThis post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.\n";
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
