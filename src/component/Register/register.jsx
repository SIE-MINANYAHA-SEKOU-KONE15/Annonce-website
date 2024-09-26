import React from "react";
import style from "../../style/style.css";
import Header from "../Header/header.jsx";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("le mot de passe ne correspond pas");
    }
  };
  return (
    <div className="register-block">
      <Header />
      <div className="content">
        <div className="register">
          <div className="container-register">
            <div className="register-title">
              Bienvenue sur Mon annonce.com !
            </div>
            <div className="register-text-1">
              Nous sommes ravis de vous accueillir parmi nous. 🎉
            </div>
            <div className="register-text-2">
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
            </div>
            <div className="register-text-4">
              Merci de faire partie de Mon annonce.com. Nous avons hâte de voir
              ce que vous allez partager !
            </div>
            <div className="register-text-end">
              À très bientôt et bon parcours sur notre plateforme !
            </div>
          </div>
          <div className="register-form">
            <div className="create-account">Creer un compte</div>
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
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />{" "}
              {errorMessage && (
                <div style={{ color: "red" }}>{errorMessage}</div>
              )}
              <button>S'inscrire</button>
            </form>
            <div className="sub">
              <a href="/login">se connecter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
