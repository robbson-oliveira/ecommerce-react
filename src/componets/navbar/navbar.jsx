import './navbar.css'
import { MagnifyingGlass,ShoppingCart,List } from "@phosphor-icons/react";
import '../../App.css';

function Navbars () {
  return (
    <div className='App'>
      <div className='nav'>
        <div className="inner-content">
          <h1 className="logo">
            ELECTRO<span>.</span>
          </h1>
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/produtos">Produtos</a></li>
              <li><a href="/sobre">Sobre</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </nav>
          <div className="navs-icon-contanier">
              <div className="search-input-container">
                <input type="search" placeholder="Procurar"/>
                <MagnifyingGlass />
              </div>
              <button className="shopping-cart">
              <ShoppingCart />
                  <div className="products-count">8</div>
              </button>
              <button className="menu-button">
              <List />
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbars