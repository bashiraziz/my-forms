import React from 'react';
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {useDispatch } from 'react-redux';
import {initialState} from './FormSlice';
import {
  calculate,
  handleChange,
} from './FormSlice';

import styles from './Form.module.css';

export function Form() {
  /* const count = useSelector(selectCount); */ 
  const dispatch = useDispatch();
   // const [incrementAmount, setIncrementAmount] = useState('2');
  const handleOnSubmit = (e) => {
    e.preventDefault();
      console.log("It worked!!!");
      dispatch(calculate());
  }
  return (
/*     <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Calculate value"
          onClick={() => dispatch(calculate())}
        >
          Calculate
        </button>
        <span className={styles.value}></span>
          <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div> */
      <div className={styles.row}>
       {/*  <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => handleChange(e.target.value)}
        />
        */} {/* <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button> */}
        {/* <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button> */}
        

<fieldset>
      <form onSubmit={e => handleOnSubmit(e)}>
         Actual <input type="number" name="actual"  onChange= {e => dispatch(handleChange({name: e.target.name, value: e.target.value}))}  />
          <br /><br />
          Budget <input type="number" name="budget"  onChange= {e => dispatch(handleChange({name: e.target.name, value: e.target.value}))} />
          <br /><br />
          Percent Complete
          <br />
          <input type="number"  name="percentComplete"  value ={initialState.percentComplete} readOnly></input>
          <br />
          <br />
          <input type="submit" name="submit" value="Calculate" align="center" />

        </form>
      </fieldset>
      </div>
    
  );
}
