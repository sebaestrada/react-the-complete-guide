function ExpenseDate({ date }) {
  const month = date.toLocaleString("es-CL", { month: "long" }).toUpperCase();
  const day = date.toLocaleString("es-CL", { day: "2-digit" }).toUpperCase();
  const year = date.getFullYear();

  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
