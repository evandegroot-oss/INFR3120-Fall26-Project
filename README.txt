# Task Management Website

Course: INFR3120 – Web and Script Programming  
Project: INFR3120 Fall 2026 Project  
Group Members: Evan, Kieron, Marco

## Group Information

Evan DeGroot - 101018587

Kieron Edwards - 101007270

Marco Ye - 100974472

## Project Description

The Task Management Website is a web application designed to help users create and organize tasks.

The app displays created tasks in a dashboard allowing users to view their task information in one place.

## Features

- Create new tasks using an input form.
- Enter a task title, description, due date, and priority.
- Display created tasks in a dashboard table.
- Assign a default Pending status to newly created tasks.
- Navigate the website using the navigation bar.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- EJS
- Bootstrap
- Font Awesome

## Project Structure

- app.js – Main Express application configuration.
- server.js – Starts the web server.
- routes – Contains application routes.
- views – Contains EJS webpage templates.
- views/partials – Contains reusable webpage sections.
- public – Contains CSS, JavaScript, images, and other public files.
- package.json – Contains project dependencies and scripts.

## Current Limitations

- Tasks are currently stored in an in-memory array so created tasks are lost when the server is restarted.
- Database storage and additional task management functionality may be added in future development.

## External Sources and Acknowledgements

The following external resources were referenced during development:

1. https://courses.taltech.akaver.com/javascript/lectures/express-02  
   Used as a reference for POST route handling and accessing submitted form information through req.body.

2. https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach  
   Used as a reference for the JavaScript forEach() method when displaying individual tasks in the dashboard.

3. Bootstrap
   https://getbootstrap.com/docs/4.1/content/tables/  
   Used as a reference for Bootstrap table styling, including striped rows, borders, and dark table styling.

4. Font Awesome 
   https://fontawesome.com/  
   Used as the icon library for icons throughout the website.