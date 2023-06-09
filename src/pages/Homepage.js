import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: new Date().getTime(),
        title: newTask,
        description: newTaskDescription,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
      setNewTaskDescription('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button>Edit</button>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
      <h2>Add New Task</h2>
      <input
        type="text"
        placeholder="Task title"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <textarea
        placeholder="Task description"
        value={newTaskDescription}
        onChange={(event) => setNewTaskDescription(event.target.value)}
      ></textarea>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TodoList;