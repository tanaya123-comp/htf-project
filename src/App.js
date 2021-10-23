
import "./App.css";
import Dashboard from "./components/Dashboard";
import Events from "./components/Events";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";
import OrganisationInfo from "./components/OrganisationInfo";

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      
     
      <Router>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route exact path='/Leaderboard' component={Leaderboard}></Route>
          <Route exact path='/events' component={Events}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/organisationInfo" component={OrganisationInfo}></Route>
        </Switch>

      </Router>
      </header>
    </div>
  );
}

export default App;
