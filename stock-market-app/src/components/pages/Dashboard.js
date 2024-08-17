import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  
  useEffect(() => {
    axios.get('/api/stocks')
      .then(res => setStocks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {stocks.map(stock => (
          <li key={stock._id}>{stock.symbol} - {stock.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
