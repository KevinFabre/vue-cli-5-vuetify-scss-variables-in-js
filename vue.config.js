const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  // Comment to generate Vuetify stylesheets
  css: {
    loaderOptions: {
      css: {
        modules: {
          auto: () => true,
        },
      },
    },
  },
});
