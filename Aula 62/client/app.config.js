export default {
    name: "Todo App",
    slug: "TodoApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      },
      softwareKeyboardLayoutMode: "pan"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
        apiURL: "https://hard-bobcat-39.loca.lt/api"
    },
};