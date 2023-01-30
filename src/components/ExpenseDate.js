import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const month = date.toLocaleString("es-CL", { month: "long" }).toUpperCase();
  const day = date.toLocaleString("es-CL", { day: "2-digit" }).toUpperCase();
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
