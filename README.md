# TodoList Backend

## Description

This project is the backend for a Todo List, built with **Node.js**, **Express.js**, and **MongoDB**. It exposes a RESTful API that allows you to manage tasks: add, delete, edit and list tasks.

## Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (LTS version recommended)
- **MongoDB** (local or a service like MongoDB Atlas)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Issa-WebDev/todo-backend.git

2. Allez dans le dossier du projet :
   ```bash
   cd todo-backend

3. Installez les dépendances :
   ```bash
   npm install

4. Créez un fichier .env à la racine du projet et ajoutez-y les variables d'environnement nécessaires :
   ```env
   PORT = 1010
   DATABASE_URL = mongodb://127.0.0.1:27017/todolist

5. Démarrez le serveur :
   ```bash
   npm run dev

Le backend sera maintenant accessible sur http://localhost:1010.