import { useState, useEffect } from 'react';
import axios from 'axios';
import './todolistrender.css';



function TodoListRender() {
const [tasks, setTasks] = useState([]);
const [lastUpdated, setLastUpdated] = useState(null);


const handleEdit = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    const name = prompt('Enter new name', taskToEdit.name);
    const description = prompt('Enter new description', taskToEdit.description);
    axios.patch(`/update/${id}`, { name, description})
    .then(response => {
        const updatedTask = response.data;
        setTasks(tasks.map(task => task.id === id ? updatedTask : task));
        setLastUpdated(new Date());
    })
    .catch(error => {
        console.log(error);
    });
};

const deleteTask = (id) => {
    axios.delete(`/delete/${id}`)
    .then(response => {
        setTasks(tasks.filter(task => task.id !== id));
        setLastUpdated(new Date());
    })
    .catch(error => {
        console.log(error);
    });
};

const editTask = (id) => {
    axios.post(`/editStatus/${id}`)
    .then(response => {
        const updatedTask = response.data;
        setTasks(tasks.map(task => task.id === id ? updatedTask : task));
        setLastUpdated(new Date());
    })
    .catch(error => {
        console.log(error);
    });
};

useEffect(() => {
    axios.get('/index')
    .then(response => {
        setTasks(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}, []);

useEffect(() => {
    if (lastUpdated !== null) {
    axios.get('/index')
        .then(response => {
        setTasks(response.data);
        })
        .catch(error => {
        console.log(error);
        });
    }
}, [lastUpdated]);

return (
    <div className="table-container">
    <h1>To Do List</h1>
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Completed</th>
            <th></th>
            <th>Accions</th>
            <th></th>
        </tr>
        </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={`${index}-${task.id}`}>
                    <td className="table-cell">{task.name}</td>
                    <td className="table-cell">{task.description}</td>
                    <td className="table-cell"><span className={task.completed ? 'checkmark' : 'crossmark'}></span></td>
                    <td className="table-cell"><button className="button-3d" onClick={() => editTask(task.id)}>{task.completed ? 'Change to Incomplete' : 'Change to Complete'}</button></td>
                    <td className="table-cell"><button className="button-3d" onClick={() => handleEdit(task.id)}>Edit</button></td>
                    <td className="table-cell"><button className="button-3d" onClick={() => deleteTask(task.id)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
    </table>
    </div>
);
location.reload();
}

export default TodoListRender;