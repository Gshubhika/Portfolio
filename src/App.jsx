import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecruiterProvider } from "./context/RecruiterContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <RecruiterProvider>
      <Router basename="/Portfolio">
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
    </RecruiterProvider>
  );
}

export default App;
