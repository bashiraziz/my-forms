import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/form/FormSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },

});
