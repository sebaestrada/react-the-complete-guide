import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: 1, title: "Car insurance", amount: 100, date: new Date(2023, 1, 10) },
    { id: 2, title: "Gym", amount: 30, date: new Date(2023, 1, 15) },
    { id: 3, title: "Shopping", amount: 45.67, date: new Date(2023, 1, 17) },
  ];

  return (
    <div>
      <NewExpense />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
