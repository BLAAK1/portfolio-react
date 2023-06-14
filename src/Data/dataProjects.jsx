import { Link } from "react-router-dom";
const dataProjects = [
  {
    name: "Prosty kalkulator",
    url: "calculator",
  },
  {
    name: "Generator haseł",
    url: "https://www.youtube.com/",
  },
  {
    name: "Stare portfolio",
    url: "https://blaak1.github.io/",
  },
];

export const outputProjects = dataProjects.map((el) => {
  return (
    <div className="project-child" key={el.name}>
      <div className="project exp-title">
        <h3>{el.name}</h3>
        <Link to={el.url}>Otwórz</Link>
      </div>
    </div>
  );
});
