import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import CourseList from './pages/CourseList.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Header from './components/layout/Header.jsx';
import "./styles/global.css"
import { AuthProvider } from './context/AuthContext';

function App() {
  

  return (
    <>
      
            
            <AuthProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CourseList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            </AuthProvider>
     
    </>
  )
}

export default App
