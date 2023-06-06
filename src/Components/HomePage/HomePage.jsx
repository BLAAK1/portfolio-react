import "./HomePage.css";
import { dataTech, dataPrograms, dataLangs, dataJobs, dataEdu } from "./data";

export default function HomePage() {
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
      <div className={"lang " + el.classname}>
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
  return (
    <div className="mainContent__content">
      <div className="tech">
        <div className="card learn">
          <h3>Technologie, których się uczę</h3>
          <ul className="allTech">{outputTech}</ul>
        </div>
        <div className="card programs">
          <h3>Oprogramowanie, które znam</h3>
          <ul className="allPrograms">{outputProg}</ul>
        </div>
      </div>
      <div className="myLanguages">
        <div className="languages"></div>
      </div>
      <div className="lang-start">
        <h3>Jakie znam języki?</h3>
      </div>
      <div className="languages">{outputLang}</div>
    </div>
  );
}
