import "dotenv/config";

export default {
  expo: {
    name: "notasApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "center",
      backgroundColor: "#ffffff",
    },
    android: {
      package: "com.victordav.notasapp",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    extra: {
      env: {
        EXPO_PUBLIC_API_KEY: process.env.EXPO_PUBLIC_API_KEY,
        EXPO_PUBLIC_AUTH_DOMAIN: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
        EXPO_PUBLIC_PROJECT_ID: process.env.EXPO_PUBLIC_PROJECT_ID,
        EXPO_PUBLIC_STORAGE_BUCKET: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
        EXPO_PUBLIC_MESSAGING_SENDER_ID: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
        EXPO_PUBLIC_APP_ID: process.env.EXPO_PUBLIC_APP_ID,
      },
      eas: {
        projectId: "dea81c9b-3625-4ea0-b0ca-40383c305389",
      },
    },
  },
};
