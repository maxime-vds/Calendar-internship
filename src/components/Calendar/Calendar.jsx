 import './calendar.scss'
 import { Link } from "react-router-dom";

 export default function Calendar () {
     return (
      <div className='calendar-bg'>
      <h1 className='color'>calendar</h1>
      <button className='btn-cal'><Link to="/selectjobs"> add a timesheet </Link></button>
      </div>
      
         
       );
 }
