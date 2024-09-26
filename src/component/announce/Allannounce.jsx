import React, { useContext } from "react";
import { AnnouncementContext } from "../../context/AnnouncementContext"; // Import du contexte
import "../../style/style.css";

function Allannounce() {
  // Récupération des annonces depuis le contexte
  const { announcements } = useContext(AnnouncementContext);

  return (
    <div className="all-annonces-parts">
      {/*    <Header /> */}
      <div className="content">
        <div className="all-annonces">
          {announcements.length > 0 ? (
            announcements.map((announcement, index) => (
              <div key={index} className="announce-item">
                <div className="announce-image">
                  <img src={announcement.image} alt="Annonce" />
                </div>
                <div className="annonce-prix">Prix: {announcement.prix}</div>
                <div className="annonce-cate">
                  Catégorie: {announcement.categorie}
                </div>
                <div className="annonce-desc">
                  Description: {announcement.description}
                </div>
              </div>
            ))
          ) : (
            <div>Aucune annonce disponible</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Allannounce;
