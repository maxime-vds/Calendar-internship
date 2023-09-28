import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import AuthContext from '../../context/AuthProvider'

const LoginTest = () => {
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
      }, 3000); // 3000 millisecondes = 3 secondes

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
          <h3 className="success-log-red"> Last Name : {response.data.display_last_name}</h3>
          <h3 className="success-log-red">First Name : {response.data.display_first_name}</h3>
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
              <label htmlFor="username">Nom d'utilisateur:</label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                value={formData.usr}
                onChange={(e) =>
                  setFormData({ ...formData, usr: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="password">Mot de passe:</label>
              <input
                type="password"
                id="password"
                value={formData.psd}
                onChange={(e) =>
                  setFormData({ ...formData, psd: e.target.value })
                }
                required
              />
            </div>
            <button type="submit" className="submit">
              Se connecter
            </button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </form>
          <div className="style"></div>
        </div>
      )}
    </>
  );
};
export default LoginTest;



//the same code but the difference is on the level of the usestate () , the old use two line for the usestate.

// import React, { useState } from "react";
// import axios from "axios";

// const LoginTest = () => {
//   const [usr, setUsr] = useState("");
//   const [psd, setPsd] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const credentials = {
//       usr: usr,
//       psd: psd,
//     };
//     const urlApi = `https://mytimesheets.be/-api/-exec/-login/?usr=${usr}&psd=${psd}`;

//     try {
//       // Utilisation d'Axios pour envoyer une requête POST à l'API backend
//       const response = await axios.post(urlApi, credentials, {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json", // Ajoutez cette ligne pour indiquer le type de données attendu
//         },
//       });

//       if (response.status === 200) {
//         // Connexion réussie, effectuez les actions nécessaires
//         console.log(response);
//         console.log(response.data);
//       } else {
//         setErrorMessage(response.data.message);
//       }
//     } catch (error) {
//       console.error("Erreur lors de la connexion:", error);
//       setErrorMessage("Une erreur est survenue lors de la connexion.");
//     }
//   };

//   return (
//     <div>
//       <h2>Connexion</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Nom d'utilisateur:</label>
//           <input
//             type="text"
//             id="username"
//             value={usr}
//             onChange={(e) => setUsr(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Mot de passe:</label>
//           <input
//             type="password"
//             id="password"
//             value={psd}
//             onChange={(e) => setPsd(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Se connecter</button>
//         {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//       </form>
//     </div>
//   );
// };

// export default LoginTest;
