import '../css/Expense.css'
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import React, {useState} from "react";
import ExpenseChart from './ExpenseChart';

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2019');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpense = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    
    return (
        <div>
            <Card className="expense">
            <ExpensesFilter selected = {filteredYear} onFilterChange={filterChangeHandler}/>    
            <ExpenseChart expenses={filteredExpense}/>
            <ExpenseList expenses = {filteredExpense}/>
                {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem> */}
            </Card>
        </div>
        
        
    )

}

export default Expense;