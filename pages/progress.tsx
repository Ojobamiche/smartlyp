import { useEffect, useState } from 'react';
import ProgressChart from '../components/Progress/ProgressChart';
import ProgressSummary from '../components/Progress/ProgressSummary';
import { fetchProgress } from '../lib/api/progress';
import { useUser } from '../lib/hooks/useUser';

export default function Progress() {
  const { user } = useUser();
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    if (user) {
      fetchProgress(user.uid).then(setProgressData);
    }
  }, [user]);

  return (
    <div>
      <h1>Progress</h1>
      <ProgressChart data={progressData} />
      <ProgressSummary data={progressData} />
    </div>
  );
}
