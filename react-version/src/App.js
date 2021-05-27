import "./styles/reset.css";
import "./styles/var.css";
import "./styles/App.css";

import { slots } from "./data.json";

const dateObject = new Date();
const currentDate = `${dateObject.getDate()}/${(dateObject.getMonth() + 1).toString().padStart(2, "0")}`;

function App() {
  return (
    <div className="App" data-theme="light">
      <div className="container">
        <h1>Intervention AXA à DesCodeuses</h1>

        <button id="toggleTheme">Activer dark mode</button>

        <table>
          <thead>
            <tr>
              <th colSpan="2">Créneaux</th>
              <th>Thématique</th>
              <th>Intervenant(e)</th>
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => {
              return (
                <tr
                  className={`slot ${currentDate === slot.dateFormated ? "slot--today" : ""}`}
                  data-date={slot.dateFormated}
                >
                  <th className="slot__date">{slot.date}</th>
                  <td className="slot__time">{slot.time}</td>
                  {slot.topic && <td className="slot__topic">{slot.topic}</td>}
                  {slot.speaker && <td className="slot__speaker">{slot.speaker}</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
