// importazione
import Product from "./Product";
import prodotti from "./products";
// funzione
const conParam = (prezzo) => {
  alert(prezzo)
}
function App() {
  return (
    <div className="App">
      {prodotti.map((prodotto) => {
        return <Product key={prodotto.id} {...prodotto}>
          <button onClick={() => alert("bottone premuto")}>clicca</button>
          <button onClick={()=> conParam(prodotto.prezzo)}>premi</button>
        </Product>
      })}     
    </div>
  );
}

export default App;
