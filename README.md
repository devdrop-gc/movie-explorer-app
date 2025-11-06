# 🎬 Movie Explorer App

A simple React application that allows users to explore movies, search by title, and view detailed information.  
This project demonstrates the use of **React Router DOM**, **Axios**, and **Context API** for global theme handling.

---

## 🚀 Live Demo

[![View Live](https://img.shields.io/badge/View-Live-blue?style=for-the-badge&logo=github)](https://devdrop-gc.github.io/movie-explorer-app/)

---

## 🧠 Features

- 🏠 **Home Page** – Welcome screen with theme toggle  
- 🎥 **Movies Page** – Browse movies fetched from [TVMaze API](https://api.tvmaze.com/shows)  
- 🔍 **Search** – Filter movies by title in real-time  
- 📄 **Movie Details Page** – View detailed info (language, rating, genres, summary)  
- 🌗 **Theme Toggle** – Global light/dark mode using Context API  
- ⚙️ **Routing** – Implemented with React Router DOM  
- ⚡ **Data Fetching** – Done with Axios and useEffect  

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| ⚛️ React | UI Components |
| ⚡ Vite | Fast React build tool |
| 🌐 React Router DOM | Navigation & Routing |
| 🧩 Context API | Global Theme Management |
| 📡 Axios | API Calls |
| 🎨 CSS | Styling |

---

## 📂 Folder Structure
```
movie-explorer/
├── src/
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Movies.jsx
│ │ └── MovieDetails.jsx
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── MovieCard.jsx
│ │ └── MovieList.jsx
│ └── context/
│ └── ThemeContext.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

### 🏁 Project Overview

This project was built as part of a React assignment focusing on:

- ⚛️ **React Router DOM**  
- 🧠 **useState & useEffect**  
- 📡 **Axios API fetching**  
- 🔄 **Conditional Rendering**  
- 🧩 **Props & Component Communication**  
- 🌗 **Context API** for global state (theme)
