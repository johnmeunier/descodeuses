import "./styles/reset.css";
import "./styles/var.css";
import "./styles/App.css";

const data = [
  {
    date: "mardi 20 avril",
    dateFormated: "20/04",
    time: "9h30-12h30",
  },
  {
    dateFormated: "20/04",
    time: "13h30-17h30",
    topic: "HTML / CSS et RWD",
    speaker: "Johnathan MEUNIER",
  },
  {
    dateFormated: "27/05",
    date: "jeudi 27 mai",
    time: "9h30-12h30",
    topic: "React JS",
    speaker: "Johnathan MEUNIER",
  },
  {
    dateFormated: "27/05",
    time: "13h30-17h30",
    topic: "POO/UML",
    speaker: "ES SALHI Rachida",
  },
  {
    date: "lundi 21 juin",
    dateFormated: "21/06",
    time: "9h30-12h30",
    topic: "JAVA",
    speaker: "ES SALHI Rachida",
  },
  {
    dateFormated: "21/06",
    time: "13h30-17h30",
    topic: "Cybersécurité",
    speaker: "Tony GHILAIN",
  },
  {
    date: "mercredi 7 juillet",
    dateFormated: "07/07",
    time: "9h30-12h30",
    topic: "SQL",
    speaker: "Catherine DESMOULINS",
  },
  {
    time: "13h30-17h30",
    dateFormated: "07/07",
    topic: "UX/UI",
    speaker: "BOY Mari",
  },
];

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
            {data.map((slot) => {
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
