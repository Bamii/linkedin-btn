import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Callback from "./Callback";
import Dashboard from "./Dashboard";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/callback">
          <Callback />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
