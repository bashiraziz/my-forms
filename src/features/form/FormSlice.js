import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  value: 0,
  actual: 0,
  budget: 0,
  percentComplete: 0,  
}
export const formSlice = createSlice({
  name: 'form',
  state: initialState,

  reducers: {
    calculate: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.percentComplete = state.actual / state.budget;
    },
    handleChange: (state, action) => {
    let name = e.target.name;
    let value = e.target.value;
    state[name] = value;
    },
    
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { calculate, handleChange, incrementByAmount } = formSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default formSlice.reducer;