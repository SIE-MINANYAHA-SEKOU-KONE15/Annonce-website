import React from "react";
import style from "../../style/style.css";
import Header from "../Header/header.jsx";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";

function Login() {
  return (
    <div className="login-block">
      <Header />
      <div className="content">
        <div className="login">
          <div className="login-form">
            <div className="create-account">Se Connecter</div>
            <div className="create-account-logo">
              <div className="facebook">
                <CgFacebook />
              </div>
              <div className="google">
                <FcGoogle />
              </div>
              <div className="linkedin">
                <FaLinkedinIn />
              </div>
            </div>
            <div className="create-account-message">
              Ou utiliser votre email pour vous inscrire
            </div>
            <form action="">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <button>Se connecter</button>
            </form>
            <div className="sub">
              <a href="/register">S'inscrire</a>
            </div>
          </div>
          <div className="container-login">
            <div className="login-title">Bienvenue sur Mon annonce.com !</div>
            <div className="login-text-1">
              Nous sommes ravis de vous accueillir parmi nous. 🎉
            </div>
            {/*  <div className="register-text-2">
              Vous venez de rejoindre une communauté dynamique où vous pouvez
              découvrir et publier des annonces, échanger avec d’autres membres,
              et bien plus encore. Votre inscription est le premier pas vers une
              expérience enrichissante.
            </div>
            <div className="register-text-3">
              Pour commencer, nous vous invitons à personnaliser votre profil et
              à explorer les différentes fonctionnalités de notre site. Si vous
              avez des questions ou besoin d’assistance, notre équipe est là
              pour vous aider.
            </div> */}
            <div className="login-text-4">
              Merci de faire partie de Mon annonce.com. Nous avons hâte de voir
              ce que vous allez partager !
            </div>
            <div className="login-text-end">
              À très bientôt et bon parcours sur notre plateforme !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
