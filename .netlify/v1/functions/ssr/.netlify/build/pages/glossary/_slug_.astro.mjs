import { c as createComponent, d as createAstro, m as maybeRenderHead, s as spreadAttributes, j as renderSlot, r as renderTemplate, i as renderComponent, f as addAttribute, k as renderScript } from '../../chunks/astro/server_BOl9DzBm.mjs';
import 'kleur/colors';
import groq from 'groq';
import { s as sanity } from '../../chunks/sanity_DtQ0k8eI.mjs';
import { LIST_NEST_MODE_HTML, isPortableTextToolkitList, isPortableTextListItemBlock, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, buildMarksTree } from '@portabletext/toolkit';
import 'clsx';
/* empty css                                     */
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CUetJGm3.mjs';
export { renderers } from '../../renderers.mjs';

function isComponent(it) {
  return typeof it === "function";
}
function mergeComponents(components, overrides) {
  const cmps = { ...components };
  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key];
    const value = !current || isComponent(override) || isComponent(current) ? override : {
      ...current,
      ...override
    };
    cmps[key] = value;
  }
  return cmps;
}

const getTemplate = (prop, type) => `PortableText [components.${prop}] is missing "${type}"`;
const unknownTypeWarning = (type) => getTemplate("type", type);
const unknownMarkWarning = (markType) => getTemplate("mark", markType);
const unknownBlockWarning = (style) => getTemplate("block", style);
const unknownListWarning = (listItem) => getTemplate("list", listItem);
const unknownListItemWarning = (listStyle) => getTemplate("listItem", listStyle);
const getWarningMessage = (nodeType, type) => {
  const fncs = {
    block: unknownBlockWarning,
    list: unknownListWarning,
    listItem: unknownListItemWarning,
    mark: unknownMarkWarning,
    type: unknownTypeWarning
  };
  return fncs[nodeType](type);
};
function printWarning(message) {
  console.warn(message);
}

const key = Symbol("astro-portabletext");
function usePortableText(node) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }
  return globalThis[key](node);
}

