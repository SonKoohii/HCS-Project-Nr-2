import "./App.css";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Posts from "./components/Pages/Posts";
import Login from "./components/Pages/Login";
import Navbar from "./components/Pages/Navbar";
import { useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Pages/Footer";
import SightJp from "./components/Pages/SightJp";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SightJp" element={<SightJp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
