export default function ProgressSummary({ data }) {
  const totalTasks = data.length;
  const completedTasks = data.filter(task => task.status === 'completed').length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  return (
    <div>
      <h2>Progress Summary</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Progress: {progressPercentage.toFixed(2)}%</p>
    </div>
  );
}
