import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecruiterProvider } from "./context/RecruiterContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import GreetingOverlay from "./components/GreetingOverlay";

function App() {
  const [greet, setGreet] = useState(false);
  return (
    <RecruiterProvider>
      <Router basename="/Portfolio">
        <div className="app-container">
          <Navbar onGreetClick={() => setGreet(true)}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
          <GreetingOverlay
            show={greet}
            duration={4}
            onComplete={() => setGreet(false)}
          />
        </div>
      </Router>
    </RecruiterProvider>
  );
}

export default App;
