
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if (event.target.value > 20_000) {
            alert(`value cannot exceed 20000`)
            return
        }

        if (event.target.value < totalExpenses) {
            alert(`Budget cannot be lower than the spending`)
            return
        }

        setNewBudget(event.target.value);

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" on value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;