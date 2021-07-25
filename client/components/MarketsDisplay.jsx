/**
 * ************************************
 *
 *
 * ************************************
 *
 * @format
 * @module MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n Market components
 */

import React from 'react';
import Market from './Market.jsx';
import { useSelector } from 'react-redux';
import { market } from '../slices/marketSlice';

const MarketsDisplay = (props) => {
  const market = useSelector((state) => state.market.marketList).map(
    (market) => <Market key={market.marketId} {...market} />
  );
  return (
    <div className='displayBox'>
      <h4>Markets</h4>
      {market}
    </div>
  );
};

export default MarketsDisplay;
