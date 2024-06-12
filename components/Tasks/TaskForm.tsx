import { useState } from 'react';

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('work');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, category });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="study">Study</option>
      </select>
      <button type="submit">Add Task</button>
      {error && <p>{error.message}</p>}
    </form>
  );
}
