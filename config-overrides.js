module.exports = function override(config, env) {
  // Modify the webpack config to set the public path
  config.output.publicPath = "https://webapps.du.edu/campus-maps/";

  return config;
};
