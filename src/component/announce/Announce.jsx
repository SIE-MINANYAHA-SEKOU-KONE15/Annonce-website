import React, { useState, useContext } from "react";
import Header from "../Header/header";
import { AnnouncementContext } from "../../context/AnnouncementContext";
import Allannounce from "./Allannounce";
import "../../style/style.css";

function Announcement() {
  // Récupération de la fonction `addAnnouncement` depuis le contexte
  const { addAnnouncement } = useContext(AnnouncementContext);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [prix, setPrix] = useState("");
  const [categorie, setCategorie] = useState("");
  const [description, setDescription] = useState("");

  // Gestion de l'ajout d'image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!prix || !categorie || !description) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    // Crée une nouvelle annonce à partir des valeurs du formulaire
    const newAnnouncement = {
      image: imagePreview, // Utilisation de l'URL de l'image
      prix,
      categorie,
      description,
    };

    // Ajoute l'annonce dans le contexte
    addAnnouncement(newAnnouncement);

    // Réinitialise les champs du formulaire
    setImage(null);
    setImagePreview("");
    setPrix("");
    setCategorie("");
    setDescription("");
  };

  return (
    <div className="Annonce-part">
      <Header />
      <div className="content">
        <div className="announcement">
          <div className="add-announce">Ajouter une Annonce</div>
          <div className="images">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Aperçu de l'image"
                className="image-preview"
              />
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="image">
              <label>Ajouter une Image : </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div className="prix">
              <input
                type="number"
                placeholder="Prix"
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
                required
              />
            </div>

            <div className="categorie">
              <label>Catégorie :</label>
              <select
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
                required
              >
                <option value="">Sélectionnez une catégorie</option>
                <option value="Immobilier">Immobilières</option>
                <option value="Emploi">Emploi</option>
                <option value="Services">Services</option>
                <option value="Vente">Vente</option>
                <option value="Événementielles">Événementielles</option>
                <option value="Partenariat">
                  Partenariat et Collaboration
                </option>
                <option value="Publicitaires">Publicitaires</option>
                <option value="Sociales">Sociales et Communautaires</option>
                <option value="Produits">Produits Numériques</option>
              </select>
            </div>

            <div className="description">
              <input
                type="text"
                placeholder="Description de l'annonce"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>

            <button type="submit">Ajouter</button>
          </form>
        </div>
      </div>
      <Allannounce />
    </div>
  );
}

export default Announcement;
