const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withPlugins([[withBundleAnalyzer]], {
  reactStrictMode: true,
  env: { title: "MY TITLE, BITCH" },
})
