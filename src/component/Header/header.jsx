import React, { useState } from "react";
import "../../style/style.css";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { CiChat1 } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdAddCall } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [btnIsActive, btnSetIsActive] = useState(false);
  const [btnIsActives, btnSetIsActives] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const handleToggle = () => {
    btnSetIsActive(!btnIsActive);
  };
  const handleToggles = () => {
    btnSetIsActives(!btnIsActives);
  };

  return (
    <div className="header-block">
      <div className="content">
        <div className="header">
          <div className="logo">
            Mon <div className="annonce">Annonce.</div>
            <div className="com">com</div>
          </div>

          <div className="user-part">
            {" "}
            <div className="user-logo">
              <IoIosContact />
            </div>
            <div className="user">
              <a href="/register">Se connecter | S'inscrire</a>
            </div>
          </div>
          <div className="search">
            <div className="publish">
              <a href="/annonce">Publier votre Annonce</a>
            </div>
            <div className="publish-icon">
              <FaPlus />
            </div>
          </div>

          <div className="full" onClick={handleToggle}>
            {btnIsActive ? <FiX /> : <FiAlignJustify />}
          </div>
        </div>
      </div>
      <div className="header-line">
        <div className="content">
          <div className="type-categories">
            <div className="element">
              {" "}
              <div className="all-announce">
                <div className="annonce-icon">
                  <CiChat1 />
                </div>
                <a href="/">Toutes les annonces</a>
              </div>
              <div className="lib-categories">
                {" "}
                <div className="icon-bar">
                  {" "}
                  {isActive ? <FiX /> : <FiAlignJustify />}
                </div>
                <a
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  href=""
                >
                  Toutes les categories
                </a>
              </div>
              <div className="service">
                <div className="service-icon">
                  <RiCustomerService2Fill />
                </div>
                <a href="service">Service</a>
              </div>
              <div className="politique">
                <div className="politique-icon">
                  <MdAddCall />
                </div>
                <a href="confidentialite">Politique de confidentialité</a>
              </div>
              <div className="contact">
                <div className="contact-icon">
                  <MdAddCall />
                </div>
                <a href="contact">Contact</a>
              </div>
            </div>

            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`type-categories-responsive ${
                isActive ? "active" : "desactive"
              }`}
            >
              <div className="first-categorie">
                <a href="">Annonces Immobilières</a>
                <a href="">Annonces d’Emploi</a>
                <a href=""> Annonces de Services</a>
              </div>
              <div className="second-categorie">
                <a href=""> Annonces de Vente </a>
                <a href="">Annonces Événementielles</a>
                <a href="">Annonces de Partenariat et Collaboration</a>
              </div>
              <div className="trooth-categorie">
                <a href=""> Annonces Publicitaires </a>
                <a href=""> Annonces Sociales et Communautaires </a>
                <a href=""> Annonces de Produits Numériques </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* smaall parts */}
      <div className={`smaller-blocks ${btnIsActive ? "active" : "desactive"}`}>
        <div className="user-part">
          {" "}
          <div className="user-logo">
            <IoIosContact />
          </div>
          <div className="user">
            <a href="login">Se connecter | S'inscrire</a>
          </div>
        </div>
        <div className="search">
          <div className="publish">
            <a href="annonce">Publier votre Annonce</a>
          </div>
          <div className="publish-icon">
            <FaPlus />
          </div>
        </div>
        <div className="type-categories">
          <div className="element">
            <div className="lib-categories">
              {" "}
              <div className="icon-bar">
                {" "}
                {isActive ? <FaChevronRight /> : <FaAngleLeft />}
              </div>
              <div onClick={handleToggles} href="">
                Toutes les categories
              </div>
            </div>
            <div className="all-announce">
              <div className="annonce-icon">
                <CiChat1 />
              </div>
              <a href="/">Toutes les annonces</a>
            </div>

            <div className="service">
              <div className="service-icon">
                <RiCustomerService2Fill />
              </div>
              <a href="service">Service</a>
            </div>
            <div className="politique">
              <div className="politique-icon">
                <MdAddCall />
              </div>
              <a href="confidentialite">Politique de confidentialité</a>
            </div>
            <div className="contact">
              <div className="contact-icon">
                <MdAddCall />
              </div>
              <a href="contact">Contact</a>
            </div>
          </div>
        </div>

        <div
          className={`smaller-type-categories-responsive ${
            btnIsActives ? "active" : "desactive"
          }`}
        >
          <div className="smaller-first-categorie">
            <a href="">Annonces Immobilières</a>
            <a href="">Annonces d’Emploi</a>
            <a href=""> Annonces de Services</a>
          </div>
          <div className="smaller-second-categorie">
            <a href=""> Annonces de Vente </a>
            <a href="">Annonces Événementielles</a>
            <a href="">
              Annonces de Partenariat <br /> et Collaboration
            </a>
          </div>
          <div className="smaller-trooth-categorie">
            <a href=""> Annonces Publicitaires </a>
            <a href=""> Annonces Sociales et Communautaires </a>
            <a href=""> Annonces de Produits Numériques </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
