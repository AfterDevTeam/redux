/**
 * ************************************
 *
 *
 * ************************************
 *
 * @format
 * @module TotalsDisplay
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import totalMarket from '../slices/marketSlice';

const TotalsDisplay = () => {
  // This is our state that we are exporting in our marketSlice file: export const totalMarket = (state) => state.marketSlice;
  // Notice that after the equal sign is what we are putting into our useSelector hook. This is one way of acccessing state
  // from our exportedSlice
  const state = useSelector((state) => state.market.totalMarkets);

  // Below is a more readable version of the above useSelector hook. It functions the same as above, except you have to
  // import totalMarket from '../slices/marketSlice', as seen above.
  //const state = useSelector(totalMarket);
  //
  return (
    <div className='innerbox' id='totals'>
      <label htmlFor='totalCards'>Total Cards:</label>
      <span id='totalCards'></span>
      <p>
        <label htmlFor='totalMarkets'>Total Markets: {state} </label>
        <span id='totalCards'></span>
      </p>
    </div>
  );
};
export default TotalsDisplay;
