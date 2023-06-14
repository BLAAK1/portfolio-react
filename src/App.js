import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Layout from "./Components/Layout/Layout";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Calculator from "./Components/Projects/Calculator/Calculator";
import PasswordGenerator from "./Components/Projects/PasswordGenerator/PasswordGenerator";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="/projects/calculator" element={<Calculator />} />
          <Route
            path="/projects/password-generator"
            element={<PasswordGenerator />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
