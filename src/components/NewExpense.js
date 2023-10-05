import React, {useState} from "react";
import '../css/NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler =(enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsPressed(false);
    }
    const [isPressed, setIsPressed] = useState(false);
    const addExpenseHandler = () => {
        setIsPressed(prevPressed => !prevPressed);
    }
    return (
        <div className="new-expense">
            {!isPressed && <button onClick={addExpenseHandler}>Add new Expense</button>}
            {isPressed=== true && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={addExpenseHandler}/>}

        </div>
    )
} 

export default NewExpense;