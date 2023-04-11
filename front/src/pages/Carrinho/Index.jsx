import React from 'react';
import './styles.scss'
import Table from './Table';
import { useState } from 'react';


const produto = {
    nome: 'produto',
    preco: 'preco',
    quantidade:1
}; 

export const Carrinho = () => {
    const [car,setCar] = useState([1]);
  return (
   <>
    <header>
    
    </header>
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
                                <td colSpan={'5'}>Carrinho de compras vazio. Buscar Imagem e botão.</td>
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


