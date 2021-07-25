/**
 * ************************************
 *
 *
 * ************************************
 *
 * @format
 * @module MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketsDisplay
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
// import child components...
import MarketCreator from '../components/MarketCreator.jsx';
import MarketsDisplay from '../components/MarketsDisplay.jsx';

const MarketsContainer = () => {
  return (
    <div className='innerbox'>
      <MarketCreator />
      <MarketsDisplay />
    </div>
  );
};

export default MarketsContainer;
