# ⚛️Mini Message Board
A database board for people to create and delete random messages. 
This project is one of the first NodeJS/Express projects from The Odin Project curriculum - [instructions](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board).

## 🎯Learning Goals

- Learning about HTTP communication
- Learning Backend - server side rendering and databases
- Creating a database with tables and reasonable columns
- Using database CRUD operations
- Be comfortable with request / response cycle
- Apply Model, Views, Controllers architecture
- Use templating engines
- Handle serverside errors
- Learn to deploy a server side code and a database on a hosting server
- Use environment variables
- Communication with a remote database from my code

## ⚙️Features

- Adding a message
- Removing a message
- Showing details of a message

## 🛠️Tech Stack

- HTML
- CSS
- JS
- NodeJS
- Express
- EJS
- PostgreSQL
- Render hosting service
- Supabase hosting service

## 🧱Project Structure

The project follows the pattern MVC - Model/Views/Controllers

## 📝Notes

The code uses environment variables, so cloning and running on localhost will not work without 
the provided environment variables. I am using a free tier in Render hosting service, which
puts the app to sleep after small window of inactivity. Meaning opening the website will have
a Render's loading screen for about 30s.

There is no implementation of authentication or users, so creating and deleting is global for everyone 
and changes are visible to everyone.

## 🌐Website URL

The website is available on this 👉[link](https://mini-message-board-top-l9cq.onrender.com/)👈.