const $$Astro$9 = createAstro();
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Block;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const styleIs = (style) => style === node.style;
  const { getUnknownComponent } = usePortableText(node);
  const UnknownStyle = getUnknownComponent();
  return renderTemplate`${styleIs("h1") ? renderTemplate`${maybeRenderHead()}<h1${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h1>` : styleIs("h2") ? renderTemplate`<h2${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h2>` : styleIs("h3") ? renderTemplate`<h3${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h3>` : styleIs("h4") ? renderTemplate`<h4${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h4>` : styleIs("h5") ? renderTemplate`<h5${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h5>` : styleIs("h6") ? renderTemplate`<h6${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h6>` : styleIs("blockquote") ? renderTemplate`<blockquote${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</blockquote>` : styleIs("normal") ? renderTemplate`<p${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`${renderComponent($$result, "UnknownStyle", UnknownStyle, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/Block.astro", void 0);

const $$HardBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<br>`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/HardBreak.astro", void 0);

const $$Astro$8 = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$List;
  const { node, index, isInline, ...attrs } = Astro2.props;
  const listItemIs = (listItem) => listItem === node.listItem;
  return renderTemplate`${listItemIs("menu") ? renderTemplate`${maybeRenderHead()}<menu${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</menu>` : listItemIs("number") ? renderTemplate`<ol${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/List.astro", void 0);

const $$Astro$7 = createAstro();
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { node, index, isInline, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/ListItem.astro", void 0);

const $$Astro$6 = createAstro();
const $$Mark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Mark;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const markTypeIs = (markType) => markType === node.markType;
  const { getUnknownComponent } = usePortableText(node);
  const UnknownMarkType = getUnknownComponent();
  return renderTemplate`${markTypeIs("code") ? renderTemplate`${maybeRenderHead()}<code${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</code>` : markTypeIs("em") ? renderTemplate`<em${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</em>` : markTypeIs("link") ? renderTemplate`<a${addAttribute(node.markDef.href, "href")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</a>` : markTypeIs("strike-through") ? renderTemplate`<del${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</del>` : markTypeIs("strong") ? renderTemplate`<strong${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</strong>` : markTypeIs("underline") ? renderTemplate`<span style="text-decoration: underline;"${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`${renderComponent($$result, "UnknownMarkType", UnknownMarkType, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/Mark.astro", void 0);

const $$Astro$5 = createAstro();
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Text;
  const { node } = Astro2.props;
  return renderTemplate`${node.text}`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/Text.astro", void 0);

const $$UnknownBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-portabletext-unknown="block">${renderSlot($$result, $$slots["default"])}</p>`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/UnknownBlock.astro", void 0);

const $$UnknownList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-portabletext-unknown="list">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/UnknownList.astro", void 0);

const $$UnknownListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li data-portabletext-unknown="listitem">${renderSlot($$result, $$slots["default"])}</li>`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/UnknownListItem.astro", void 0);

const $$UnknownMark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span data-portabletext-unknown="mark">${renderSlot($$result, $$slots["default"])}</span>`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/UnknownMark.astro", void 0);

const $$Astro$4 = createAstro();
const $$UnknownType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UnknownType;
  const { node, isInline } = Astro2.props;
  const warning = getWarningMessage("type", node._type);
  return renderTemplate`${isInline ? renderTemplate`${maybeRenderHead()}<span style="display:none" data-portabletext-unknown="type">${warning}</span>` : renderTemplate`<div style="display:none" data-portabletext-unknown="type">${warning}</div>`}`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/UnknownType.astro", void 0);

const $$Astro$3 = createAstro();
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PortableText;
  const {
    value,
    components: componentOverrides = {},
    listNestingMode = LIST_NEST_MODE_HTML,
    onMissingComponent = true
  } = Astro2.props;
  const components = mergeComponents(
    {
      type: {},
      unknownType: $$UnknownType,
      block: {
        h1: $$Block,
        h2: $$Block,
        h3: $$Block,
        h4: $$Block,
        h5: $$Block,
        h6: $$Block,
        blockquote: $$Block,
        normal: $$Block
      },
      unknownBlock: $$UnknownBlock,
      list: {
        bullet: $$List,
        number: $$List,
        menu: $$List
      },
      unknownList: $$UnknownList,
      listItem: {
        bullet: $$ListItem,
        number: $$ListItem,
        menu: $$ListItem
      },
      unknownListItem: $$UnknownListItem,
      mark: {
        code: $$Mark,
        em: $$Mark,
        link: $$Mark,
        "strike-through": $$Mark,
        strong: $$Mark,
        underline: $$Mark
      },
      unknownMark: $$UnknownMark,
      text: $$Text,
      hardBreak: $$HardBreak
    },
    componentOverrides
  );
  const noop = () => {
  };
  const missingComponentHandler = ((handler) => {
    if (typeof handler === "function") {
      return handler;
    }
    return !handler ? noop : printWarning;
  })(onMissingComponent);
  const asComponentProps = (node, index, isInline) => ({
    node,
    index,
    isInline
  });
  const provideComponent = (nodeType, type, fallbackComponent) => {
    const component = ((component2) => {
      return component2[type] || component2;
    })(components[nodeType]);
    if (isComponent(component)) {
      return component;
    }
    missingComponentHandler(getWarningMessage(nodeType, type), {
      nodeType,
      type
    });
    return fallbackComponent;
  };
  const cachedNodes = /* @__PURE__ */ new WeakMap();
  let fallbackRenderOptions;
  const portableTextRender = (options, isInline) => {
    if (!fallbackRenderOptions) {
      throw new Error(
        "[PortableText portableTextRender] fallbackRenderOptions is undefined"
      );
    }
    return function renderNode(node, index) {
      const renderOptions = { ...fallbackRenderOptions, ...options ?? {} };
      function run(handler, props) {
        if (!isComponent(handler)) {
          throw new Error(
            `[PortableText render] No handler found for node type ${node._type}.`
          );
        }
        return handler(props);
      }
      if (isPortableTextToolkitList(node)) {
        const UnknownComponent2 = components.unknownList ?? $$UnknownList;
        cachedNodes.set(node, { Default: $$List, Unknown: UnknownComponent2 });
        return run(renderOptions.list, {
          Component: provideComponent("list", node.listItem, UnknownComponent2),
          props: asComponentProps(node, index, false),
          children: node.children?.map(portableTextRender(options, false))
        });
      }
      if (isPortableTextListItemBlock(node)) {
        const { listItem, ...blockNode } = node;
        const isStyled = node.style && node.style !== "normal";
        node.children = isStyled ? renderNode(blockNode, index) : buildMarksTree(node);
        const UnknownComponent2 = components.unknownListItem ?? $$UnknownListItem;
        cachedNodes.set(node, { Default: $$ListItem, Unknown: UnknownComponent2 });
        return run(renderOptions.listItem, {
          Component: provideComponent(
            "listItem",
            node.listItem,
            UnknownComponent2
          ),
          props: asComponentProps(node, index, false),
          children: isStyled ? node.children : node.children.map(portableTextRender(options, true))
        });
      }
      if (isPortableTextToolkitSpan(node)) {
        const UnknownComponent2 = components.unknownMark ?? $$UnknownMark;
        cachedNodes.set(node, { Default: $$Mark, Unknown: UnknownComponent2 });
        return run(renderOptions.mark, {
          Component: provideComponent("mark", node.markType, UnknownComponent2),
          props: asComponentProps(node, index, true),
          children: node.children?.map(portableTextRender(options, true))
        });
      }
      if (isPortableTextBlock(node)) {
        node.style ??= "normal";
        node.children = buildMarksTree(node);
        const UnknownComponent2 = components.unknownBlock ?? $$UnknownBlock;
        cachedNodes.set(node, { Default: $$Block, Unknown: UnknownComponent2 });
        return run(renderOptions.block, {
          Component: provideComponent("block", node.style, UnknownComponent2),
          props: asComponentProps(node, index, false),
          children: node.children.map(portableTextRender(options, true))
        });
      }
      if (isPortableTextToolkitTextNode(node)) {
        const isHardBreak = "\n" === node.text;
        const props = asComponentProps(node, index, true);
        if (isHardBreak) {
          return run(renderOptions.hardBreak, {
            Component: isComponent(components.hardBreak) ? components.hardBreak : $$HardBreak,
            props
          });
        }
        return run(renderOptions.text, {
          Component: isComponent(components.text) ? components.text : $$Text,
          props
        });
      }
      const UnknownComponent = components.unknownType ?? $$UnknownType;
      return run(renderOptions.type, {
        Component: provideComponent("type", node._type, UnknownComponent),
        props: asComponentProps(
          node,
          index,
          isInline ?? false
          /* default to block */
        )
      });
    };
  };
  globalThis[key] = (node) => {
    return {
      getDefaultComponent: provideDefaultComponent.bind(null, node),
      getUnknownComponent: provideUnknownComponent.bind(null, node),
      render: (options) => node.children?.map(portableTextRender(options))
    };
  };
  const provideDefaultComponent = (node) => {
    const DefaultComponent = cachedNodes.get(node)?.Default;
    if (DefaultComponent) return DefaultComponent;
    if (isPortableTextToolkitList(node)) return $$List;
    if (isPortableTextListItemBlock(node)) return $$ListItem;
    if (isPortableTextToolkitSpan(node)) return $$Mark;
    if (isPortableTextBlock(node)) return $$Block;
    if (isPortableTextToolkitTextNode(node)) {
      return "\n" === node.text ? $$HardBreak : $$Text;
    }
    return $$UnknownType;
  };
  const provideUnknownComponent = (node) => {
    const UnknownComponent = cachedNodes.get(node)?.Unknown;
    if (UnknownComponent) return UnknownComponent;
    if (isPortableTextToolkitList(node)) {
      return components.unknownList ?? $$UnknownList;
    }
    if (isPortableTextListItemBlock(node)) {
      return components.unknownListItem ?? $$UnknownListItem;
    }
    if (isPortableTextToolkitSpan(node)) {
      return components.unknownMark ?? $$UnknownMark;
    }
    if (isPortableTextBlock(node)) {
      return components.unknownBlock ?? $$UnknownBlock;
    }
    if (!isPortableTextToolkitTextNode(node)) {
      return components.unknownType ?? $$UnknownType;
    }
    throw new Error(
      `[PortableText getUnknownComponent] Unable to provide component with node type ${node._type}`
    );
  };
  const blocks = Array.isArray(value) ? value : [value];
  const nodes = nestLists(blocks, listNestingMode);
  const render = (options) => {
    fallbackRenderOptions = options;
    return portableTextRender(options);
  };
  const hasTypeSlot = Astro2.slots.has("type");
  const hasBlockSlot = Astro2.slots.has("block");
  const hasListSlot = Astro2.slots.has("list");
  const hasListItemSlot = Astro2.slots.has("listItem");
  const hasMarkSlot = Astro2.slots.has("mark");
  const hasTextSlot = Astro2.slots.has("text");
  const hasHardBreakSlot = Astro2.slots.has("hardBreak");
  const createSlotRenderer = (slotName) => Astro2.slots.render.bind(Astro2.slots, slotName);
  return renderTemplate`${(() => {
    const renderNode = (slotRenderer) => {
      return ({ Component, props, children }) => slotRenderer?.([{ Component, props, children }]) ?? renderTemplate`${renderComponent($$result, "Component", Component, { ...props }, { "default": ($$result2) => renderTemplate`${children}` })}`;
    };
    return nodes.map(
      render({
        type: renderNode(hasTypeSlot ? createSlotRenderer("type") : void 0),
        block: renderNode(
          hasBlockSlot ? createSlotRenderer("block") : void 0
        ),
        list: renderNode(hasListSlot ? createSlotRenderer("list") : void 0),
        listItem: renderNode(
          hasListItemSlot ? createSlotRenderer("listItem") : void 0
        ),
        mark: renderNode(hasMarkSlot ? createSlotRenderer("mark") : void 0),
        text: renderNode(hasTextSlot ? createSlotRenderer("text") : void 0),
        hardBreak: renderNode(
          hasHardBreakSlot ? createSlotRenderer("hardBreak") : void 0
        )
      })
    );
  })()}`;
}, "/home/runner/workspace/node_modules/astro-portabletext/components/PortableText.astro", void 0);

const $$Astro$2 = createAstro();
const $$PortableLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortableLink;
  const { value } = Astro2.props;
  const href = value?.href;
  const blank = value?.blank;
  const isExternal = href?.startsWith("http://") || href?.startsWith("https://");
  const rel = isExternal ? "noopener noreferrer" : void 0;
  const target = blank || isExternal ? "_blank" : void 0;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute(rel, "rel")} class="pt-link"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/runner/workspace/src/components/PortableLink.astro", void 0);

const $$Astro$1 = createAstro();
const $$PortableBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortableBody;
  const { value } = Astro2.props;
  const components = {
    block: {
      h2: "h2",
      h3: "h3",
      normal: "p",
      blockquote: "blockquote"
    },
    list: {
      bullet: "ul",
      number: "ol"
    },
    listItem: {
      bullet: "li",
      number: "li"
    },
    marks: {
      strong: "strong",
      em: "em",
      link: $$PortableLink
    }
  };
  return renderTemplate`${value && renderTemplate`${maybeRenderHead()}<div class="portable-text">${renderComponent($$result, "PortableText", $$PortableText, { "value": value, "components": components })}</div>`}`;
}, "/home/runner/workspace/src/components/PortableBody.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const q = groq`*[_type == "term" && slug.current == $slug][0]{
  _id, title,
  excerpt,
  "definition": definition,
  "definitionText": pt::text(definition),
  "imageUrl": coalesce(media.asset->url, image.asset->url),
  imageAlt,
  aliases,
  tips,
  notes,
  videoUrl,
  relatedLinks[]{ label, url, kind },
  "related": related[]->{title, "slug": slug.current}
}`;
  const term = await sanity.fetch(q, { slug });
  if (!term) {
    return Astro2.redirect("/glossary");
  }
  function hrefGlossary() {
    const ref = Astro2.request.headers.get("referer") || "";
    return ref.includes("/glossary") ? ref : "/glossary";
  }
  function toEmbedUrl(url) {
    if (!url) return "";
    try {
      const u = new URL(url);
      const host = u.hostname.replace(/^www\./, "");
      if (host === "youtube.com") {
        const id = u.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }
      if (host === "youtu.be") {
        const id = u.pathname.substring(1);
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }
      if (host === "vimeo.com") {
        const id = u.pathname.split("/").filter(Boolean)[0];
        return id ? `https://player.vimeo.com/video/${id}` : url;
      }
      return url;
    } catch {
      return url;
    }
  }
  const embedUrl = toEmbedUrl(term.videoUrl);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-6iy3d5zn": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="detail-wrap container" data-astro-cid-6iy3d5zn> <div class="topbar" data-astro-cid-6iy3d5zn> <a class="crumb"${addAttribute(hrefGlossary(), "href")} data-astro-cid-6iy3d5zn>← Back to Glossary</a> <h1 class="term-title" data-astro-cid-6iy3d5zn>${term.title}</h1> ${term.excerpt && renderTemplate`<p class="term-sub" data-astro-cid-6iy3d5zn>${term.excerpt}</p>`} </div> <div class="detail-grid" data-astro-cid-6iy3d5zn> <nav class="localnav" aria-label="Section navigation" data-astro-cid-6iy3d5zn> <a href="#overview" class="lnk active" data-astro-cid-6iy3d5zn>Overview</a> <a href="#howto" class="lnk" data-astro-cid-6iy3d5zn>How to</a> ${term.videoUrl && renderTemplate`<a href="#video" class="lnk" data-astro-cid-6iy3d5zn>Video</a>`} ${(term.relatedLinks?.length ?? 0) > 0 && renderTemplate`<a href="#links" class="lnk" data-astro-cid-6iy3d5zn>Links</a>`} ${(term.related?.length ?? 0) > 0 && renderTemplate`<a href="#related" class="lnk" data-astro-cid-6iy3d5zn>Related</a>`} <a href="#cta" class="btn-primary" data-astro-cid-6iy3d5zn>Practice this</a> </nav> <main class="detail" data-astro-cid-6iy3d5zn> <section id="overview" class="section" data-astro-cid-6iy3d5zn> ${term.imageUrl && renderTemplate`<div class="lead-media" data-astro-cid-6iy3d5zn> <img${addAttribute(term.imageUrl, "src")}${addAttribute(term.imageAlt || term.title, "alt")} loading="lazy" data-astro-cid-6iy3d5zn> </div>`} <div class="lead-copy" data-astro-cid-6iy3d5zn> ${term.definition ? renderTemplate`${renderComponent($$result2, "PortableBody", $$PortableBody, { "value": term.definition, "data-astro-cid-6iy3d5zn": true })}` : term.definitionText ? renderTemplate`<p class="lead" data-astro-cid-6iy3d5zn>${term.definitionText}</p>` : renderTemplate`<p class="lead" data-astro-cid-6iy3d5zn>No definition available yet.</p>`} ${term.aliases?.length ? renderTemplate`<div class="chips" data-astro-cid-6iy3d5zn> ${term.aliases.map((a) => renderTemplate`<span class="chip" data-astro-cid-6iy3d5zn>${a}</span>`)} </div>` : null} </div> </section> <section id="howto" class="section" data-astro-cid-6iy3d5zn> <h2 class="h2" data-astro-cid-6iy3d5zn>How it's used</h2> <details class="acc"${addAttribute(Boolean(term.tips?.length), "open")} data-astro-cid-6iy3d5zn> <summary data-astro-cid-6iy3d5zn>Tips & troubleshooting</summary> ${term.tips?.length ? renderTemplate`<ul class="bullets" data-astro-cid-6iy3d5zn> ${term.tips.map((t) => renderTemplate`<li data-astro-cid-6iy3d5zn>${t}</li>`)} </ul>` : renderTemplate`<p class="muted" data-astro-cid-6iy3d5zn>Add tips in Sanity to show them here.</p>`} </details> <details class="acc"${addAttribute(Boolean(term.notes?.length), "open")} data-astro-cid-6iy3d5zn> <summary data-astro-cid-6iy3d5zn>Notes & variations</summary> ${term.notes?.length ? renderTemplate`<ul class="bullets" data-astro-cid-6iy3d5zn> ${term.notes.map((n) => renderTemplate`<li data-astro-cid-6iy3d5zn>${n}</li>`)} </ul>` : renderTemplate`<p class="muted" data-astro-cid-6iy3d5zn>Add notes in Sanity to show them here.</p>`} </details> </section> ${term.videoUrl && renderTemplate`<section id="video" class="section" data-astro-cid-6iy3d5zn> <h2 class="h2" data-astro-cid-6iy3d5zn>Walkthrough Video</h2> <div class="video" data-astro-cid-6iy3d5zn> ${embedUrl && (embedUrl.includes("youtube.com/embed") || embedUrl.includes("player.vimeo.com")) ? renderTemplate`<iframe${addAttribute(embedUrl, "src")}${addAttribute(`Video: ${term.title}`, "title")} loading="lazy" allowfullscreen data-astro-cid-6iy3d5zn></iframe>` : renderTemplate`<video${addAttribute(term.videoUrl, "src")} controls preload="metadata" data-astro-cid-6iy3d5zn></video>`} </div> </section>`} ${(term.relatedLinks?.length ?? 0) > 0 && renderTemplate`<section id="links" class="section" data-astro-cid-6iy3d5zn> <h2 class="h2" data-astro-cid-6iy3d5zn>Helpful links</h2> <ul class="linklist" data-astro-cid-6iy3d5zn> ${term.relatedLinks.map((l) => renderTemplate`<li data-astro-cid-6iy3d5zn> <a${addAttribute(l.url, "href")} target="_blank" rel="noopener" data-astro-cid-6iy3d5zn> <span${addAttribute(`badge ${l.kind || "reference"}`, "class")} data-astro-cid-6iy3d5zn>${l.kind || "reference"}</span> ${l.label} </a> </li>`)} </ul> </section>`} ${(term.related?.length ?? 0) > 0 && renderTemplate`<section id="related" class="section" data-astro-cid-6iy3d5zn> <h2 class="h2" data-astro-cid-6iy3d5zn>Related terms</h2> <ul class="related" data-astro-cid-6iy3d5zn> ${term.related.map((r) => renderTemplate`<li data-astro-cid-6iy3d5zn><a${addAttribute(`/glossary/${r.slug}`, "href")} data-astro-cid-6iy3d5zn>${r.title}</a></li>`)} </ul> </section>`} <section id="cta" class="section cta" data-astro-cid-6iy3d5zn> <div class="cta-card" data-astro-cid-6iy3d5zn> <h3 class="cta-title" data-astro-cid-6iy3d5zn>Ready to try "${term.title}"?</h3> <p class="cta-text" data-astro-cid-6iy3d5zn>Open the practice wizard and work this technique step-by-step.</p> <a class="btn-primary" href="/tools"${addAttribute(`Practice ${term.title}`, "aria-label")} data-astro-cid-6iy3d5zn>Open Practice Wizard →</a> </div> </section> </main> </div> </div> ${renderScript($$result2, "/home/runner/workspace/src/pages/glossary/[slug].astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "/home/runner/workspace/src/pages/glossary/[slug].astro", void 0);

const $$file = "/home/runner/workspace/src/pages/glossary/[slug].astro";
const $$url = "/glossary/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
