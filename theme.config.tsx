import React from "react";
import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

// TODO: use your logo please
const logo = <h3>LOGO</h3>;

const Footer = (
  <div className="flex w-full flex-col items-center sm:items-start">
    <div>{/**Footer */}</div>
    <p className="mt-6 text-xs">Copy©{new Date().getFullYear()}</p>
  </div>
);

const titleComponent = ({ title, type }) => {
  if (type === "separator") {
    return <span className="cursor-default">{title}</span>;
  }
  return <>{title}</>;
};

const PROJECT_NAME = "Project"; // TODO: Rename
const PROJECT_LINK = "https://github.com/whitedark9";
const REPOSITORY_LINK = PROJECT_LINK + "/" + PROJECT_NAME;
const TITLE_SUFFIX = "- PRO"; // TODO: Rename
const TITLE = "PRO";
const PRODUCTION_DOMAIN = "https://production.com";
const PROJECT_DESCRIPTION = "Creating project with next-nextra-docs";

const config: DocsThemeConfig = {
  project: { link: PROJECT_LINK },
  docsRepositoryBase: REPOSITORY_LINK,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: TITLE_SUFFIX,
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={PROJECT_DESCRIPTION} />
        <meta name="og:description" content={PROJECT_DESCRIPTION} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:image" content={socialCard} /> */}
        <meta name="twitter:site:domain" content={PRODUCTION_DOMAIN} />
        <meta name="twitter:url" content={PRODUCTION_DOMAIN} />
        <meta name="og:title" content={title ? title + TITLE_SUFFIX : TITLE} />
        {/* <meta name="og:image" content={socialCard} /> */}
        <meta name="apple-mobile-web-app-title" content={TITLE} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent,
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: Footer,
  },
  toc: {
    backToTop: true,
  },
};

export default config;
