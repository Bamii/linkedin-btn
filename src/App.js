import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Callback from "./Callback";
import Authenticate from "./Authenticate";
import Dashboard from "./Dashboard";
import Home from "./Home";
require('dotenv').config();

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/authenticate"
          render={({ location }) => <Authenticate location={location} />}
        />
        <Route
          path="/callback"
          render={({ location }) => <Callback location={location} />}
        />
        <Route
          path="/dashboard"
          render={({ location }) =><Dashboard location={location} />}
        />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
