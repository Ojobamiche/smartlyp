import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import firebase from '../firebase/clientApp';

const db = getFirestore(firebase);

export const fetchProgress = async (userId) => {
  const q = query(collection(db, 'tasks'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const progress = querySnapshot.docs.map(doc => ({
    date: doc.data().createdAt.toDate(),
    value: doc.data().status === 'completed' ? 1 : 0,
  }));
  return progress;
};
