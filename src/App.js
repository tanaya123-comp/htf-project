import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Router>
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
