import { useState, useEffect } from 'react';
import TaskList from '../components/Tasks/TaskList';
import TaskForm from '../components/Tasks/TaskForm';
import { fetchTasks, createTask } from '../lib/api/tasks';
import { useUser } from '../lib/hooks/useUser';

export default function Tasks() {
  const { user } = useUser();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (user) {
      fetchTasks(user.uid).then(setTasks);
    }
  }, [user]);

  const addTask = async (task) => {
    const newTask = await createTask(user.uid, task);
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}
