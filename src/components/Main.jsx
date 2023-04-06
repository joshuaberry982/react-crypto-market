import React, {useState, useEffect} from 'react';

const Main = () => {
    
  const [coin, setCoin] = useState([]);
  
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
        for (let i = 0; i < 7; i++) {
          coinData.push({
            name: result.data.coins[i].name,
            symbol: result.data.coins[i].symbol,
            price: result.data.coins[i].price,
            iconUrl: result.data.coins[i].iconUrl,
          });
        }
        // Emit USDT and USDC
        coinData.splice(4, 1);
        coinData.splice(2, 1);

        // Change to 2 decimal places and convert back to number
        for (let i = 0; i < coinData.length; i++) {
          coinData[i].price = parseFloat(coinData[i].price).toFixed(2);
          coinData[i].price = parseFloat(coinData[i].price);
        }

        setCoin(coinData);
      });
  }, []);

    return (
        <div className='main'>

          <div>
            <h3>Welcome to &#8383;ullish Crypto Prices, where you can see the latest, real time Crypto Currency market statistics.</h3>
            <br />
            <p>Here are the top 5 coins (not including stable coins like USDT)</p>
          </div>

          <div className='suggestions'>
            {coin.map((coinObj) => (
                <h3 key={coinObj.name}>
                    <img src={coinObj.iconUrl} width='20px' />
                    {coinObj.name} ({coinObj.symbol}) = ${coinObj.price}
                </h3>
            ))}
          </div>

          <div>
              <p>Crypto Trading is on a constant rise every year and this causes the prices to go to the Moon! Popular investors include Elon Musk, Anthony Pompliano and the ever secretive and Bitcoin founder, Satoshi Nakamoto</p>
          </div>

        </div>
    )
}

export default Main