import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./index.css"


const Home = () => {

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const apiUrl = "https://tasks-app-backend-1t8s.onrender.com/tasks";

    const response = await fetch(apiUrl);
    if (response.ok === true) {
      const fetchedData = await response.json();

      setTasks(fetchedData.data)
    }
  };

  useEffect(() => {
    getTasks()
  })

  const deleteTask = async (id) => {
    const apiUrl = `https://tasks-app-backend-1t8s.onrender.com/tasks/${id}`;
    const res = await fetch(apiUrl, {
      method: "DELETE",
    });
    if (res.ok) {
      setTasks(tasks.filter(task => task._id !== id))
      alert("Task Deleted")
    }
  }


  return (
    <div className="home">
      {tasks.length === 0 ? (
        <div className="no-tasks">
          <h1>No tasks added</h1>
          <Link to="/createTask">
            <p>Click here to create task</p>
          </Link>
        </div>
      ) : (
        <ul className="tasks-list">
          {tasks.map(task => (
            <li className='task-item' key={task._id}>
              <h1 className='task-heading'>{task.name}</h1>
              <p className='task-description'>{task.description}</p>
              <button className='delete-button' onClick={() => deleteTask(task._id)}>Delete Task</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}




export default Home