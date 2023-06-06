import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Layout from "./Components/Layout/Layout";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
