//this compoment is only used for test the hook of fetch and manipulate data of the url (an example)

import React from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";

const TestHook = () => {
  const {data, loading, error } = useFetch('https://api.quotable.io/random',null, {method:"GET", headers: {"Content-Type": "application/json",
  Accept: "application/json",

  }});  
  //!!!!   Faire un useEffect pour eviter d'avoir en sortie des doublons de data   !!!  //
  // console.log({data});
  // console.log({loading});
  // console.log({error});
  
  useEffect(() => {
    console.log(data);
    console.log({loading});
  }, [data]);

  return (
    <div>
      {/* Utilisez ici les données récupérées de l'API */}
      {/* Par exemple, si l'API renvoie un tableau d'objets : */}
      {/*data && data.map((item) => <div key={item.id}>{item.name}</div>)*/}
     
      <div>//TEST ://</div> <br />
      
      {data && ( <div>
          {/* Afficher l'auteur et l'ID */}
          <p>Auteur : {data.author}</p>
          <p>ID : {data._id}</p>
          <p>ctnt : {data.content}</p>
        </div>)}
        <br />
        <p>OR</p> <br />
        {data && ( <div>id ={data._id}</div>)} 
        {data && ( <div> author={data.author}</div>)} 

{/* if data dont load you have possibility to find info to your console and fiond the message "loaging ..." */}
    { loading && <p> Loading ...{loading}</p> }      
    { error && <p>{error}</p> }
  
    
    </div>
  );
};

export default TestHook;
