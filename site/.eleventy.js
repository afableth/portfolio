module.exports = function (eleventyConfig) {
  // Passthrough for static assets
  eleventyConfig.addPassthroughCopy(".well-known");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
  };
};