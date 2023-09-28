import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"; //route for the app
import { useEffect, useState, } from "react";

//import of compoments 
import LoginForm from "./components/Loginform/loginForm";
import Home from "./components/Home/Home";
import SelectJobs from "./components/SelectJobs/ItemJobs/SelectJobs";
import LittleCalendar from "./components/LillteCalendar/LittleCalendar";
import Profile from "./components/User/User";
import Extra from "./components/SelectJobs/ItemJobs/Extra/Extra";
import SearchBySsClient from "./components/SelectJobs/ItemJobs/SearchBySsClient/SearchBySsClient";
import SearchJob from "./components/SelectJobs/ItemJobs/SearchJob/SearchJob";
import FormCalendar from "./components/FormCalendar/FormCalendar";

//import the style for the app.jsx
import "./App.scss";
import PageNotFound from "./components/404/Notfound";

//protege les routes du frontend (pas co pas d'accès possible)
const PrivateRoute = ({ element, authenticated }) => {
  const location = useLocation();

  if (authenticated) {
    return element;
  } else {
    return <Navigate to="/" state={{ from: location }} />;
  }
};

function App() {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") === "true");

  useEffect(() => {
    if (authenticated) {
      localStorage.setItem("authenticated", "true");
    } else {
      localStorage.removeItem("authenticated");
    }
  }, [authenticated]);

  //the jsx with compoment and route of app
  return (
    <BrowserRouter>
      <Routes>
       <Route
            path="/"
           element={<LoginForm setAuthenticated={setAuthenticated} />}
          />
          <Route path="/home" element={<PrivateRoute element={<Home setAuthenticated={setAuthenticated} />} authenticated={authenticated} />} />
         {/* <Route path="/calendar" element={Calendar}  props inside (api ? )/> */}
         <Route path="/littlecalendar" element={<PrivateRoute element={<LittleCalendar />} authenticated={authenticated}/>}  />
         <Route path="/formcalendar" element={<PrivateRoute element={<FormCalendar />} authenticated={authenticated}/>}  />
         <Route path="/selectjobs" element={<PrivateRoute element={<SelectJobs/>} authenticated={authenticated}/>}/>
         <Route path="/profile" element={<PrivateRoute element={<Profile setAuthenticated={setAuthenticated} />} authenticated={authenticated}/>}  />
         <Route path="/searchjob" element={<PrivateRoute element={<SearchJob />} authenticated={authenticated}/>}/>
         <Route path="/searchbyssclient" element={<PrivateRoute element={<SearchBySsClient />} authenticated={authenticated}/>} />
         <Route path="/extra" element={<PrivateRoute element={<Extra />} authenticated={authenticated}/>} />
        
         {/* < Route path="*" element={<PageNotFound/>} /> */}
         <Route path="*" element={<PrivateRoute element={<PageNotFound />} authenticated={authenticated}/>} />
        
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;





//old version of code for app -> is route with note protection acces in frontend

// import { BrowserRouter, Routes, Route } from "react-router-dom"; //route for the app

// //import of compoments
// import LoginForm from "./components/Loginform/loginForm";
// import Home from "./components/Home/Home";
// import SelectJobs from "./components/SelectJobs/ItemJobs/SelectJobs";
// import LittleCalendar from "./components/LillteCalendar/LittleCalendar";
// import Profile from "./components/User/User";
// import Extra from "./components/SelectJobs/ItemJobs/Extra/Extra";
// import SearchBySsClient from "./components/SelectJobs/ItemJobs/SearchBySsClient/SearchBySsClient";
// import SearchJob from "./components/SelectJobs/ItemJobs/SearchJob/SearchJob";
// import FormCalendar from "./components/FormCalendar/FormCalendar";

// //import the style for the app.jsx
// import "./App.scss";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<LoginForm />} />
//         <Route path="/home" element={<Home />} />
//         {/* <Route path="/calendar" element={Calendar}  props inside (api ? )/> */}
//         <Route path="/littlecalendar" element={<LittleCalendar />} />
//         <Route path="/formcalendar" element={<FormCalendar />} />
//         <Route path="/Selectjobs" element={<SelectJobs />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/searchjob" element={<SearchJob />} />
//         <Route path="/serachbyssclient" element={<SearchBySsClient />} />
//         <Route path="/extra" element={<Extra />} />

//         {/* route for test, at the end delete that  */}

//         {/* <Route path="/logintest" element={<LoginTest/>} /> */}

//         {/* end of test */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



