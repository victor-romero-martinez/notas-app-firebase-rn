import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  databaseURL: Constants.expoConfig.extra.databaseURL,
  projectId: Constants.expoConfig.extra.projectId,
  storageBucket: Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSender1d,
  appId: Constants.expoConfig.extra.appId,
};
// Initialize Firebase
initializeApp(firebaseConfig);
export const database = getFirestore();
