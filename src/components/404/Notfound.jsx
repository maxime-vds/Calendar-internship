import './notfound.scss'
import { Link } from 'react-router-dom';

function PageNotFound() {
    return ( 
        <div>
            <p>404 Page not found </p> <br />
            <p>test test</p><br /> <br />
           <Link to="/home" className='color'> <button> Back to home ?</button></Link> 
        </div>
     );
}

export default PageNotFound;