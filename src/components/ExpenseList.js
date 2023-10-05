import React from "react";
import '../css/ExpenseList.css'
import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {
    if(props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No Expense Found for the specified Year. </h2>
    }   
    return (
        <ul className="expense-list">
            {props.expenses.map(expense => 
            <ExpenseItem key ={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
        </ul>
    )
};

export default ExpenseList;