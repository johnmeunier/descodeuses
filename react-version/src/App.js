import "./styles/reset.css";
import "./styles/var.css";
import "./styles/App.css";

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
            <tr className="slot" data-date="20/04">
              <th className="slot__date" rowSpan="2">
                mardi 20 avril
              </th>
              <td className="slot__time">9h30-12h30</td>
              <td className="slot__topic">N/D</td>
              <td className="slot__speaker">N/D</td>
            </tr>
            <tr className="slot" data-date="20/04">
              <td className="slot__time">13h30-17h30</td>
              <td className="slot__topic">HTML / CSS et RWD</td>
              <td className="slot__speaker">Johnathan MEUNIER</td>
            </tr>
            <tr className="slot" data-date="27/05">
              <th className="slot__date" rowSpan="2">
                jeudi 27 mai
              </th>
              <td className="slot__time">9h30-12h30</td>
              <td className="slot__topic">React JS</td>
              <td className="slot__speaker">Johnathan MEUNIER</td>
            </tr>
            <tr className="slot" data-date="27/05">
              <td className="slot__time">13h30-17h30</td>
              <td className="slot__topic">POO/UML</td>
              <td className="slot__speaker">ES SALHI Rachida</td>
            </tr>
            <tr className="slot" data-date="21/06">
              <th className="slot__date" rowSpan="2">
                lundi 21 juin
              </th>
              <td className="slot__time">9h30-12h30</td>
              <td className="slot__topic">JAVA</td>
              <td className="slot__speaker">ES SALHI Rachida</td>
            </tr>
            <tr className="slot" data-date="21/06">
              <td className="slot__time">13h30-17h30</td>
              <td className="slot__topic">Cybersécurité</td>
              <td className="slot__speaker">Tony GHILAIN</td>
            </tr>
            <tr className="slot" data-date="07/07">
              <th className="slot__date" rowSpan="2">
                mercredi 7 juillet
              </th>
              <td className="slot__time">9h30-12h30</td>
              <td className="slot__topic">SQL</td>
              <td className="slot__speaker">Catherine DESMOULINS</td>
            </tr>
            <tr className="slot" data-date="07/07">
              <td className="slot__time">13h30-17h30</td>
              <td className="slot__topic">UX/UI</td>
              <td className="slot__speaker">BOY Mari</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
