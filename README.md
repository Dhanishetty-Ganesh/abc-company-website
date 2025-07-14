# 🧠 ABC Company - CMS Integrated AI Website

A pixel-perfect landing page for ABC Company powered by a dynamic CMS system to manage the main heading from a backend dashboard.

## 📌 Overview

This project contains:

- A **React-based frontend** showing a company landing page and CMS panel.
- A **Node.js + Express backend** with MongoDB to store & update the dynamic heading.
- A **CMS Page** to edit the heading using APIs.
- The dynamic heading is reflected live on the user-facing landing page.

---

## ✨ Features

- ✅ Editable heading from CMS
- ✅ Dynamic rendering of heading on landing page
- ✅ MongoDB Atlas backend
- ✅ Responsive & modern UI (based on Figma design)
- ✅ API integration between frontend and backend



## ⚙️ Tech Stack

| Layer     | Technology               |
|-----------|--------------------------|
| Frontend  | React.js, HTML, CSS      |
| Backend   | Node.js, Express.js      |
| Database  | MongoDB Atlas (cloud)    |
| Deployment| Render (Backend), Netlify (Frontend) |


## 📁 Folder Structure

root/
├── backend/ # Express server + MongoDB logic
│ └── index.js
│ └── .env
│ └── package.json
├── frontend/ # React app
│ └── src/
│ └── components/
│ └── App.js
│ └── index.js
│ └── public/
│ └── package.json
├── README.md    


## Backend Setup (/backend)
cd backend
npm install

## Frontend Setup (/frontend)
cd frontend
npm install
npm start

## API Endpoints

| Method | Route          | Description                       |
| ------ | -------------- | --------------------------------- |
| GET    | `/api/heading` | Get the current heading text      |
| POST   | `/api/heading` | Update or insert new heading text |

