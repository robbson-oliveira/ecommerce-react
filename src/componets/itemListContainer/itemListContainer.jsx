import './itemListContainer.css'
import '../../App.css';

function ItemListContainer() {
  return (
    <div className="container mt-4">
      <div className="item-list-container">
        <h2>Catálogo de Produtos</h2>
        <p className="loading-text">Estamos carregando os produtos. Fique atento!</p>
        
        {/* Exemplo de spinner do Bootstrap */}
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;