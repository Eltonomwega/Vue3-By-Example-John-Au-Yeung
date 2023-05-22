module.exports = {
  chainWebpack: (config) => {
    //change this file
    config.module
      .rule("worker")
      .test(/worker\.js$/)
      .use("worker-loader")
      .loader("worker-loader")
      .end();
  },
};
