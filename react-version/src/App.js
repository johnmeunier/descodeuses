import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles/reset.css";
import "./styles/var.css";
import "./styles/App.css";

import Mentions from "./pages/Mentions";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App" data-theme="light">
      <div className="container">
        <h1>Intervention AXA à DesCodeuses</h1>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/mentions">Mention</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/detail/:id" exact>
              <Detail />
            </Route>
            <Route path="/mentions" exact>
              <Mentions />
            </Route>
            <Route>
              <h1>Vous êtes perdu</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
