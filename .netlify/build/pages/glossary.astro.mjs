import { c as createComponent, d as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, k as renderScript } from '../chunks/astro/server_BOl9DzBm.mjs';
import 'kleur/colors';
/* empty css                                        */
import { s as sanity } from '../chunks/sanity_DtQ0k8eI.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CUetJGm3.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.request.url);
  const searchQuery = url.searchParams.get("q") || "";
  const letterFilter = url.searchParams.get("letter") || "";
  const groqQuery = `*[_type == "term" && status == "published"]{
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  excerpt,
  "definition": pt::text(definition),
  "image": media.asset->url,
  imageAlt,
  relatedLinks[] {
    label,
    url,
    kind
  },
  aliases,
  "related": related[]->{title, "slug": slug.current}
} | order(title asc)`;
  const allTerms = await sanity.fetch(groqQuery);
  let terms = [...allTerms];
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    terms = terms.filter((term) => {
      const definitionText = term.definition?.toLowerCase() || "";
      const aliasesText = term.aliases?.join(" ").toLowerCase() || "";
      return term.title.toLowerCase().includes(query) || definitionText.includes(query) || term.excerpt?.toLowerCase().includes(query) || aliasesText.includes(query);
    });
  }
  if (letterFilter) {
    terms = terms.filter(
      (term) => term.title.toLowerCase().startsWith(letterFilter.toLowerCase())
    );
  }
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lettersWithTerms = new Set(
    allTerms.map((term) => term.title.charAt(0).toUpperCase())
  );
  function buildGlossaryUrl(params) {
    const urlParams = new URLSearchParams();
    if (params.q) urlParams.set("q", params.q);
    if (params.letter) urlParams.set("letter", params.letter);
    const queryString = urlParams.toString();
    return queryString ? `/glossary?${queryString}` : "/glossary";
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-f4zqnnit": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container" data-astro-cid-f4zqnnit> <div class="header-row" data-astro-cid-f4zqnnit> <h1 data-astro-cid-f4zqnnit>Machine Knitting Terms Glossary</h1> <div class="header-search" data-astro-cid-f4zqnnit> <form method="get" action="/glossary" data-astro-cid-f4zqnnit> <input type="text" name="q" placeholder="Search Terms Glossary"${addAttribute(searchQuery, "value")} class="kbm-search-input" data-astro-cid-f4zqnnit> <button type="submit" class="kbm-search-btn" aria-label="Search" data-astro-cid-f4zqnnit> <i class="fa fa-search" data-astro-cid-f4zqnnit></i> </button> <input type="hidden" name="letter"${addAttribute(letterFilter, "value")} data-astro-cid-f4zqnnit> </form> </div> </div> <p class="description" data-astro-cid-f4zqnnit>
Unlock the secrets of machine knitting patterns with this comprehensive glossary.
    It's your key to understanding the abbreviations and terms used in patterns and vintage publications.
</p> <div class="alphabet-filter" data-astro-cid-f4zqnnit> <div class="alphabet" data-astro-cid-f4zqnnit> <a${addAttribute(buildGlossaryUrl({ q: searchQuery || void 0 }), "href")}${addAttribute(!letterFilter ? "active" : "", "class")} data-astro-cid-f4zqnnit>
All
</a> ${alphabet.map((letter) => {
    const hasTerms = lettersWithTerms.has(letter);
    return renderTemplate`<a${addAttribute(buildGlossaryUrl({ q: searchQuery || void 0, letter }), "href")}${addAttribute(`${letterFilter === letter ? "active" : ""} ${!hasTerms ? "disabled" : ""}`, "class")} data-astro-cid-f4zqnnit> ${letter} </a>`;
  })} </div> </div> ${terms.length > 0 ? renderTemplate`<div class="card-grid" data-astro-cid-f4zqnnit> ${terms.map((term) => {
    const imageUrl = term.image || null;
    const definitionText = term.definition || term.excerpt || "No definition available";
    const firstLetter = term.title.charAt(0).toUpperCase();
    const altText = term.imageAlt || term.title;
    return renderTemplate`<div class="flip-card"${addAttribute(term._id, "data-card-id")} data-astro-cid-f4zqnnit> <div class="flip-card-inner" data-astro-cid-f4zqnnit> <div class="flip-card-front" data-astro-cid-f4zqnnit> <div class="card-body" data-astro-cid-f4zqnnit> <h2 class="card-title" data-astro-cid-f4zqnnit>${term.title}</h2> ${term.excerpt && renderTemplate`<p class="card-excerpt" data-astro-cid-f4zqnnit>${term.excerpt}</p>`} <p class="card-definition" data-astro-cid-f4zqnnit>${definitionText}</p> <div class="card-hint" data-astro-cid-f4zqnnit> <i class="fa-solid fa-hand-point-right" data-astro-cid-f4zqnnit></i>
Hover / tap for details
</div> </div> </div> <div class="flip-card-back" data-astro-cid-f4zqnnit> <div class="card-back-content" data-astro-cid-f4zqnnit> ${imageUrl ? renderTemplate`<img${addAttribute(imageUrl, "data-gif-src")}${addAttribute(altText, "alt")} class="card-back-image"${addAttribute(term.slug, "data-term-slug")} loading="lazy" data-astro-cid-f4zqnnit>` : renderTemplate`<div class="card-back-image-placeholder"${addAttribute(term.slug, "data-term-slug")} data-astro-cid-f4zqnnit> ${firstLetter} </div>`} <div class="card-meta" data-astro-cid-f4zqnnit> <a${addAttribute(`/glossary/${term.slug}`, "href")} class="seo-link" data-astro-cid-f4zqnnit> <i class="fa-solid fa-hand-point-right" data-astro-cid-f4zqnnit></i>
View full page
</a> </div> </div> </div> </div> </div>`;
  })} </div>` : renderTemplate`<div class="no-results" data-astro-cid-f4zqnnit> <h2 data-astro-cid-f4zqnnit>No terms found</h2> <p data-astro-cid-f4zqnnit>Try adjusting your search or filters.</p> </div>`} </div> ${renderScript($$result2, "/home/runner/workspace/src/pages/glossary/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/runner/workspace/src/pages/glossary/index.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/glossary/index.astro";
const $$url = "/glossary";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
