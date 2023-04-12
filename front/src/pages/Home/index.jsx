import { useState, useEffect } from "react";
import "./style.css";
//import '@fortawesome/fontawesome-free/css/all.css';

import axios from 'axios';


export const Home = () => {
  const [selectedItemPrice, setSelectedItemPrice] = useState(0);
  const search = () => {
    const input = document.querySelector('[name="search"]');
    const searchTerm = input.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    console.log('Pesquisar:', searchTerm);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const name = card.querySelector('.name-item').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (name.includes(searchTerm)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    document.getElementById('item-modal').style.display = 'none';
  }

  const [nome, setNome] = useState('');
    const [items, setItems] = useState([]);
    const [idItem, setIdItem] = useState(0);
    const [ingredientes, setIngredientes] = useState('');
    const [imagem, setImagem] = useState('');
    const [adicionas, setAdicionais] = useState([]);
    const [preco, setPreco] = useState('');
    const [editar, setEditar] = useState(false);
    const [openSalvar, setOpenSalvar] = useState(false);
    const [openDeletar, setOpenDeletar] = useState(false);
    const handleOpenSalvar = () => setOpenSalvar(true);
    const handleCloseSalvar = () => setOpenSalvar(false);
    const handleOpenDeletar = () => setOpenDeletar(true);
    const handleCloseDeletar = () => setOpenDeletar(false);
    const [ehAdmin,setEhAdmin] = useState(Number(localStorage.getItem('@BuchoCheio:key'))===2)
    
    const cadastraritens = () => {

    }

    useEffect(() => {
      axios.get(`http://localhost:3001/item`)
        .then((response) => {
          setItems(response.data);
        })
    }, [])

    useEffect(() => {
      axios.get(`http://localhost:3001/item/${idItem}`)
        .then((response) => {
          setIngredientes(response.data.ingredientes);
          setAdicionais(response.data.adicionais);
        })
    }, [idItem])

    console.log(ingredientes)

  function toggleClearIcon(event) {
    const input = event.target;
    const clearIcon = input.nextElementSibling;
    clearIcon.style.display = input.value ? "inline" : "none";
  }

  function clearSearch(event) {
    const input = event.target.previousElementSibling;
    input.value = "";
    toggleClearIcon(event);
    input.focus();
  }

  function checkForEnter(event) {
    search();
  }

  console.log(adicionas)
  function showItemModal(event) {
    const card = event.currentTarget;
    const imageSrc = card.querySelector("img").src;
    const title = card.querySelector(".name-item").textContent;
    const priceElement = card.querySelector(".cost-item");
    setSelectedItemPrice(
      parseFloat(priceElement.textContent.replace("R$", "").trim())
    );
    document.getElementById("quantity").value = 1; // Reseta a quantidade para 1
    updateTotalPrice();
    const modal = document.getElementById("item-modal");
    modal.querySelector(".modal-image").src = imageSrc;
    modal.querySelector(".modal-title").textContent = title;
    modal.style.display = "block";
  }

  function hideItemModal() {
    document.getElementById("item-modal").style.display = "none";
  }

  function updateTotalPrice() {
    const quantity = parseInt(document.getElementById("quantity").value);
    const totalPrice = (quantity * selectedItemPrice).toFixed(2);
    document.getElementById("item-price").textContent = totalPrice;
  }

  function increaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    const currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
    updateTotalPrice();
  }

  function decreaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    const currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
    updateTotalPrice();
  }

  return (
    <div className="main-bg">
      <section id="cardapio">
        <div className="main-content grid-one-content">
          <div id="heading-cardapio">
            <h2>Cardápio</h2>
            <div className="search-bar">
              <div className="search-input-wrapper">
                <i
                  className="fa fa-search search-icon"
                  onClick={search}
                ></i>
                <input
                  type="text"
                  placeholder="Busque por um item"
                  name="search"
                  onInput={toggleClearIcon}
                  onKeyUp={checkForEnter}
                />
                <i
                  className="fa fa-times clear-icon"
                  onClick={clearSearch}
                  style={{ display: "none" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="grid">
            {items.map((item) => (
            <article className="card" onClick={(target) => {showItemModal(target); setIdItem(item.id)} }>
              <img
                src={item.imagem}
                alt="Comida 1"
              />
              <h3 className="name-item">{item.nome}</h3>
              <span className="cost-item">R$ {item.preco}</span>
            </article>
            ))}

          </div>
        </div>
      </section>

      {/* Modal */}
      <div id="item-modal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={hideItemModal}>
            &times;
          </span>
          <img className="modal-image" src="" alt="Item Imagem" />
          <div className="modal-info">
            <h3 className="modal-title">Nome do item</h3>
            <p className="modal-ingredients">Ingredientes: </p>
            <div className="modal-ingredients-list">{ingredientes}</div>
            <div className="modal-extras">
              <label htmlFor="extra">Adicionais:</label>
            {adicionas.map((item,index)=>(
              <div key={item} className="checkbox-wrapper">
                
                <input key={item} type="checkbox" name="extra1" id="extra1" />
                <label htmlFor="extra1">{item}</label>
              </div>))}
            </div>
            <div className="modal-observations">
              <label htmlFor="observations">Observações:</label>
              <textarea id="observations" name="observations"></textarea>
            </div>
            <div className="modal-footer">
              <div className="modal-quantity">
                <button type="button" onClick={decreaseQuantity}>
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value="1"
                  min="1"
                  onInput={updateTotalPrice}
                />
                <button type="button" onClick={increaseQuantity}>
                  +
                </button>
              </div>
              <button type="button" className="button-add">
                Adicionar (R$ <span id="item-price">0,00</span>)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
