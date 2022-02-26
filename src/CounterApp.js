import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    //useStates
    const [counter, setCounter] = useState(value)

    //HandleAdd

    const handleAdd = () => {
        // setCounter(counter+1)
        setCounter((c) => c + 1)
    }

    const handleSubtract = () => {
        setCounter((c) => c > 0 ? c - 1 : 0)
    }

    const handleReset = () => {
        setCounter(value)
    }

    return (<>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubtract}>-1</button>
    </>)
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp
