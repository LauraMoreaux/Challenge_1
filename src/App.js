import React, { useState, useEffect } from 'react';
import '../src/stylesheets/_index.scss';
import ListTasks from './components/ListTasks';
import DeleteTasks from './components/DeleteButton';

function App() {

  const [data, updateTasks] = useState([
    { id: 'task-1', name: "Mi primera tarea es muy larga y no sé si va a caber", completed: true },
    { id: 'task-2', name: "Segunda Tarea", completed: false },
    { id: 'task-3', name: "Tercera Tarea", completed: false },
    { id: 'task-4', name: "Y otra más", completed: false },
  ])


  
  function resetAll() {
    console.log('He clickado el botón');
    updateTasks([]);
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__header__name">#todo</h1>
      </header>
        <body>
          <div className="wrapper">
            <nav className="filters">
              <ul className="filters__list">
                <li className="li__underlined">All</li>
                <li className="">Active</li>
                <li className="">Completed</li>
              </ul>
            </nav>
            <div className="inputBox">
              <form className="inputBox__form"> 
                <label className="inputBox__form__title">
                <input className="inputBox__form__box" type="text" name="Add other task" />
                </label>
                <button className="inputBox__form__btn"type="submit">Add</button>
              </form>
            </div>
            <main>
                <ListTasks tasks={data}/>
                <DeleteTasks resetAll={resetAll}/>
            </main>
          </div>
      </body>
    </div>
  );
}

export default App;
