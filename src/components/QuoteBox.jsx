import "./styles/QuoteBox.css";
const QuoteBox = ({ handleChangeQuote, quote }) => {
  // desestructuramos objeto
  // recibe por props manejo del boton
  console.log(quote);
  return (
    <section className="quoteBox">
      <h1 className="title"> FORTUNE COOKIES</h1>

      <section className="main">
        <button className="button" onClick={handleChangeQuote}>
          Try Luck
        </button>
        <article>
          <p>{quote.phrase}</p>
        </article>
      </section>
      <footer className="footer">
        <h4>Fuente: {quote.author}</h4>
      </footer>
    </section>
  );
};
export default QuoteBox;
