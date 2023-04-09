import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { EditarPerfil, Home, Login } from '../pages';

export const PublicRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/perfil" element={<EditarPerfil />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
