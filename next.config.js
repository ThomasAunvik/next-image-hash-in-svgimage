/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}
