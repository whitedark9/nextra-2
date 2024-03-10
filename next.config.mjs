import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
  eslint: {
    // ESLint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true,
  },
  // For redirects
  // redirects: () => [
  //   {
  //     source: '/docs/guide/:slug(typescript|latex|tailwind-css|mermaid)',
  //     destination: '/docs/guide/advanced/:slug',
  //     permanent: true
  //   },
  // ],
});
