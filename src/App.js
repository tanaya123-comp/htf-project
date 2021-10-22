import './App.css';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Router>
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route exact path='/Leaderboard' component={Leaderboard}></Route>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
