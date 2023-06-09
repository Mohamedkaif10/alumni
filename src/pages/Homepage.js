import classes from "./Homepage.module.css"
import React, { useState, Fragment } from 'react';
import Card from '../Assets/Card';
import Button from "../Assets/Button"
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: new Date().getTime(),
        title: newTask,
        description: newTaskDescription,
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Fragment>
    <Card className={classes.input}>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={handleSearch}
      />
      
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
      <Button onClick={addTask}>Add Task</Button>
    </Card>
    <Card className={classes.task}>
    <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onClick={() => deleteTask(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.title}
            </span>
            <Button onClick={() => deleteTask(task.id)}>Delete</Button>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
      </Card>
    </Fragment>
  );
};

export default TodoList;