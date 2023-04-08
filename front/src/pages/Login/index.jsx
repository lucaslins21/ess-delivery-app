import React, { useState } from "react";
import { Botao } from "../../components/Botao";
import { Input } from '../../components/Input';
import { Logo } from "../../assets";
import { Icone } from "../../assets";
import './style.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const verificationAdmin = ()=>{
            if (email === "admin@gmail.com" && senha === "admin123"){
                return window.location.replace("/perfil");
            }else{
                return false;
            }    
    } 
    return (
        <div className="containerPage">
            <div className="form">
                <div className="titulo">  
                    <div className="icone">
                    <Icone style={{ width: 45 , marginRight: 25 }}/>
                    </div>
                    <div className="">
                        <h1>Login</h1>
                    </div>
                </div>

                <div className="email">
                    <Input
                        titulo='E-MAIL'
                        placeholder='e-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="senha">
                    <Input
                        titulo='SENHA'
                        placeholder='senha'
                        value={senha}
                        senha
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div className="botao">
                    <Botao 
                        width={'100%'}
                        text='ENTRAR'
                        backgroundColor='#FF9D01'
                        color='#FFF2DE'
                        backgroundColorHover='#FFF2DE'
                        colorHover='#FF9D01'
                        borderHover='2px solid #FF9D01'
                        onClick={() => verificationAdmin()}
                    />
                </div>
            </div>
            <div className="logo">
                <img src={Logo} alt="Logo" width={600}/>
            </div>
        </div>
    )
}