import React from "react";
import './index.css';
import User from "./components/Home.jsx";
import Employee from "./components/employee/Home.jsx";
import Admin from "./components/admin/Home.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import ManageUsers from "./pages/ManageUsers.jsx";
import ChatBot from "./components/ChatBot.jsx";
import LoginPage from "./components/LoginPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path= "/" element={<User />} />  
      <Route path= "/Employee" element={<Employee />} />
      <Route path= "/Admin" element={ <Admin />} />  
      <Route path= "/EditProfile" element={ <EditProfile />} />
      <Route path= "/ManageUsers" element={ <ManageUsers />} />  
      <Route path= "/ChatBot" element={ <ChatBot />} />
      <Route path= "/LoginPage" element={ <LoginPage />} />
    </Routes>
  )
}

export default App;