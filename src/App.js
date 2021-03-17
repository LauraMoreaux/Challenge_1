import React, { useState } from 'react';
import '../src/stylesheets/_index.scss';
import ListTasks from './components/ListTasks';
import DeleteTasks from './components/DeleteButton';
import InputFilters from './components/InputFilters';
import StateFilters from './components/StateFilters';



const FILTER_MAP = {
  All: () => true,
  Active: data => !data.completed,
  Completed: data => data.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {

  //State
  const [data, updateTasks] = useState([
    { id: 1, name: "Mi primera tarea es muy larga y no sé si va a caber", completed: false },
    { id: 2, name: "Segunda Tarea", completed: false },
    { id: 3, name: "Tercera Tarea", completed: false },
    { id: 4, name: "Y otra más", completed: false },
  ])

  const [filter, setFilter] = useState('All');


  const taskList = data
    .filter(FILTER_MAP[filter])
    .map(task => (
      <ListTasks
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    ));

    const filterList = FILTER_NAMES.map(name => (
      <StateFilters
        key={name}
        name={name}
        isPressed={name === filter}
        setFilter={setFilter}
      />
    ));
  

  // To add new task
  const addNewTask = (newData) => {
    console.log('Estoy intentando añadir otra', newData);
    const newTask = {id: data.length + 1,
                    name: newData,
                    completed: false};
    updateList(newTask)
  }

  // To update state and re render
  const updateList = (newTask) =>{
    updateTasks(data => [...data, newTask]);
  }
  
  // To erase all tasks
  const resetAll = () => {
    console.log('He clickado el botón');
    updateTasks([]);
  }


  // Render
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__header__name">#todo</h1>
      </header>
        <body>
          <div className="wrapper">
            <nav className="filters__list">
            {filterList}
            </nav>
            <InputFilters addNewTask={addNewTask}/>
            <main>
                <ListTasks tasks={taskList}/>
                <DeleteTasks resetAll={resetAll}/>
            </main>
          </div>
      </body>
    </div>
  );
}

export default App;
