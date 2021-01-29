import { Switch, Route, Link } from "react-router-dom";

import Home from "./home";
import UseState from "./use-state";

//This is where our routing will live
const Sidebar = () => {
  return (
    <div>
      {/* our navbar */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/use-state">UseState</Link>
        </li>
      </ul>

      {/* switch that renders a component based on the path provided */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/use-state" component={UseState} />
      </Switch>
    </div>
  );
};

export default Sidebar;
