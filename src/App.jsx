import { useState } from "react";
import "./App.css";
import quotes from "./db/quote.json";
import { getRandom } from "./utils/random";
import QuoteBox from "./components/QuoteBox";

const listBg = ["bg1", "bg2", "bg3", "bg4"]; // array de background

function App() {
  // console.log(getRandom(quotes));

  const [quote, setQuote] = useState(getRandom(quotes)); // hook para caambio de frase random
  const [currentBg, setCurrentBg] = useState(getRandom(listBg)); // hook para cambio de fondo

  const handleChangeQuote = () => {
    console.log("dio click");
    setQuote(getRandom(quotes)); //getRandom funcion creada para aleatoriedad (utils), aqui cambia frase
    setCurrentBg(getRandom(listBg)); //getRandom funcion creada para aleatoriedad (utils), aqui cambia fondo
  };

  return (
    <main className={`App ${currentBg}`}>
      {/* // cambia estado cita aleatoria, envia el cambio y envia la fras quote  */}
      <QuoteBox handleChangeQuote={handleChangeQuote} quote={quote} />
    </main>
  );
}

export default App;
