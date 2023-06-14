import "./PasswordGenerator.css";

export default function PasswordGenerator() {
  function generatePassword() {
    let passwdLenght = Number(document.getElementById("passwordLenght").value);
    let areLowerCaseAllowed = document.getElementById(
      "areLowerCaseAllowed"
    ).checked;
    let areUpperCaseAllowed = document.getElementById(
      "areUpperCaseAllowed"
    ).checked;
    let areSymbolsAllowed =
      document.getElementById("areSymbolsAllowed").checked;
    let areNumbersAllowed =
      document.getElementById("areNumbersAllowed").checked;

    if (
      passwdLenght >= 4 &&
      passwdLenght <= 1000 &&
      areLowerCaseAllowed +
        areNumbersAllowed +
        areSymbolsAllowed +
        areUpperCaseAllowed >
        0
    ) {
      const lowercase = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      const uppercase = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      const symbols = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "-",
        "_",
        "=",
        "+",
        "[",
        "{",
        "}",
        "]",
        "|",
        ";",
        ":",
        "'",
        ",",
        "<",
        ".",
        ">",
        "/",
        "?",
        "`",
        "~",
      ];
      const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      let allowed = [];
      let password = "";

      if (areLowerCaseAllowed) {
        allowed = allowed.concat(lowercase);
      }
      if (areUpperCaseAllowed) {
        allowed = allowed.concat(uppercase);
      }
      if (areSymbolsAllowed) {
        allowed = allowed.concat(symbols);
      }
      if (areNumbersAllowed) {
        allowed = allowed.concat(numbers);
      }
      let max = allowed.length - 1;
      for (let i = 0; i < passwdLenght; i++) {
        let Number = Math.floor(Math.random() * (max - 0 + 1)) + 0;
        password += allowed[Number];
      }
      document.getElementById("result").innerHTML = password;
    } else {
      document.getElementById(
        `result`
      ).innerHTML = `Nieprawidłowa długość hasła lub żadne opcje nie zostały wybrane.`;
    }
  }
  return (
    <div className="main">
      <div className="passwdGenerator">
        <div className="options">
          <input
            type="number"
            id="passwordLenght"
            placeholder="Długość hasła (5 - 1000)"
          />
          <br />
          <form>
            <input type="checkbox" id="areLowerCaseAllowed" />
            <label htmlFor="areLowerCaseAllowed">Małe litery</label>
            <br />
            <input type="checkbox" id="areUpperCaseAllowed" />
            <label htmlFor="areUpperCaseAllowed">Duże litery</label>
            <br />
            <input type="checkbox" id="areSymbolsAllowed" />
            <label htmlFor="areSymbolsAllowed">Symbole</label>
            <br />
            <input type="checkbox" id="areNumbersAllowed" />
            <label htmlFor="areNumbersAllowed">Cyfry</label>
            <br />
          </form>
          <div className="center">
            <button id="button" onClick={generatePassword}>
              Generuj hasło
            </button>
            <textarea
              readOnly
              id="result"
              placeholder="Twoje nowe hasło"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
