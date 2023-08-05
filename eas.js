import "dotenv/config";

export default {
  build: {
    preview: {
      android: {
        buildType: "apk",
      },
      env: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSender1d: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        databaseURL: process.env.DATA_BASE_URL,
      },
    },
    preview2: {
      android: {
        gradleCommand: ":app:assembleRelease",
      },
    },
    preview3: {
      developmentClient: true,
    },
    production: {
      env: {
        EXPO_PUBLIC_API_KEY: "",
      },
    },
  },
};
