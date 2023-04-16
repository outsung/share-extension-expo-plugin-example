module.exports = {
  extends: "universe",
  ignorePatterns: [
    "build/**",
    "**/*.js",
    ".vscode/.react/",
    ".DS_Store",
    "node_modules/",
    ".expo/",
    "dist/",
    "npm-debug.*",
    "*.jks",
    "*.p8",
    "*.p12",
    "*.key",
    "*.mobileprovision",
    "*.orig.*",
  ],

  rules: {
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "index", "sibling"],
        ],

        pathGroups: [
          {
            // @[FOLDER_NAME]*,@[FOLDER_NAME]*/**,
            pattern: `{@hooks*,@hooks*/**,@components*,@components*/**,@helpers*,@helpers*/**,@screens*,@screens*/**,@navigation*,@navigation*/**,@services*,@services*/**,@queryClient*,@queryClient*/**,@mmvk*,@mmvk*/**,@contexts*,@contexts*/**,@constants*,@constants*/**,@assets*,@assets*/**,@fileManager*,@fileManager*/**,@styles*,@styles*/**,@webSocket*,@webSocket*/**,@types*,@types*/**}`,
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["unknown"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
