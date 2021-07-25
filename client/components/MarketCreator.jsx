/**
 * ************************************
 *
 *
 * ************************************
 *
 * @format
 * @module MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addMarketReducer, changeLocationReducer } from '../slices/marketSlice';
import { useState } from 'react';

const MarketCreator = (props) => {
  const addMarket = useSelector(addMarketReducer);
  const changeLocation = useSelector(changeLocationReducer);
  const dispatch = useDispatch();
  // console.log(state);
  return (
    <div>
      <input
        type='text'
        // this on change method is taking whatever is typed in the input vield,
        // assigning e.target.value to our action.payload and sending it to our changeLocationReducer in our slice
        // We can do this by utilizing the useDispatch hook from react-redux
        // Steps are:
        // 1. declare const dispatch = useDispatch();
        // 2. dispatch(reducer(action.payload))
        // 3. You may or may not need to pass in a parameter depending on what your reducer does.
        onChange={(e) => dispatch(changeLocationReducer(e.target.value))}
      />
      <button type='submit' onClick={() => dispatch(addMarket)}>
        Add Market
      </button>
    </div>
  );
};
export default MarketCreator;
