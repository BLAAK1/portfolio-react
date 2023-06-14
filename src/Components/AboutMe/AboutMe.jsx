import me from "../../assets/placeholderImg.jpeg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="mainContent--left">
      <div className="content">
        <div>
          <h2>Oskar Zegar</h2>
          <p>Aspirujący FullStack Deweloper</p>
        </div>
        <div className="myImg">
          <img src={me} alt="Me" />
        </div>
        <div className="list">
          <ul>
            <li>Imię: Oskar</li>
            <li>Nazwisko: Zegar</li>
            <li>Wiek: 20</li>
            <li>Lokalizacja: Dębica, Polska</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
