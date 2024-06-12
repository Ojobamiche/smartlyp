import { Line } from 'react-chartjs-2';

export default function ProgressChart({ data }) {
  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: 'Progress',
        data: data.map(entry => entry.value),
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  return (
    <div>
      <h2>Progress Chart</h2>
      <Line data={chartData} />
    </div>
  );
}
