//as in an import as alias
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./components/sidebar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/** Router allows us to having routing within our application */}
      <Router>
        <Sidebar />
      </Router>
    </div>
  );
};

export default App;
