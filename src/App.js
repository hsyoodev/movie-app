import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [conins, setConins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setConins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${conins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {conins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
