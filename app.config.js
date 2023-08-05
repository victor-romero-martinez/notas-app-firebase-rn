import "dotenv/config";

export default {
  expo: {
    name: "notasApp",
    slug: "notasApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.tuempresa.tuappname",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSender1d: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      databaseURL: process.env.DATA_BASE_URL,
      eas: {
        projectId: "cf3bb168-faf5-4375-b262-a0a5e20cc3c4",
      },
    },
  },
};
