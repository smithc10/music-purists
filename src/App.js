import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.svg";
import "./App.css";

import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar></NavBar>
        <div className="container">
          <Dashboard />
        </div>
      </header>
    </div>
  );
}

export default App;
