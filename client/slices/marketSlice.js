/** @format */

import { createSlice } from '@reduxjs/toolkit';

// A slice is essentially a combination of your initial state, reducers, and actions all in one. We export the reducers as actions
// and use various React hooks to access state or dispatch reducers inside whatever component we want.

export const market = createSlice({
  // This is the initial state that we will use throughout our App.
  // The 'name' field is important and is how we connect our state to our store file
  name: 'market',
  initialState: {
    totalMarkets: 0,
    totalCards: 0,
    marketList: [],
    lastMarketId: 10000,
    newLocation: '',
    marketCards: 0,
  },
  // All needed reducers live here
  reducers: {
    addMarketReducer: (state, action) => {
      state.totalMarkets += 1;
      const newMarket = {
        marketId: state.lastMarketId,
        location: state.newLocation,
        cards: state.marketCards,
      };
      state.lastMarketId += 1;

      state.marketList.push(newMarket);
    },
    changeLocationReducer: (state, action) => {
      console.log('Action', action.payload);
      state.newLocation = action.payload;
    },
    addCardReducer: (state, action) => {
      console.log('addCards event: ', action);
      for (let i = 0; i < state.marketList.length; i++) {
        if (state.marketList[i].marketId === action.payload) {
          state.marketList[i].cards += 1;
        }
      }
    },
    deleteCardReducer: (state, action) => {
      for (let i = 0; i < state.marketList.length; i++) {
        if (state.marketList[i].marketId === action.payload) {
          state.marketList[i].cards -= 1;
        }
      }
    },
  },
});

// Exporting our reducers as actions. This allows our reducers to directly have access to action.payload.
export const {
  addMarketReducer,
  changeLocationReducer,
  addCardReducer,
  deleteCardReducer,
} = market.actions;

// Exporting the entire slice so our Store has access to it

export default market.reducer;

// Exporting our state so we can access it in any component using React hooks
export const totalMarket = (state) => state.marketSlice;
