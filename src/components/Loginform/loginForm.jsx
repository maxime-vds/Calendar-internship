/* !!!for test the api and app !!!
nom user : MyTS
mot de passe : MyTS2023
**/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.scss";


const LoginForm = ({setAuthenticated}) => {
  // const {setAuth} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    usr: "",
    psd: "",
  });
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [response, setResponse] = useState(null); // Nouveau state pour stocker la réponse
  const navigate = useNavigate(); // Hook pour la navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    const urlApi = `https://mytimesheets.be/-api/-exec/-login/?usr=${formData.usr}&psd=${formData.psd}`;

    try {
      // Utilisation d'Axios pour envoyer une requête POST à l'API backend
      const response = await axios.post(urlApi, null, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // Ajoutez cette ligne pour indiquer le type de données attendu
        },
      });

      if (response.status === 200) {
        // Connexion réussie, effectuez les actions nécessaires
        if (response.data.Result === "0" && response.data.error === "404") {
          setErrorMessage(
            "Données de connexion incorrectes. Veuillez réessayer."
          );
        } else {
          console.log(response);
          console.log(response.data);
          // const session = response?.data?.session;
          // setAuth({FormData,session}); //or formData ?
          setSuccess(true);
          setResponse(response);
          setAuthenticated(true);
          localStorage.setItem("authenticated", "true");
        } // Stocke la réponse dans le state
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      // setErrorMessage(
      //   "Une erreur est survenue lors de la connexion."
      // );
    }
  };

  useEffect(() => {
    if (success) {
      const redirectTimeout = setTimeout(() => {
        navigate("/home"); // Rediriger vers la page d'accueil
      }, 7000); // 3000 millisecondes = 3 secondes

      return () => clearTimeout(redirectTimeout); // Nettoyer le timeout en cas de changement
    }
    if (errorMessage) {
      const errorMessage = setTimeout(() => {
        setErrorMessage();
      }, 4000);
      return () => clearTimeout(errorMessage);
    }
  }, [success, errorMessage, navigate]);

  return (
    <>
      {success ? (
        <div className="success-log">
          <h1>Welcome Back !</h1>
          <br />
          <h3 className="success-log-red">
            {" "}
            Last Name : {response.data.display_last_name}
          </h3>
          <h3 className="success-log-red">
            First Name : {response.data.display_first_name}
          </h3>
          <p>Departement: {response.data.departement}</p>

          <p>{/* <Link to="/home">Go to Home</Link> */}</p>
          <br />
          <p>session: {response.data.session}</p>
        </div>
      ) : (
        <div className="log">
          <h2 className="space">Connexion</h2>
          <form onSubmit={handleSubmit} className="opacity">
            <div>
              {/* <label htmlFor="username">Nom d'utilisateur:</label> */}
              <input
                type="text"
                id="username"
                placeholder="User"
                autoComplete="off"
                value={formData.usr}
                onChange={(e) =>
                  setFormData({ ...formData, usr: e.target.value })
                }
                required
              />
            </div>
            <div>
              {/* <label htmlFor="password">Mot de passe:</label> */}
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.psd}
                onChange={(e) =>
                  setFormData({ ...formData, psd: e.target.value })
                }
                required
              />
            </div>

            <div className="checkbox-container">
              <input type="checkbox" id="remember" className="checkbox" />
              <label htmlFor="remember" className="check-text">
                Remember me
              </label>
            </div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <br />
            <button type="submit" className="submit">
              <p>Connect</p>
            </button>
          </form>
          <div className="style"></div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
