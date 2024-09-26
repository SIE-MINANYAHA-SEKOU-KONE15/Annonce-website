import React from "react";
import Header from "../Header/header";
import "../../style/style.css";

function Confidentialite() {
  return (
    <div className="confidentialite ">
      <Header />
      <div className="content ">
        <div className="confidentialite-part">
          <div className="polit">
            Politique de confidentialité de Mon annonce.com
          </div>
          <div className="title">
            Chez Mon annonce.com, nous nous engageons à protéger la
            confidentialité de vos informations personnelles. Cette politique de
            confidentialité explique comment nous collectons, utilisons, et
            protégeons vos informations lorsque vous utilisez notre site.
          </div>
          <div className="body">
            <div className="information">
              <div className="titre">1. Informations que nous collectons</div>
              Lorsque vous utilisez notre site, nous pouvons collecter les
              informations suivantes : <br /> <br />
              Informations personnelles : nom, adresse e-mail, numéro de
              téléphone, et toute autre information que vous fournissez
              volontairement lors de la création de votre compte ou de la
              publication d'une annonce. <br /> Informations liées à l'annonce :
              description, images, et autres détails relatifs à l'annonce que
              vous publiez.
              <br /> Données techniques : adresse IP, type de navigateur,
              système d'exploitation, pages visitées, et autres informations sur
              votre utilisation de notre site (via des cookies ou autres
              technologies similaires).
            </div>
            <div className="utilisation">
              <div className="titre">2. Utilisation de vos informations</div>
              Nous utilisons vos informations pour : <br />
              <br />
              <li> Créer et gérer votre compte sur notre site.</li>
              <li> Publier vos annonces sur Mon annonce.com.</li>
              <li>Répondre à vos questions, demandes ou réclamations.</li>
              <li>
                Vous envoyer des notifications ou des mises à jour concernant
                votre compte ou vos annonces.
              </li>
              <li>
                Améliorer l'expérience utilisateur et la performance de notre
                site grâce à l'analyse des données.
              </li>
              <li>
                Assurer la sécurité de notre site et prévenir les fraudes.{" "}
              </li>
            </div>
            <div className="partage">
              <div className="titre">
                3. Partage de vos informations <br />
              </div>
              Nous ne partageons pas vos informations personnelles avec des
              tiers sauf dans les cas suivants : <br /> <br />
              <li>
                {" "}
                Fournisseurs de services tiers : nous pouvons partager vos
                informations avec des prestataires externes qui nous aident à
                exploiter notre site (par exemple, hébergement web, services de
                paiement, etc.). Ces prestataires sont tenus de protéger vos
                informations conformément à cette politique.
              </li>
              <li>
                Obligations légales : nous pouvons divulguer vos informations si
                la loi l'exige ou si nous estimons que cela est nécessaire pour
                protéger nos droits, votre sécurité, ou celle d'autrui.
              </li>
            </div>
            <div className="conversation">
              <div className="titre">4. Conservation des données</div>
              Nous conserverons vos informations personnelles aussi longtemps
              que nécessaire pour atteindre les objectifs décrits dans cette
              politique, ou pour nous conformer aux exigences légales. Vous
              pouvez demander la suppression de vos données à tout moment (voir
              section 7).
            </div>
            <div className="securité">
              <div className="titre">5. Sécurité des informations</div>
              Nous mettons en œuvre des mesures de sécurité raisonnables pour
              protéger vos informations personnelles contre tout accès non
              autorisé, modification, divulgation ou destruction. Cependant,
              aucune transmission de données sur Internet n'est totalement
              sécurisée, et nous ne pouvons garantir la sécurité absolue de vos
              informations.
            </div>
            <div className="cookies">
              <div className="titre">6. Cookies et technologies similaires</div>
              Notre site utilise des cookies pour collecter des informations sur
              votre utilisation de Mon annonce.com et améliorer votre
              expérience. Les cookies sont de petits fichiers stockés sur votre
              appareil lorsque vous visitez un site. Vous pouvez configurer
              votre navigateur pour refuser les cookies, mais cela pourrait
              affecter le bon fonctionnement de certaines fonctionnalités du
              site
            </div>
            <div className="droits">
              <div className="titre">7. Vos droits</div>Vous disposez des droits
              suivants concernant vos informations personnelles : <br />
              <br />{" "}
              <li>
                Accès et rectification : vous pouvez accéder à vos informations
                personnelles et demander leur correction ou mise à jour.
              </li>
              <li>
                {" "}
                Suppression : vous pouvez demander la suppression de vos
                informations personnelles, sauf si nous devons les conserver
                pour des raisons légales.
              </li>
              <li>
                {" "}
                Opposition et restriction : vous pouvez vous opposer ou demander
                la limitation du traitement de vos informations dans certaines
                situations.
              </li>
              <li>
                {" "}
                Portabilité des données : dans certaines circonstances, vous
                pouvez demander à recevoir une copie des données que vous nous
                avez fournies sous un format structuré. Pour exercer vos droits,
                veuillez nous contacter à l'adresse e-mail indiquée dans la
                section 9.
              </li>
            </div>
            <div className="modification">
              <div className="titre">8. Modifications de cette politique</div>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Toute modification sera publiée sur
              cette page, et nous vous informerons par e-mail ou par une
              notification sur le site en cas de changements importants.
            </div>
            <div className="contact">
              <div className="titre"> 9. Contact</div>
              Si vous avez des questions ou préoccupations concernant cette
              politique de confidentialité ou la manière dont vos données sont
              traitées, vous pouvez nous contacter à :
            </div>
            <div className="end">
              Mon annonce.com E-mail : [votre email de contact]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Confidentialite;
