import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles/reset.css";
import "./styles/var.css";
import "./styles/App.css";

import { slots } from "./data.json";

import Planning from "./pages/Planning";
import Mentions from "./pages/Mentions";
import Detail from "./pages/Detail";

import ButtonCustom from "./components/ButtonCustom";
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
                <Link to="/mention">Mention</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact>
              <ButtonCustom> Activer dark mode </ButtonCustom>
              <h2>Votre formation est composé de {slots.length} créneaux.</h2>
              <Planning slots={slots} />
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
