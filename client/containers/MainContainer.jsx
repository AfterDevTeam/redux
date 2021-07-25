/**
 * ************************************
 *
 *
 * ************************************
 *
 * @format
 * @module MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import MarketsContainer from '../containers/MarketsContainer.jsx';
const mapStateToProps = (state) => ({
  // add pertinent state here
});

const MainContainer = () => {
  return (
    <div className='container'>
      <div className='outerBox'>
        <h1 id='header'>MegaMarket Loyalty Cards</h1>
        <TotalsDisplay />
        <MarketsContainer />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(MainContainer);
