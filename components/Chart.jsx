import React from 'react';

const TokenChart = () => {
  return (
    <div>
      <iframe
        title="token-chart"
        src={`https://www.dextools.io/app/en/ether/pair-explorer/0x0c3825386002de7b2bad9027595faea7d9cce379`}
        width="100%"
        height="600"
      />
    </div>
  );
}

export default TokenChart;
