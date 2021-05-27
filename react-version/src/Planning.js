const PlanningRow = ({ slot, currentDate }) => (
  <tr className={`slot ${currentDate === slot.dateFormated ? "slot--today" : ""}`} data-date={slot.dateFormated}>
    <th className="slot__date">{slot.date}</th>
    <td className="slot__time">{slot.time}</td>
    {slot.topic && <td className="slot__topic">{slot.topic}</td>}
    {slot.speaker && <td className="slot__speaker">{slot.speaker}</td>}
  </tr>
);
const Planning = ({ slots }) => {
  const dateObject = new Date();
  const currentDate = `${dateObject.getDate()}/${(dateObject.getMonth() + 1).toString().padStart(2, "0")}`;

  return (
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
          return <PlanningRow slot={slot} currentDate={currentDate} />;
        })}
      </tbody>
    </table>
  );
};

export default Planning;
