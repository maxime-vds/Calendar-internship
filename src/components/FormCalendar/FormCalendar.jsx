import "./formcalendar.scss";
import { Link } from "react-router-dom";

export default function FormCalendar() {
  return (
    <>
      {/* <div className='form-test'>
     <h1>Form for calendar</h1> <br />
     
     <button><Link to="/home"> save and back to Homepage </Link></button>
     </div> */}

      <div className="form-test">
        <h1>Form for calendar</h1> <br /> <br />
        <form action="submit">
          <div>
            <label htmlFor="username">name of the job</label>
            <input type="text" id="text" />
          </div>
          <div>
            <label htmlFor="password"> schedule of time</label>
            <input type="text" id="text" />
          </div>
          <br />
          <button>
            <Link to="/home"> save </Link>
          </button>
          <br /> <br />
          <button>
            <Link to="/home"> cancel</Link>
          </button>
        </form>
      </div>
    </>
  );
}
