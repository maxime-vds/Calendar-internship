# Internal Calendar 

![Project Image](https://github.com/maxime-vds/Internal-Calendar/blob/main/Internal-calendar/Capture%20d'%C3%A9cran%202023-09-28%20111258.png?raw=true)


## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [License](#license)

---
## Overview
The Internal Calendar Project is a web application built with React.js and styled using SASS. It features a secure login system connected to an API. Users must log in to access the calendar, and the page only refreshes when the user logs out (token stored in memory).

This project is not completely responsive.

**Screenshots:** 

---
## Features

- Secure login system connected to an API.
- Announcement of a wrong/incorrect password.
- Access to the calendar is restricted to authenticated users.
- Page refresh only occurs upon user logout (token stored in memory).

---
## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development environment.
- Clone this repository to your local machine.

---
## Getting Started

Follow these steps to get your project up and running:

1. **Install Dependencies:**
     npm install
2. **Configure Environment Variables:**
Create a .env file in the root of your project and add necessary environment variables like API URLs, API keys, etc.
4. **Start the Development Server:**
    npm start 
3.**Access the Application:** 
Open your browser and visit http://localhost:3000 to access the Radom Generator.

---
## Project structure 

- `/src`: Contains the source code for the ReactJS frontend.
  - `/assets`: Reusable Images.
  - `/components`: Reusable React components.
   - `/styles`: SASS stylesheets.

## Usage
To use the Internal Calendar:

* Log in with your credentials.
* Access and manage your calendar events.
* The page only refreshes if you log out (token stored in memory).

## License
This project is licensed under the MIT License. 


 
