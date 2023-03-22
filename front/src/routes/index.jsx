import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditarPerfil, Home } from '../pages';

export const PublicRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<EditarPerfil />} />
    </Routes>
  </BrowserRouter>
);
