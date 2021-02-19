import '../src/stylesheets/_index.scss';

function App() {
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
                <li>Active</li>
                <li>Completed</li>
              </ul>
            </nav>
            <div className="inputBox">
              <form className="inputBox__form"> 
                {/* <label className="inputBox__form__title"> */}
                <input className="inputBox__form__box" type="text" name="Add other task" />
                {/* </label> */}
                <button className="inputBox__form__btn"type="submit">Add</button>
              </form>
            </div>
            <main>
              <ul className="taskList">
                <li> <input type="checkbox" /> <span>Primera tarea</span>
                <i className="fa task__fa fa-trash"></i></li>
                <li> <input type="checkbox" /> <span>Segunda tarea</span>
                <i className="fa task__fa fa-trash"></i></li>
              </ul>
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
