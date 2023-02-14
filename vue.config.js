module.exports = {
  css: {
    sourceMap:true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/_variables.scss";
          @import "@/assets/style/_mixins.scss";
        `
      }
    }
  }
};