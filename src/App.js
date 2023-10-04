// import logo from './logo.svg';
// import './App.css';
// import ExpenseItem from './components/ExpenseItem';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <ExpenseItem></ExpenseItem>
//     </div>
//   );
// }

// export default App;

// import ExpenseItem from './components/ExpenseItem';
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense";
import React, {useState} from "react";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
    
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;