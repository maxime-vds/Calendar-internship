import { Link } from "react-router-dom";
import "./extra.scss";
import useFetch from "../../../../hook/useFetch";
import { useEffect } from "react";


export default function Extra() {
const {data} = useFetch(`https://mytimesheets.be/-api/-exec/-extras/default.lasso?s=B233AD5813e0f17087WK66A18910&usr_id=248`,null, {method:"POST", headers: {"Content-Type": "application/json",
Accept: "application/json",

}});  


useEffect(() => {
  console.log(data);
 
}, [data]);

    return (
        <>
        <div>Extra select Jobs</div>
        <div>{data} data</div>

        <button><Link to="/formcalendar">to formcalendar</Link></button>
        
        
        </>
      );
}
