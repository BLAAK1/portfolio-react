const dataProjects = [
  {
    name: "Prosty kalkulator",
    url: "https://www.google.com/",
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
    <div className="project-child">
      <div className="project exp-title">
        <h3>{el.name}</h3>
        <a href={el.url} target="_blank" rel="noreferrer noopener">
          Otwórz
        </a>
      </div>
    </div>
  );
});
