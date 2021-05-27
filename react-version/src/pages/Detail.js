import { useParams } from "react-router-dom";
import { slots } from "../data.json";

const Detail = () => {
  let { id } = useParams();
  const slot = slots[id];
  return (
    <div className="detail">
      <h2>Détails de la formation {slot.topic}</h2>
      <p>{slot.description}</p>
    </div>
  );
};
export default Detail;
