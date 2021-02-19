
import '../stylesheets/_app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>#todo</h1>
      </header>
      <body>
        <nav>
          <ul>
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
          </ul>
        </nav>
        <div>
          <form>
            <label>
            <input type="text" name="Add other task" />
            </label>
            <button type="submit"></button>
          </form>
        </div>
        <main>
          <ul>
            <li> <input type="checkbox" /> <span>Primera tarea</span>
            </li>
            <li> <input type="checkbox" /> <span>Segunda tarea</span>
            </li>
          </ul>
        </main>
      </body>
    </div>
  );
}

export default App;
