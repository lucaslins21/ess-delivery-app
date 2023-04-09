import React from "react";
import { IconPerfil, Logo, IconBag, IconLogout } from "../../assets";
import './style.css';

export const Navbar = (props) => {

  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" width={80} onClick={() => window.location.replace('/')} style={{cursor: 'pointer'}}/>
      <div className="divIcons">
        <IconPerfil style={{width: 30, height: 30, cursor: 'pointer' }} onClick={() => window.location.replace('/perfil')}/>
        <div className="divBag">
          <IconBag style={{width: 30, height: 30, cursor: 'pointer' }}/>
          <div className="divNames">
            <p>R$ 0,00</p>
            <p>0 itens</p>
          </div>
        </div>
        <IconLogout style={{width: 30, height: 30, cursor: 'pointer' , marginLeft:20}} onClick={() => {
          localStorage.removeItem('@BuchoCheio:id');
          window.location.replace('/');
          }} 
        />
      </div>
    </div>
  );
};