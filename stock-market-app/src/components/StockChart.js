import React, { useEffect } from 'react';

const StockChart = ({ symbol }) => {
  useEffect(() => {
    new window.TradingView.widget({
      "width": 980,
      "height": 610,
      "symbol": `NASDAQ:${symbol}`,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_chart"
    });
  }, [symbol]);

  return <div id="tradingview_chart" />;
}

export default StockChart;
