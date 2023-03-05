const CONFIG = {
  // profile setting (required)
  profile: {
    name: "sikiy",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Front-end developer",
    bio: "I develop everything using node.",
    email: "dev.sikiy@gmail.com",
    linkedin: "eunsik-yoon",
    github: "lisiver",
    instagram: "",
  },
  projects: [
    {
      name: `sikiy-log`,
      href: "https://github.com/lisiver/sikiy-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "sikiy-log",
    description: "welcome to sikiy-log!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://blog.sikiy.com",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image.sikiy.com", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: [
      "Blog",
      "Website",
      "Notion",
      "Front-end",
      "FE",
      "Back-end",
      "BE",
      "developer",
      "FullStack",
      "프론트엔드",
      "개발자",
      "react",
      "next",
      "node",
      "리액트",
    ],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "lisiver/sikiy-log-utterances",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
