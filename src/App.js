
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <Navbar />
     
      <Router>
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route exact path='/Leaderboard' component={Leaderboard}></Route>
      </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
