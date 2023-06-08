import "./HomePage.css";
import { outputTech, outputProg, outputLang } from "../../Data/dataLearn";

export default function HomePage() {
  return (
    <>
      <div className="aboutMe card">
        <h3>O mnie</h3>
        <p>
          Jestem studentem Wyższej Szkoły Informatyki i Zarządzania w Rzeszowie, którego celem jest zostać FullStack developerem. Dobrze znam HTML i CSS oraz JavaScript. Chcę rozwijać się w
          technologii Java Script oraz PHP. Moje zalety to umiejętność pracy w zespole, szybkie uczenie się oraz pracowitość i zaangażowanie.
        </p>
      </div>
      <div className="tech">
        <div className="card learn">
          <h3>Technologie, których się uczę</h3>
          <ul className="allTech">{outputTech}</ul>
        </div>
        <div className="card programs">
          <h3>Oprogramowanie, którego się uczę</h3>
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
    </>
  );
}
