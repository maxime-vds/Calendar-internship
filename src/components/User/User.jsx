import "./user.scss"
import { Link, useNavigate } from 'react-router-dom';

export default function Profile({ setAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Réinitialisez l'état d'authentification dans votre composant
    setAuthenticated(false);

    // Redirigez l'utilisateur vers la page de connexion
    navigate("/");
  };
  
  return (
    <>
  
      <div className="hh">Do you want to LOG OUT ?</div> <br />
      <Link to="/home" className='close'> NO </Link>
      
      <div> <br />
      <button onClick={handleLogout} className="btn"> Log out ! </button>
      </div>
    </>
  );
}


