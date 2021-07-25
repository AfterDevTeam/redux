/**
 * ************************************
 *
 *
 * ************************************
 *
 * @format
 * @module store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 */
import marketSlice from './slices/marketSlice';
//Need to import configureStore from @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// different Store setup to use slices
// Can have multiple slices in the reducers object if needed

export default configureStore({
  reducer: {
    market: marketSlice,
  },
});
