import { private_key } from "@/service_key.json";
import { initializeApp } from "firebase-admin";
import { cert, getApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const adminApp =
  getApps().length === 0
    ? initializeApp({ credential: cert(private_key) })
    : getApp();

const adminDb = getFirestore(adminApp);

export { adminApp, adminDb };
