import { useUser } from '../../lib/hooks/useUser';

export default function Welcome() {
  const { user } = useUser();

  return <h1>Welcome, {user?.displayName || user?.email}</h1>;
}
