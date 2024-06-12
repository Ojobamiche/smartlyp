import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebase from '../firebase/clientApp';

const db = getFirestore(firebase);

export const submitFeedback = async (userId, message) => {
  await addDoc(collection(db, 'feedback'), {
    userId,
    message,
    createdAt: new Date(),
  });
};
