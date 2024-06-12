import { useState, useEffect } from 'react';
import GoalList from '../components/Goals/GoalList';
import GoalForm from '../components/Goals/GoalForm';
import { fetchGoals, createGoal } from '../lib/api/goals';
import { useUser } from '../lib/hooks/useUser';

export default function Goals() {
  const { user } = useUser();
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    if (user) {
      fetchGoals(user.uid).then(setGoals);
    }
  }, [user]);

  const addGoal = async (goal) => {
    const newGoal = await createGoal(user.uid, goal);
    setGoals([...goals, newGoal]);
  };

  return (
    <div>
      <h1>Goals</h1>
      <GoalForm addGoal={addGoal} />
      <GoalList goals={goals} />
    </div>
  );
}
