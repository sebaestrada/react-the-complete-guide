import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, date }) => {
  const [tittle, setTittle] = useState(title);

  const clickHandler = () => {
    setTittle("New Title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{tittle}</h2>
        <div className="expense-item__price">$ {amount}</div>

        <button onClick={clickHandler}>Press Me</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
