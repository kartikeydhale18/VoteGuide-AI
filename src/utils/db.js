import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const loadUserProgress = async (userId) => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // Initialize new user document
      const initialData = { completedPhases: [], documents: { dob: false, address: false, photo: false } };
      await setDoc(docRef, initialData);
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
    await updateDoc(docRef, { completedPhases });
  } catch (error) {
    console.error("Error saving timeline progress:", error);
  }
};

export const saveDocumentProgress = async (userId, hasDobProof, hasAddressProof, hasPhoto) => {
  try {
    const docRef = doc(db, 'users', userId);
    await updateDoc(docRef, { 
      'documents.dob': hasDobProof,
      'documents.address': hasAddressProof,
      'documents.photo': hasPhoto
    });
  } catch (error) {
    console.error("Error saving document progress:", error);
  }
};
