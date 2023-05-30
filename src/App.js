import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src="Octocat.png" className="logo" alt="An octocat vector art." />
        <p>
          Morkovka <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload. Thank you for using Morkovka's Better React Template to explore/develop React!
        </p>
        <p>
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
