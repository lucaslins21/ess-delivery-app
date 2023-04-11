import React from 'react';
import './styles.scss'
import Table from './Table';
import { useState } from 'react';
import { Navbar } from '../../components/Navbar';



const hambuguer = {
    nome: 'produto',
    preco: 'preco',
    quantidade: 'quantidade'
}; 


export const Carrinho = () => {
    const [car,setCar] = useState([]);
    const removerItem = () => {
        //removerItem
    }
  return (
   <>
    <Navbar></Navbar>
      <main>
          <div className="page-title">Seu Carrinho</div>
          <div className="content">
              <section>
                  <table>
                      <thead>
                          <tr>
                              <th>Hamburger</th>
                              <th>Preço</th>
                              <th>Quantidade</th>
                              <th>Total</th>
                              <th>Remover</th> 
                          </tr>
                      </thead>
                      <tbody>
                        {car.map((item) => (<Table></Table>))}
                        {car.length === 0 && (
                            <tr>
                                <td colSpan={'5'}>Carrinho de compras vazio!
                                    <button className='botaoVazio' onClick={() => {return window.location.replace('/perfil')}}>Escolha seu Hamburger
                                    </button>
                                </td>

                            </tr>
                        ) }
                      </tbody>
                  </table>
              </section>
              <aside>
                  <div className="boxResumo">
                      <header>Resumo do Pedido</header>
                      <div className="info">
                          <div><span>Sub-Total</span><span>R$ 120</span></div>
                          <div><span>Frete</span><span>Grátis</span></div>
                          <div><button>Adicionar Cupom de Desconto<i className="bx bx-right-arrow-alt"></i></button></div>
                      </div>
                      <footer>
                          <span>Total</span>
                          <span>R$ 200</span>
                      </footer>
                  </div>
                  <button>Finalizar Compra</button>
              </aside>
          </div>
      </main>
   </>
  );
}


