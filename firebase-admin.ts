import { projectId, clientEmail, privateKey } from "@/service_key.json";
import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const adminApp =
  getApps().length === 0
    ? initializeApp({
        credential: cert({ projectId, clientEmail, privateKey }),
      })
    : getApp();

const adminDb = getFirestore(adminApp);

export { adminApp, adminDb };
