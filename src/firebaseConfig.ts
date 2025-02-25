
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "import.meta.env.VITE_APIKEY",
  authDomain: "import.meta.env.VITE_AUTHDOMAIN",
  projectId: "import.meta.env.VITE_PROJECTID",
  storageBucket: "import.meta.env.VITE_STORAGEBUCKET",
  messagingSenderId: "import.meta.env.VITE_MESSAGESENDERID",
  appId: "import.meta.env.VITE_APPID",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;