import React from "react";
import "../../style/style.css";
import Header from "../Header/header";

function Contact() {
  return (
    <div className="contact-part">
      <Header />
      <div className="content">
        <div className="contact">
          <div className="title">
            <h1>Nous Contacter</h1>
            Vous avez des questions, des suggestions ou besoin d'aide ? L'équipe
            de Mon annonce.com est à votre écoute pour répondre à toutes vos
            demandes. Nous nous engageons à vous fournir un service de qualité
            et à vous accompagner dans l'utilisation de notre plateforme.
          </div>

          <div className="service-client">
            <div className="titre">1. Service Client</div>
            <div className="body">
              Notre équipe est disponible pour répondre à toutes vos questions
              concernant la publication d'annonces, la gestion de votre compte,
              ou toute autre demande liée à nos services. <br />
              <br />
              Email : <a href="">support@monannonce.com</a>
              <br />
              Téléphone : 07 08 23 12 87 (Du lundi au Samedi)
            </div>
          </div>
          <div className="formulaire">
            <div className="titre">2. Formulaire de Contact</div>
            <div className="body">
              Vous pouvez également nous contacter directement via notre
              formulaire de contact. Nous nous engageons à vous répondre dans
              les plus brefs délais. <br />
              <a href="">[Accéder au formulaire]</a>
            </div>
          </div>
          <div className="reseaux">
            <div className="titre">3. Réseaux Sociaux</div>
            <div className="body">
              Suivez-nous sur nos réseaux sociaux pour rester informé des
              dernières nouveautés et offres spéciales : <br />
              <br />
              <li>Facebook : [Mon annonce Facebook]</li>
              <li>Twitter : [Mon annonce Twitter]</li>
              <li>Instagram : [Mon annonce Instagram]</li>
            </div>
          </div>
          <div className="adresse">
            <div className="titre">4. Adresse</div>
            <div className="body">
              Si vous souhaitez nous écrire ou nous rendre visite, voici notre
              adresse : <br />
              <br />
              Mon annonce.com <br />
              123, Rue des Annonces <br />
              75000 Paris, France
            </div>
          </div>
          <div className="end">
            Nous sommes là pour vous aider à chaque étape. N’hésitez pas à nous
            contacter pour toute question ou suggestion.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
