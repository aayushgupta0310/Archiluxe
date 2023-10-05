import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HOME_URL, SEARCH_BY_IMAGE_URL } from "./routes";
import Home from "./components/Home";
import SearchByImage from "./components/SearchByImage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={HOME_URL}
          exact
          element={
            <Home/>
          }

        />
        <Route
          path={SEARCH_BY_IMAGE_URL}
          exact
          element={
            <SearchByImage/>
          }

        />
      </Routes>
    </Router>
  );
}

export default App;
