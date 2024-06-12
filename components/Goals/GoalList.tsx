export default function GoalList({ goals }) {
  return (
    <div>
      <h2>Goal List</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>{goal.title}</li>
        ))}
      </ul>
    </div>
  );
}
