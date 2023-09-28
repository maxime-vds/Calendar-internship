import { Link } from "react-router-dom";
import "./selectjobs.scss"

export default function SelectJobs() {
    return ( 
       <>
       {/* <div className="test">
        <div>The Nav with the tile : </div>
        <li>my job</li>
        <li>search</li>
        <li>extra</li>
        </div> */}
         <nav className="nav-jobs">
          <div className="nav-item"> <Link to="/searchJob" className='color'>Search By Job</Link></div>
          <div className="nav-item"> <Link to="/searchbyssclient" className='color'>Search by SUB Client</Link></div>
          <div className="nav-item"><Link to="/extra" className='color'>Extra</Link></div>
          <div className="nav-item"><Link to="/home" className='color'> X</Link></div>
        </nav>
       </>
     );
}
