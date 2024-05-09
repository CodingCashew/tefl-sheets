import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sheets from "./pages/Sheets";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Sheet from "./pages/Sheet";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="/sheets/:sheetId" element={<Sheet />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
