import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainBackground from "./components/MainBackground.jsx";
import TicketCreatedPage from "./components/TicketCreatedPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainBackground />} />
        <Route path="/ticket" element={<TicketCreatedPage />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* เปลี่ยนเส้นทางหากไม่มีหน้าที่ตรงกัน */}
      </Routes>
    </Router>
  );
};

export default App;
