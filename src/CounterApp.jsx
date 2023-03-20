import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  //   const handleAdd = () => setCounter((c) => c + 1);
  const handleAdd = () => setCounter(counter + 1);
  const handleSubstract = () => setCounter((c) => (c === 0 ? 0 : c - 1));
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button id="substract" onClick={handleSubstract}>
        -1
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
      <button aria-label="btn-reset" id="add" onClick={handleAdd}>
        +1
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};
