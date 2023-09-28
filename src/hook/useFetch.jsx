// useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url, options);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;


// // //old code fro fetch api (but only one option is the get)

// import { useState, useEffect } from "react";
// import axios from "axios";
 
// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url);
//         setData(response.data);
//         setIsLoading(false);

//         //ou
//         // const response = await axios.get(url);
//         // const data = response.data;
//         // setData(data);
//       } catch (error) {
//         console.log(error);
      
//     setError(error); 
//      setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, isLoading, error }; // isLoading, error  (autres parametres)
// };

// export default useFetch;

// // //old code end







// exemple pour afficher data dans un composant

// import React from 'react';
// import useFetch from './useFetch';

// const DisplayData = ({ url }) => {
//   const { data, isLoading, error } = useFetch(url);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {/* Utilisez ici les données récupérées de l'API */}
//       {/* Par exemple, si l'API renvoie un tableau d'objets : */}
//       {data && data.map((item) => <div key={item.id}>{item.name}</div>)}
//     </div>
//   );
// };

// export default DisplayData;
