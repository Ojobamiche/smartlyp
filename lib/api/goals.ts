import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import firebase from '../firebase/clientApp';

const db = getFirestore(firebase);

export const fetchGoals = async (userId) => {
  const q = query(collection(db, 'goals'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const goals = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return goals;
};

export const createGoal = async (userId, goal) => {
  const docRef = await addDoc(collection(db, 'goals'), {
    ...goal,
    userId,
    createdAt: new Date(),
  });
  const doc = await docRef.get();
  return { id: doc.id, ...doc.data() };
};
