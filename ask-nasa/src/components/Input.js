import React from 'react';

const Input = ({date, setDate}) => {
    const dateChangeHandler = (e) => {
        setDate(e.target.value);
        console.log(e.target.value)
    }
    const maxDate = new Date().toISOString().slice(0, 10);
    
    return (
        <input type="date" value={date} onChange={dateChangeHandler} max={maxDate}/>
    )
}
export default Input;