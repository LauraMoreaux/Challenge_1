import React, { useState, useEffect } from 'react';
import '../src/stylesheets/_index.scss';
import StateFilters from './components/StateFilters';
import TasksList from './components/TasksList';
import DeleteTasks from './components/DeleteButton';
import InputFilters from './components/InputFilters';



//Comparative to filter states
const FILTER_MAP = {
  All: () => true,
  Active: data => !data.checked,
  Completed: data => data.checked
};

const FILTER_NAMES = Object.keys(FILTER_MAP);


// APP FUNCTION

function App() {

  // To get from LocalStorage
  const storedValues = JSON.parse(localStorage.getItem('myValueInLocalStorage'));


  //States
  const [data, updateTasks] = useState(storedValues);
  const [filter, setFilter] = useState('All');


  // Use Effect to set to LocalStorage
  useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', JSON.stringify(data));
  }, [data]);


  // To filter tasks

  const taskList = data.filter(FILTER_MAP[filter])
    .map(task => (
      <TasksList
        id={task.id}
        name={task.name}
        completed={task.checked}
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
                    checked: false};
    updateList(newTask);
  }

  // To erase one 
  const handleDeleteIcon = (id) => {
    console.log('Recibo este id', id);
    const reducedArray = data.filter(task => task.id !== parseInt(id));
    updateTasks(reducedArray);
  }

  // To update state and re render
  const updateList = (newTask) => {
    updateTasks(data => [...data, newTask]);
  }

  // To update state with checkbox status
  const handleStatus = (id) => {
    console.log("voy a cambiar el estado a esta task", id);
    const updatedStatus = data.map(task => {
      if (task.id == id) {
        console.log('He pasado por el if');
          return {
            ...task,
            checked: !task.checked
          };
        }
        return task;
    })
    updateTasks(updatedStatus);
  }
  
     
  console.log(data)

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
                <TasksList handleStatus={handleStatus} handleDeleteIcon={handleDeleteIcon} tasks={taskList}/>
                <DeleteTasks resetAll={resetAll}/>
            </main>
          </div>
      </body>
    </div>
  );
}

export default App;
