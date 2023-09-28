// exemple pour fetch et manipuler la data
//exemple data api json
// JSON file
// {"error": "200", "User_ID": “13”,"session": “7890DF4”, 
// “display_first_name": “DAVID”, 
// "display_last_name": “COCO”} 
import React, { useEffect, useState } from 'react';

function MonComposant() {
  const [userData, setUserData] = useState(null); // Le state pour stocker les données

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_DE_TON_API');
        const userData = await response.json(); // Changer "data" en "userData"
        setUserData(userData); // Met à jour le state avec les données de l'API
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  // Affiche un message de chargement si les données sont en cours de récupération
  if (!userData) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      <h2>Nom : {userData.display_first_name}</h2>
      <h2>Prénom : {userData.display_last_name}</h2>
      <p>User ID : {userData.User_ID}</p>
      <p>Session : {userData.session}</p>
    </div>
  );
}

//exemple pour push info to backend (new user exemple) 
<>
import React, { useState } from 'react';

function MonComposant() {
  const [newAccount, setNewAccount] = useState({
    display_first_name: '',
    display_last_name: '',
    // Ajoute d'autres propriétés du nouveau compte ici
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('URL_DE_TON_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAccount),
      });

      // Traiter la réponse de l'API en fonction de ce que tu attends en retour
      // Par exemple, si l'API renvoie le nouveau compte créé avec un ID, tu peux le traiter ici
      const data = await response.json();
      console.log('Nouveau compte créé :', data);

      // Réinitialiser le formulaire après la création réussie
      setNewAccount({
        display_first_name: '',
        display_last_name: '',
        // Réinitialise les autres propriétés du nouveau compte ici
      });
    } catch (error) {
      console.error('Erreur lors de la création du nouveau compte :', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Prénom:
          <input
            type="text"
            name="display_first_name"
            value={newAccount.display_first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Nom:
          <input
            type="text"
            name="display_last_name"
            value={newAccount.display_last_name}
            onChange={handleChange}
          />
        </label>
        {/* Ajoute d'autres champs pour d'autres propriétés du nouveau compte */}
        <button type="submit">Créer un nouveau compte</button>
      </form>
    </div>
  );
}
</>



