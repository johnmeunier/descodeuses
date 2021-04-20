document.querySelector("#toggleTheme").addEventListener("click", () => {
  const $body = document.querySelector("body");
  $body.dataset.theme = $body.dataset.theme === "light" ? "dark" : "light";
});

const dateObject = new Date();
const currentDate = `${dateObject.getDate()}/${(dateObject.getMonth() + 1).toString().padStart(2, "0")}`;

const data = [
  {
    date: "mardi 20 avril",
    dateFormated: "20/04",
    time: "9h30-12h30",
    topic: "N/D",
    speaker: "N/D",
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

const createTd = (type, value) => {
  const $el = document.createElement("td");
  $el.classList.add(`slot__${type}`);
  $el.innerText = value;
  return $el;
};

data.forEach((slot) => {
  const $slot = document.createElement("tr");
  $slot.classList.add("slot");
  $slot.dataset.date = slot.dateFormated;
  if (currentDate === slot.dateFormated) {
    $slot.classList.add("slot--today");
  }

  if (slot.date) {
    const $date = document.createElement("th");
    $date.classList.add("slot__date");
    $date.innerText = slot.date;
    $date.setAttribute("rowspan", 2);
    $slot.appendChild($date);
  }

  $slot.appendChild(createTd("time", slot.time));
  $slot.appendChild(createTd("topic", slot.topic));
  $slot.appendChild(createTd("speaker", slot.speaker));

  document.querySelector("tbody").appendChild($slot);
});
