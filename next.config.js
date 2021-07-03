module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./lib/generate-sitemap");
    }

    return config;
  },
};
