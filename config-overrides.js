const path = require("path");

module.exports = function override(config, env) {
  config.output.filename = "static/js/[name].[contenthash:8].js";
  config.output.chunkFilename = "static/js/[name].[chunkhash:8].chunk.js";

  config.resolve.alias = {
    "@": path.resolve(__dirname, "src/"),
    "@style": path.resolve(__dirname, "src/style"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@components": path.resolve(__dirname, "src/components"),
    "@store": path.resolve(__dirname, "src/store"),
    "@types": path.resolve(__dirname, "src/types"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
  };
  return config;
};
