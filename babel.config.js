module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@hooks": "./src/hooks",
            "@helpers": "./src/helpers",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@navigation": "./src/navigation",
            "@services": "./src/services",
            "@contexts": "./src/contexts",
            "@constants": "./src/constants",
            "@assets": "./src/assets",
            "@fileManager": "./src/fileManager",
            "@queryClient": "./src/queryClient",
            "@mmvk": "./src/mmvk",
            "@webSocket": "./src/webSocket",
            "@types": "./src/types",
            // "@[FOLDER_NAME]": "./src/[FOLDER_NAME]",
          },
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
    ],
  };
};
