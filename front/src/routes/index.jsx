import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditarPerfil, Login, Home } from '../pages';

export const PublicRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/perfil" element={<EditarPerfil />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
