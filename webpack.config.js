module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]_[hash:base64:8]",
            },
          },
        ],
      },
    ],
  },
};
