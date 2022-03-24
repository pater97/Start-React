// importazione
import Product from "./Product";
// variabili
const prodotti = [
  {
      nome:"card1",
      img:"https://c1.wallpaperflare.com/preview/732/733/90/drone-from-above-aerial-view-motorcycle.jpg",
      prezzo: 2.16
  },
  {
      nome:"card1",
      img:"https://d3e1m60ptf1oym.cloudfront.net/a76d4cae-1f68-4fbc-b837-db2f637d9853/002595-HSH-X-HORVILLE-MOTO-CLOSE-UP-3_xgaplus.jpg",
      prezzo: 8.6
  }
];

function App() {
  return (
    <div className="App">
      {prodotti.map((prodotto) => {
        return <Product{...prodotto}/>
      })}     
    </div>
  );
}

export default App;
