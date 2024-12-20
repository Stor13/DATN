import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Admin from "./pages/admin/admin";
import OrderView from "./pages/admin/OrderView";
import OrderMng from "./pages/admin/OrderMng";
import AccMng from "./pages/admin/AccMng";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/orderview" element={<OrderView />} />
        <Route path="/ordermng" element={<OrderMng />} />
        <Route path="/accmng" element={<AccMng />} />
      </Routes>
    </Router>
  );
}

export default App;
