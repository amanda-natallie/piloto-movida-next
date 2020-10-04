const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")



module.exports = withPWA({
  distDir: 'build',
  pageExtensions: ["tsx", "ts"],
  pwa: {
    disable: !isProd,
    dest: "public"
  }
})
