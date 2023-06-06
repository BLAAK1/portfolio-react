import Navbar from "../Navbar/Navbar";
import Aboutme from "./AboutMe/AboutMe";

export default function Layout({ child }) {
  return (
    <div className="app">
      <Navbar />
      <Aboutme />
      {child}
    </div>
  );
}
