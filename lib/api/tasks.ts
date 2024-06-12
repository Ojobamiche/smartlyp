import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import firebase from '../firebase/clientApp';

const db = getFirestore(firebase);

export const fetchTasks = async (userId) => {
  const q = query(collection(db, 'tasks'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const tasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return tasks;
};

export const createTask = async (userId, task) => {
  const docRef = await addDoc(collection(db, 'tasks'), {
    ...task,
    userId,
    createdAt: new Date(),
  });
  const doc = await docRef.get();
  return { id: doc.id, ...doc.data() };
} catch (error) {
  console.error('Error creating task:', error);
  throw new Error('Failed to create task')
};
