import '../css/ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    // const expenseDate = new Date(2021, 2, 28);
    // const expenseItem = 'Car Insurance';
    // const expensePrice = 294.67;
    
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;