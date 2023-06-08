import "./Experience.css";
import { outputJobs, outputEdu, outputCert } from "../../Data/dataExp";

export default function Experience() {
  return (
    <>
      <div className="expierience">
        <div className="exp-title">
          <h2>Doświadczenie zawodowe</h2>
          {outputJobs}
        </div>
        <div className="exp-jobs"></div>
      </div>
      <div className="expierience">
        <div className="exp-title">
          <h2>Wykształcenie</h2>
          {outputEdu}
        </div>
        <div className="edu-steps"></div>
      </div>
      <div className="expierience">
        <div className="exp-title">
          <h2>Certyfikaty</h2>
          {outputCert}
        </div>
        <div className="certificates"></div>
      </div>
    </>
  );
}
