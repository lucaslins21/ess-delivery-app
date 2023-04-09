import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { EditarPerfil, Login } from '../pages';
//import {Home} from '../pages';
//<Route path="/home" element={<Home />} />
export const PublicRoutes = () => (
  <BrowserRouter>
    <Routes>
      
      <Route path="/perfil" element={<EditarPerfil />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
