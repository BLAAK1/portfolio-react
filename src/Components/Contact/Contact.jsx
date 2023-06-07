import "./Contact.css";
import facebookIcon from "../../assets/icons/facebook.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import telegramIcon from "../../assets/icons/telegram.svg";
import emailIcon from "../../assets/icons/email.svg";

function Contact() {
  return (
      <div className="contact">
              <div className="telegram contact--card">
                <div className="icon">
                  <img src={telegramIcon} alt="Telegram" />
                </div>
                <div className="info">
                  <a href="https://t.me/Z0skar">Telegram</a>
                </div>
              </div>
              <div className="e-mail contact--card">
                <div className="icon">
                  <img src={emailIcon} alt="Email" />
                </div>
                <div className="info">
                  <a>zegaroskar@outlook.com</a>
                </div>
              </div>
              <div className="linkedin contact--card">
                <div className="icon">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </div>
                <div className="info">
                  <a href="https://www.linkedin.com/in/oskar-zegar-745362239/">Profil LinkedIn</a>
                </div>
              </div>
              <div className="facebook contact--card">
                <div className="icon">
                  <img src={facebookIcon} alt="Facebook" />
                </div>
                <div className="info">
                  <a href="https://www.facebook.com/oskar.zegar.71/">Profil Facebook</a>
                </div>
              </div>
              <div className="github contact--card">
                <div className="icon">
                  <img src={githubIcon} alt="Github" />
                </div>
                <div className="info">
                  <a href="https://github.com/BLAAK1">Profil GitHub</a>
                </div>
              </div>
            </div>
  );
}
export default Contact;