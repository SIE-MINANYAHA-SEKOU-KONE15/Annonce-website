// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/home.jsx";
import Header from "./component/Header/header.jsx";
import Register from "./component/Register/register.jsx";
import Categories from "./component/Categories/categorie.jsx";
import Login from "./component/Login/login.jsx";
import Announcement from "./component/announce/Announce.jsx";
import { AnnouncementProvider } from "./context/AnnouncementContext.jsx";
import Allannounce from "./component/announce/Allannounce.jsx";
import Confidentialite from "./component/Confidentialite/confidentialite.jsx";
import Contact from "./component/Contact/contact.jsx";
import Service from "./component/Service/service.jsx";
// Importation du fournisseur de contexte

function App() {
  return (
    <AnnouncementProvider>
      {/* Enveloppe toute l'application avec AnnouncementProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categorie" element={<Categories />} />
          <Route path="/all-annonce" element={<Allannounce />} />
          <Route path="/annonce" element={<Announcement />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </AnnouncementProvider>
  );
}

export default App;
