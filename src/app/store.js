import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/FormSlice';

export default configureStore({
  reducer: {
    form: formReducer,
  },

});
