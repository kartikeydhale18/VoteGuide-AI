import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const loadUserProgress = async (userId) => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // Initialize new user document
      const initialData = { completedPhases: [], documents: { dob: false, address: false, photo: false, identity: false } };
      await setDoc(docRef, initialData, { merge: true });
      return initialData;
    }
  } catch (error) {
    console.error("Error loading progress:", error);
    return null;
  }
};

export const saveTimelineProgress = async (userId, completedPhases) => {
  try {
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, { completedPhases }, { merge: true });
  } catch (error) {
    console.error("Error saving timeline progress:", error);
  }
};

export const saveDocumentProgress = async (userId, hasDobProof, hasAddressProof, hasPhoto, hasIdentity) => {
  try {
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, { 
      'documents.dob': hasDobProof,
      'documents.address': hasAddressProof,
      'documents.photo': hasPhoto,
      'documents.identity': hasIdentity
    }, { merge: true });
  } catch (error) {
    console.error("Error saving document progress:", error);
  }
};
