import ExpensesList from "./components/ExpensesList";

function App() {
  const expenses = [
    { id: 1, title: "Car insurance", amount: 100, date: new Date(2023, 1, 10) },
    { id: 2, title: "Gym", amount: 30, date: new Date(2023, 1, 15) },
    { id: 3, title: "Shopping", amount: 45.67, date: new Date(2023, 1, 17) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
