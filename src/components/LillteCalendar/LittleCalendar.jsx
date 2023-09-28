
 // for the little calendar 
 import React, { useState } from 'react';
 import "./littlecalendar.scss"
 import { Link } from 'react-router-dom';

 export default function LittleCalendar  ()  {
   const [currentDate, setCurrentDate] = useState(new Date());

   const daysInMonth = (year, month) => {
     return new Date(year, month + 1, 0).getDate();
   };

   const startDayOfMonth = (year, month) => {
     return new Date(year, month, 1).getDay();
   };

   const prevMonth = () => {
     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
   };

   const nextMonth = () => {
     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
   };

   const renderCalendar = () => {
     const year = currentDate.getFullYear();
     const month = currentDate.getMonth();
     const days = daysInMonth(year, month);
     const startDay = startDayOfMonth(year, month);

     const prevMonthDays = startDay === 0 ? 7 : startDay;
     const totalDays = prevMonthDays + days;

     const calendarDays = [];
     let day = 1;

     for (let i = 0; i < 6; i++) {
       const week = [];

       for (let j = 0; j < 7; j++) {
         if (i === 0 && j < prevMonthDays) {
           week.push('');
         } else if (day <= days) {
           week.push(day);
           day++;
         } else {
           week.push('');
         }
       }

       calendarDays.push(week);
     }

     return calendarDays;
   };

   return (
     <div> 
     <div> <Link to="/home" className='close'> X </Link></div> <br />
       <div>
         <button onClick={prevMonth} className='tes'>&lt;</button>
         <span>
           {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
         </span>
         <button onClick={nextMonth} className='tes'>&gt;</button>
       </div>
       <table>
         <thead>
           <tr>
            
           <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
           </tr>
         </thead>
         <tbody>
           {renderCalendar().map((week, index) => (
             <tr key={index}>
               {week.map((day, idx) => (
                 <td key={idx}>{day}</td>
               ))}
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
 }


