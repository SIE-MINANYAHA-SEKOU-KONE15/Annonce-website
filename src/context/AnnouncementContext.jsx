import React, { createContext, useState } from "react";

// Création du contexte
export const AnnouncementContext = createContext();

// Fournisseur du contexte
export const AnnouncementProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState([]);

  // Fonction pour ajouter une annonce
  const addAnnouncement = (announcement) => {
    setAnnouncements((prevAnnouncements) => [
      ...prevAnnouncements,
      announcement,
    ]);
  };

  return (
    <AnnouncementContext.Provider value={{ announcements, addAnnouncement }}>
      {children}
    </AnnouncementContext.Provider>
  );
};
