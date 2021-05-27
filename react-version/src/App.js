import "./styles/reset.css";
import "./styles/var.css";
import "./styles/App.css";

import { slots } from "./data.json";

import Planning from "./Planning";
import ButtonCustom from "./ButtonCustom";
function App() {
  return (
    <div className="App" data-theme="light">
      <div className="container">
        <h1>Intervention AXA à DesCodeuses</h1>
        <ButtonCustom> Activer dark mode </ButtonCustom>
        <h2>Votre formation est composé de {slots.length} créneaux.</h2>
        <Planning slots={slots} />
      </div>
    </div>
  );
}

export default App;
