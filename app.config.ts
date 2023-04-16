import { ConfigContext, ExpoConfig } from "@expo/config";

const APP_VARIANT: "production" | "dev" | "stage" | "local" =
  (process.env as any).APP_VARIANT || "production";

export default ({ config }: ConfigContext): ExpoConfig => {
  const appName = {
    local: "Squirrel (local)",
    dev: "Squirrel (dev)",
    stage: "Squirrel (stage)",
    production: "Squirrel",
  };

  const bundleIdentifier = {
    local: "com.outsung.squirrel.local",
    dev: "com.outsung.squirrel.dev",
    stage: "com.outsung.squirrel.stage",
    production: "com.outsung.squirrel",
  };

  const scheme = {
    local: "squirrel-local",
    dev: "squirrel-dev",
    stage: "squirrel-stage",
    production: "squirrel",
  };

  const version = "1.0.0";
  const buildNumber = 1;

  return {
    ...config,
    name: appName[APP_VARIANT],
    slug: "squirrel",
    scheme: scheme[APP_VARIANT],
    version,
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    extra: { eas: { projectId: "12537bd2-ca9c-4004-83a2-e49e6eed073a" } },
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: bundleIdentifier[APP_VARIANT],
      supportsTablet: true,
      buildNumber: String(buildNumber),
      config: { usesNonExemptEncryption: false },
    },
    android: {
      package: bundleIdentifier[APP_VARIANT],
      versionCode: buildNumber,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon-1.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      ["expo-updates", { username: "outsung" }],
      [
        "expo-dynamic-app-icon",
        {
          squirrel: {
            image: "./assets/adaptive-icon-2.png",
            prerendered: true,
          },
          acorn: {
            image: "./assets/adaptive-icon-1.png",
            prerendered: true,
          },
        },
      ],
      ["expo-build-properties", { ios: { deploymentTarget: "15.0" } }],
      [
        "share-extension-expo-plugin",
        {
          devTeam: "2P6YA78Z27",
          extensionPath: "./src/extensions/share-extension-expo-plugin",
          mainStoryboardName: "ShareView",
          activationRule: ["text", "url", "image", "movie"],
        },
      ],
    ],
  };
};
