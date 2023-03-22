import React, { useState } from "react";
import { Botao } from "../../components/Botao";
import { Input } from '../../components/Input';
import './style.css';

export const EditarPerfil = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [pontoRef, setPontoRef] = useState('');

  return (
    <div className="Page">
      <div className="ContainerForm">
        <h1>PERFIL</h1>
        <Botao 
          width={150}
          text='EDITAR'
          backgroundColor='#FF9D01'
          color='#FFF2DE'
        />

        <div className="Inline">
          <Input
            width='90%'
            titulo='Nome'
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input
            width='90%'
            titulo='CPF'
            placeholder='CPF'
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />

          <Input
            width='90%'
            titulo='Telefone'
            placeholder='Telefone'
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div className="Inline">
          <Input
            width='50%'
            titulo='Email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            width='50%'
            titulo='Senha'
            placeholder='Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="Inline">
          <Input
            width='50%'
            titulo='Confirmar Senha'
            placeholder='Confirmar Senha'
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />

          <Input
            width='50%'
            titulo='Senha'
            placeholder='Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="Inline">
          <Input
            width='30%'
            titulo='Endereço'
            placeholder='Endereço'
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />

          <Input
            width='30%'
            titulo='Complemento'
            placeholder='Complemento'
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />

          <Input
            width='30%'
            titulo='Ponto de Referência'
            placeholder='Ponto de Referência'
            value={pontoRef}
            onChange={(e) => setPontoRef(e.target.value)}
          />
        </div>
        
        <Botao 
          width={150}
          text='Deletar conta'
          backgroundColor='#DD1C1A'
          color='#FFF2DE'
        />
      </div>
    </div>
  )
}