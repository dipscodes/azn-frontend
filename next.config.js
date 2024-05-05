module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3210",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aznude.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn2.aznude.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
