//    presets: ["@babel/preset-env", "@babel/preset-react", "babel-preset-expo"],

  module.exports = {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      "@babel/plugin-proposal-export-namespace-from"
    ],
  };