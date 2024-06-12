import { getFirestore, collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import firebase from '../firebase/clientApp';

const db = getFirestore(firebase);

export const fetchPartners = async (userId) => {
  const q = query(collection(db, 'partners'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const partners = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return partners;
};

export const fetchPartnerProfile = async (partnerId) => {
  const docRef = doc(db, 'partners', partnerId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};
