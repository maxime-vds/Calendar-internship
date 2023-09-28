import './nav.scss'
import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
      <>
        <nav className="navigation">
          <div className="nav-item"> horloge 00h00</div>
          <div className="nav-item"> <Link to="/LittleCalendar" className='color'> 27 July</Link></div>
          
          <div className="nav-item"><Link to="/profile" className='color'> Log out</Link></div>
          <div className="nav-item"><Link to="/Selectjobs" className='color'>*** jobs</Link> </div>
          

        </nav>
      </>
    );
}

 