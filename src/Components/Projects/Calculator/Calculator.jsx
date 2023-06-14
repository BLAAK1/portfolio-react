import "./Calculator.css";
import { useState } from "react";

let str = "";
export default function Calculator() {
  const [result, setResult] = useState("0");

  function handleClick(e) {
    if (
      [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "*",
        "/",
        "+",
        "-",
        "+",
        ".",
      ].includes(e.target.innerText)
    ) {
      str += e.target.innerText;
      setResult(str);
    } else if (["√", "C", "←", "="].includes(e.target.textContent)) {
      switch (e.target.textContent) {
        case "√":
          str = eval(Math.sqrt(str)).toFixed(3);
          setResult(str);
          break;
        case "C":
          str = "";
          setResult(str);
          break;
        case "←":
          str = str.slice(0, -1);
          setResult(str);
          break;
        case "=":
          str = eval(str).toFixed(3);
          setResult(str);
          break;
        default:
          break;
      }
    }
  }
  return (
    <div className="main-app">
      <div className="parent">
        <div className="output">
          <div className="result div1">{result}</div>
        </div>
        <div className="btn">
          <div className="button" onClick={handleClick}></div>
          <div className="button root" onClick={handleClick}>
            √
          </div>
          <div className="button clear" onClick={handleClick}>
            C
          </div>
          <div className="button del" onClick={handleClick}>
            ←
          </div>
        </div>
        <div className="btn">
          <div className="button number" onClick={handleClick}>
            7
          </div>
          <div className="button number" onClick={handleClick}>
            8
          </div>
          <div className="button number" onClick={handleClick}>
            9
          </div>
          <div className="button operation" onClick={handleClick}>
            *
          </div>
        </div>
        <div className="btn">
          <div className="button number" onClick={handleClick}>
            4
          </div>
          <div className="button number" onClick={handleClick}>
            5
          </div>
          <div className="button number" onClick={handleClick}>
            6
          </div>
          <div className="button operation" onClick={handleClick}>
            /
          </div>
        </div>
        <div className="btn">
          <div className="button number" onClick={handleClick}>
            1
          </div>
          <div className="button number" onClick={handleClick}>
            2
          </div>
          <div className="button number" onClick={handleClick}>
            3
          </div>
          <div className="button operation" onClick={handleClick}>
            +
          </div>
        </div>
        <div className="btn">
          <div className="button number" onClick={handleClick}>
            0
          </div>
          <div className="button number" onClick={handleClick}>
            .
          </div>
          <div className="button div16" onClick={handleClick}>
            =
          </div>
          <div className="button operation" onClick={handleClick}>
            -
          </div>
        </div>
      </div>
    </div>
  );
}
