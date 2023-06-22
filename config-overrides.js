const path = require("path");

module.exports = function override(config, env) {
  config.output.filename = "static/js/[name].[contenthash:8].js";
  config.output.chunkFilename = "static/js/[name].[chunkhash:8].chunk.js";

  config.resolve.alias = {
    "@": path.resolve(__dirname, "src/"),
    "@style": path.resolve(__dirname, "src/style"),
  };
  return config;
};
