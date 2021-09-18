
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import app from "./config"

const analytics = getAnalytics(app);
const db = getFirestore();
export { db, analytics };