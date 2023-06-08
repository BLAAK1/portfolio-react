import enFlag from "../assets/flags/en.png";
import plFlag from "../assets/flags/pl.png";
import ruFlag from "../assets/flags/ru.png";

const dataTech = [
  {
    name: "JavaScript",
    knowledge: "Dobrze",
    progressBar: 50,
  },
  {
    name: "HTML",
    knowledge: "Bardzo dobrze",
    progressBar: 70,
  },
  {
    name: "CSS",
    knowledge: "Bardzo dobrze",
    progressBar: 70,
  },
  {
    name: "React.js",
    knowledge: "Podstawy",
    progressBar: 30,
  },
  {
    name: "PHP",
    knowledge: "Podstawy",
    progressBar: 20,
  },
  {
    name: "SQL",
    knowledge: "Podstawy",
    progressBar: 20,
  },
];
const dataPrograms = [
  {
    name: "Windows",
    knowledge: "Zaawansowane",
    progressBar: 90,
  },
  {
    name: "Pakiet MS Office",
    knowledge: "Bardzo dobrze",
    progressBar: 60,
  },
  {
    name: "Linux",
    knowledge: "Dobrze",
    progressBar: 40,
  },

  {
    name: "Adobe Premier Pro",
    knowledge: "Podstawy",
    progressBar: 20,
  },
  {
    name: "Adobe Photoshop",
    knowledge: "Podstawy",
    progressBar: 15,
  },
  {
    name: "Blender",
    knowledge: "Podstawy",
    progressBar: 10,
  },
];
const dataLangs = [
  {
    classname: "emglish",
    name: "Angielski",
    knowledge: "Dobrze (B1)",
    img: enFlag,
  },
  {
    classname: "polish",
    name: "Polski",
    knowledge: "Narodowy",
    img: plFlag,
  },
  {
    classname: "rusian",
    name: "Rosyjski",
    knowledge: "Podstawy",
    img: ruFlag,
  },
];

const outputTech = dataTech.map((el) => {
  return (
    <li key={el.name}>
      <div className="name">
        <div className="techName">
          <h4>{el.name}</h4>
        </div>
        <div className="knowledge">
          <p>{el.knowledge}</p>
        </div>
      </div>
      <div className="progressBar">
        <div className="progressBar--inner" style={{ width: el.progressBar + "%" }}></div>
      </div>
    </li>
  );
});
const outputProg = dataPrograms.map((el) => {
  return (
    <li key={el.name}>
      <div className="name">
        <div className="techName">
          <h4>{el.name}</h4>
        </div>
        <div className="knowledge">
          <p>{el.knowledge}</p>
        </div>
      </div>
      <div className="progressBar">
        <div className="progressBar--inner" style={{ width: el.progressBar + "%" }}></div>
      </div>
    </li>
  );
});
const outputLang = dataLangs.map((el) => {
  return (
    <div className={"lang " + el.classname} key={"lang " + el.classname}>
      <div className="lang-img">
        <img src={el.img} alt={el.classname + "flag"} />
      </div>
      <div className="lang-name">
        <h3>{el.name}</h3>
        <p>{el.knowledge}</p>
      </div>
    </div>
  );
});

export { outputTech, outputProg, outputLang };
