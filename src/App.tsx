import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import SharedPage from "./pages/SharedPage";
import SiginPage from "./pages/SiginPage";
import SignupPage from "./pages/SignupPage";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<HomePage />} />
            <Route path="shared" element={<SharedPage />} />
          </Route>
          <Route path="/signin" element={<SiginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;