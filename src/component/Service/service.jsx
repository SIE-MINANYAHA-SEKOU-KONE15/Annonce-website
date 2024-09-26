import React from "react";
import "../../style/style.css";
import Header from "../Header/header";
function Service() {
  return (
    <div className="service-part">
      <Header />
      <div className="content">
        <div className="service">
          <div className="title"> Nos services</div>
          <div className="text">
            Bienvenue sur Mon annonce.com, la plateforme dédiée à faciliter vos
            transactions en ligne. Nous mettons à votre disposition une large
            gamme de services pour vous accompagner dans la publication et la
            gestion de vos annonces.
          </div>
          <div className="publication">
            <h2>1. Publication d'annonces</h2>
            <div className="body">
              Publiez vos annonces en quelques clics ! Que vous soyez
              particulier ou professionnel, Mon annonce.com vous permet de
              proposer vos produits ou services en toute simplicité. Il vous
              suffit de créer un compte, de décrire votre offre, d'ajouter des
              photos et de définir vos prix.
            </div>
          </div>
          <div className="visibilite">
            <h2>2. Visibilité Maximisée</h2>
            <div className="body">
              Nous vous aidons à atteindre le plus grand nombre grâce à une
              interface optimisée pour un large public. Grâce à nos options de
              mise en avant, boostez la visibilité de vos annonces et touchez
              rapidement des acheteurs potentiels.
            </div>
          </div>
          <div className="recherche">
            <h2>3. Recherche Personnalisée</h2>
            <div className="body">
              Trouvez rapidement ce que vous cherchez grâce à notre moteur de
              recherche performant. Filtrez les résultats selon vos critères
              (prix, localisation, catégorie) et accédez aux meilleures offres
              disponibles dans votre région.
            </div>
          </div>
          <div className="support">
            <h2>4. Support Client</h2>
            <div className="body">
              Notre équipe est à votre disposition pour vous assister à chaque
              étape. Que vous ayez besoin d'aide pour publier une annonce, ou
              pour gérer vos transactions, nous sommes là pour répondre à vos
              questions et vous guider.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;
