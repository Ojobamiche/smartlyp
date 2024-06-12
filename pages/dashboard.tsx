import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../lib/hooks/useUser';
import Welcome from '../components/Dashboard/Welcome';
import Navigation from '../components/Dashboard/Navigation';

export default function Dashboard() {
  const router = useRouter();
  const { user, loading } = useUser();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Welcome />
      <Navigation />
    </div>
  );
}
