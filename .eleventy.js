const eleventyPluginOgImage = require("eleventy-plugin-og-image");

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(eleventyPluginOgImage);

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            layouts: "_layouts",
        },
    }
};
