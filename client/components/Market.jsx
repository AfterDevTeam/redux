/**
 * ************************************
 *
 *
 * ************************************
 *
 * @format
 * @module Market
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCardReducer, deleteCardReducer } from '../slices/marketSlice';

const Market = (props) => {
  const dispatch = useDispatch();

  console.log();
  return (
    <div className='marketBox'>
      <span>Market Id: {props.marketId}</span>
      <br></br>
      <span>Location: {props.location} </span>
      <br></br>
      <span>Cards: {props.cards} </span>
      <br></br>
      <span>% of Cards: </span>
      <br />
      <button
        type='submit'
        onClick={(e) => dispatch(addCardReducer(props.marketId))}
      >
        Add Card
      </button>
      <button
        type='submit'
        onClick={(e) => dispatch(deleteCardReducer(props.marketId))}
      >
        Delete Card
      </button>
    </div>
  );
};

export default Market;
