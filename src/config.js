import app from "./firebase"
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const analytics = getAnalytics(app);
const db  = getFirestore()
export {db, analytics}