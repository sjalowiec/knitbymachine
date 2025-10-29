import React from "react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { sanity } from "../lib/sanity";

const builder = imageUrlBuilder(sanity);
const urlFor = (src: any) => (src ? builder.image(src).auto("format") : null);

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const url = urlFor(value);
      if (!url) return null;
      const alt = value?.alt || value?.asset?._ref || "Image";
      return (
        <figure className="pt-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url?.width(1200).url()} alt={alt} loading="lazy" />
          {value?.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
    code: ({ value }) => (
      <pre className="pt-code"><code>{value.code}</code></pre>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="pt-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="pt-h3">{children}</h3>,
    normal: ({ children }) => <p className="pt-p">{children}</p>,
    blockquote: ({ children }) => <blockquote className="pt-quote">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="pt-ul">{children}</ul>,
    number: ({ children }) => <ol className="pt-ol">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="pt-li">{children}</li>,
    number: ({ children }) => <li className="pt-li">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = /^https?:\/\//i.test(href);
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="pt-link"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="pt-strong">{children}</strong>,
    em: ({ children }) => <em className="pt-em">{children}</em>,
  },
};

export default function PortableBody({ value }: { value: any }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
