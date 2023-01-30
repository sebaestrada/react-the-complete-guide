import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default ExpensesList;
