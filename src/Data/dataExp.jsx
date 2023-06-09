const dataJobs = [
  {
    id: 0,
    from: "06.2023",
    to: "07.2023",
    name: "Praktykant (120 godzin)",
    employer: "Gamma Sp. z o.o.",
    city: "Zawierzbie",
    description: (
      <p>
        Praktyka studencka, umiejętności które nabyłem:
        <br /> -Obróbka grafiki rastrowej
        <br /> -Proste modelowanie 3D
        <br /> -Tworzenie stron przy użyciu biblioteki React.js
      </p>
    ),
  },
  {
    id: 1,
    from: "05.2020",
    to: "06.2020",
    name: "Praktykant",
    employer: `PPHU "Fenix " Kasperek Ryszard`,
    city: "Brzeźnica",
    description: (
      <p>
        -Montaż i eksploatacja sieci komputerowej
        <br />
        -Serwisowanie komputerów
      </p>
    ),
  },
  {
    id: 2,
    from: "10.2019",
    to: "11.2019",
    name: "Praktykant",
    employer: `PPHU "Fenix " Kasperek Ryszard`,
    city: "Brzeźnica",
    description: (
      <p>
        Najważniejsze zadania:
        <br /> -składanie komputerów
        <br /> -diagnostyka uszkodzeń komputerów i laptopów
        <br /> -wymiana podzespołów
        <br /> -instalowanie oprogramowania
        <br /> -pomoc w wyborze odpowiednich komponentów
      </p>
    ),
  },
];
const dataEdu = [
  {
    from: "10.2022",
    to: "Obecnie",
    subject: "Informatyka",
    type: "Studia inżynierskie",
    name: "Wyższa Szkoła Informatyki i Zarządzania",
    city: "Rzeszów",
  },
  {
    from: "09.2018",
    to: "04.2022",
    subject: "Technik-informatyk",
    type: "Szkoła średnia",
    name: "Technikum nr. 2",
    city: "Ropczyce",
  },
];

const dataCert = [
  {
    type: "Certyfikat",
    when: "Maj 2020",
    title: "NDG Linux Essentials",
    from: "Cisco",
  },
  {
    type: "Kwalifikacja",
    when: "Wrzesień 2021",
    title: "EE.08",
    from: "OKE",
    description:
      "Montaż i eskploatacja systemów komputerowych, urządzeń peryferyjnych i sieci",
  },
  {
    type: "Kwalifikacja",
    when: "Marzec 2022",
    title: "EE.09",
    from: "OKE",
    description:
      "Programowanie, tworzenie i administrowanie stronami internetowymi i bazami danych",
  },
];
const outputJobs = dataJobs.map((el) => {
  return (
    <div className="exp-child" key={el.name + el.id}>
      <div className="when">
        <p>
          Od: {el.from} Do: {el.to}
        </p>
      </div>
      <div className="work">
        <h3>{el.name}</h3>
        <p>
          {el.employer}, {el.city}
        </p>
        {el.description}
      </div>
    </div>
  );
});
const outputEdu = dataEdu.map((el) => {
  return (
    <div className="exp-child" key={el.name}>
      <div className="when">
        <p>
          Od: {el.from} Do: {el.to}
        </p>
      </div>
      <div className="work">
        <h3>
          {el.subject}, {el.type}
        </h3>
        <p>
          {el.name}, {el.city}
        </p>
      </div>
    </div>
  );
});
const outputCert = dataCert.map((el) => {
  return (
    <div className="exp-child" key={el.title}>
      <div className="cert">
        <div className="cert-child">
          <h3>
            {el.type} {el.title}
          </h3>
          <p>{el.when}</p>
          <p>Wydane przez: {el.from}</p>
        </div>
        {el.description === undefined ? "" : <p>{el.description}</p>}
      </div>
    </div>
  );
});

export { outputJobs, outputEdu, outputCert };
