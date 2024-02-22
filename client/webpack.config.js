const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

const is_prod = process.env.NODE_ENV === "production";

// TODO: Add and configure workbox plugins for a service worker and manifest file.

// TODO: Add CSS loaders and babel to webpack.
// Added CSS and Babel
const prodPlugins = [
  // Inject Manifest ************
  new InjectManifest({
    swSrc: "./src-sw.js",
    swDest: "src-sw.js",
  }),

  // Manifest ************
  new WebpackPwaManifest({
    fingerprints: false,
    inject: true,
    name: "Just Another Text Editor",
    short_name: "JATE",
    description: "Just Another Text Editor!",
    background_color: "#fff",
    theme_color: "lightblue",
    start_url: "./",
    publicPath: "./",
    ios: true,
    icons: [
      {
        src: path.resolve("src/images/logo.png"),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join("assets", "icons"),
      },
    ],
  }),
];

const plugins = [
  // HTML Webpack ************
  new HtmlWebpackPlugin({
    template: "./index.html",
    title: "JATE",
  }),
];

if (is_prod) {
  plugins.push(...prodPlugins);
}

module.exports = () => {
  return {
    mode: is_prod ? "prodcution" : "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },

    // PLUGINS ****************************************************************** //
    plugins,
    // ****************************************************************** //

    module: {
      rules: [
        // CSS Loader ************
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        // Babel Loader ************
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "defaults" }]],
            },
          },
        },
      ],
    },
  };
};
