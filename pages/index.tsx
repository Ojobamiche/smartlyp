import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { loginWithGoogle } from '../lib/firebase/auth';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        router.push('/dashboard');
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  return (
    <div className={styles.container}>
      <h1>Welcome to Smartly</h1>
      {!user ? (
        <>
          <button onClick={() => router.push('/components/Auth/SignUp')}>Sign Up</button>
          <button onClick={() => router.push('/components/Auth/Login')}>Log In</button>
        </>
      ) : (
        <button onClick={() => router.push('/dashboard')}>Go to Dashboard</button>
      )}
      <button onClick={loginWithGoogle}>Log In with Google</button>
    </div>
  );
}

