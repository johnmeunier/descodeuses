import { useState, useEffect } from "react";
import ButtonCustom from "../components/ButtonCustom";
import Planning from "../components/Planning";
import { slots as rawSlots } from "../data.json";

const Home = () => {
  const [newTopic, setNewTopic] = useState("");
  const [newSpeaker, setNewSpeaker] = useState("");
  const [slots, setSlots] = useState(rawSlots);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setSlots(() => {
      return rawSlots.filter((slot) => {
        if (filter !== "") {
          return slot.topic.includes(filter);
        } else {
          return true;
        }
      });
    });
  }, [filter]);

  return (
    <div className="home">
      <ButtonCustom> Activer dark mode </ButtonCustom>
      <h2>Votre formation est composé de {slots.length} créneaux.</h2>
      <label>
        Filtre :{" "}
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </label>
      <Planning slots={slots} />
      <form>
        Notre nouvel événement a pour sujet {newTopic} et en speaker {newSpeaker}.
        <label>
          Topic
          <input
            type="text"
            value={newTopic}
            onChange={(e) => {
              setNewTopic(e.target.value);
            }}
          />
        </label>
        <label>
          Speaker
          <input
            type="text"
            value={newSpeaker}
            onChange={(e) => {
              setNewSpeaker(e.target.value);
            }}
          />
        </label>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            setSlots((prevSlots) => {
              return [
                ...prevSlots,
                {
                  date: "lundi 25 décembre",
                  dateFormated: "25/12",
                  time: "9h30-12h30",
                  topic: newTopic,
                  speaker: newSpeaker,
                },
              ];
            });
          }}
        >
          Add slot
        </button>
      </form>
    </div>
  );
};

export default Home;
