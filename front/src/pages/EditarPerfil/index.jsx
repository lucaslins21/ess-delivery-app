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
  const [editar, setEditar] = useState(false);

  return (
    <div className="Page">
      <div className="ContainerForm">
        <div className="ContainerTitulo">
          <div style={{width: 200}}></div>
          <h1>PERFIL</h1>
          <Botao 
            width={150}
            text='EDITAR'
            backgroundColor='#FF9D01'
            color='#FFF2DE'
            onClick={() => setEditar(true)}
          />
        </div>

        <div className="Inline">
          <Input
            titulo='Nome'
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input
            titulo='CPF'
            placeholder='CPF'
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />
        </div>

        <div className="Inline">
          <Input
            titulo='Telefone'
            placeholder='Telefone'
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <Input
            titulo='Email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="Inline">
          <Input
            titulo='Senha'
            placeholder='Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Input
            titulo='Confirmar Senha'
            placeholder='Confirmar Senha'
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>

        <div className="Inline">
          <Input
            titulo='Endereço'
            placeholder='Endereço'
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />

          <Input
            titulo='Complemento'
            placeholder='Complemento'
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />

          <Input
            titulo='Ponto de Referência'
            placeholder='Ponto de Referência'
            value={pontoRef}
            onChange={(e) => setPontoRef(e.target.value)}
          />
        </div>
        
        <div className="ContainerButtonDeletar">
          <div style={{marginLeft: 18}}>
            <Botao 
              width={150}
              text='Deletar conta'
              backgroundColor='#DD1C1A'
              color='#FFF2DE'
            />
          </div>

          { editar && (
            <Botao 
            width={150}
            text='Salvar'
            backgroundColor='#FF9D01'
            color='#FFF2DE'
          />
          )}


          { editar && (
            <div style={{marginRight: 18}}>
              <Botao 
                width={150}
                text='Cancelar'
                backgroundColor='transparent'
                color='#FF9D01'
                border='2px solid #FF9D01'
                onClick={() => setEditar(false)}
              />
          </div>
          )}
        </div>
      </div>
    </div>
  )
}