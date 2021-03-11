import '../src/stylesheets/_index.scss';
import ListTasks from './components/ListTasks';

function App() {

  const data = [
    { id: 'task-1', name: "Mi primera tarea es muy larga y no sé si va a caber", completed: true },
    { id: 'task-2', name: "Segunda Tarea", completed: false },
    { id: 'task-3', name: "Tercera Tarea", completed: false },
    { id: 'task-4', name: "Y otra más", completed: false },
  ];

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
              <span className="box__delete__btn">
                <button className="delete__btn" type="submit"> <i className="fa delete__task fa-trash"></i>delete all</button>
              </span>
            </main>
          </div>
      </body>
    </div>
  );
}

export default App;
