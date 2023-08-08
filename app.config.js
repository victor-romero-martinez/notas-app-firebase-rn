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
      versionCode: "5",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    extra: {
      eas: {
        projectId: "dea81c9b-3625-4ea0-b0ca-40383c305389",
      },
    },
  },
};
