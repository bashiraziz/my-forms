import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/FormSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },

});
export default store;
