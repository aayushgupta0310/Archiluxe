import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AI_RECONIZATION_URL, HOME_URL, SEARCH_BY_IMAGE_URL } from "./routes";
import Home from "./components/Home";
import SearchByImage from "./components/SearchByImage";
import AiRecognization from "./components/Ai-recognization";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME_URL} exact element={<Home />} />
        <Route path={SEARCH_BY_IMAGE_URL} element={<SearchByImage />} />
        <Route path={AI_RECONIZATION_URL} element={<AiRecognization />} />
      </Routes>
    </Router>
  );
}

export default App;
