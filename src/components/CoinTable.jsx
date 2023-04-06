import React, { useState, useEffect } from 'react';

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [fullTable, setFullTable] = useState(20);
  const [buttonText, setButtonText] = useState('See Full Table');

  useEffect(() => {

    // Get API Key
    const options = {
      headers: {
        'x-access-token': import.meta.env.VITE_COINRANKING_API_KEY,
      },
    };

    // Fetch Data
    fetch('https://api.coinranking.com/v2/coins/', options)
      .then((response) => response.json())
      .then((result) => {
        const coinData = [];
        for (let i = 0; i < fullTable; i++) {
          coinData.push({
            name: result.data.coins[i].name,
            symbol: result.data.coins[i].symbol,
            price: result.data.coins[i].price,
            change: result.data.coins[i].change,
            rank: result.data.coins[i].rank,
          });
        }


        setCoins(coinData);
      });
  }, [fullTable]);

  const handleTableToggle = () => {
    setFullTable(fullTable === 20 ? 50 : 20);
    setButtonText(buttonText === 'See Full Table' ? 'Minimize' : 'See Full Table');
  };

  return (
    <div className='table-container'>
      <h2>Table</h2>
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Change</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <tr key={index}>
            <td className='row'>{coin.name}</td>
            <td className='row'>{coin.symbol}</td>
            <td className='row'>${coin.price}</td>
            <td className='row'>{coin.change}%</td>
            <td className='row'>{coin.rank}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
    <div className='button'>
      <button onClick={handleTableToggle}>{buttonText}</button>
    </div>

    </div>
  );
};

export default CoinTable;