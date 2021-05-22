import "./ExpenseItem.css";
import {useState} from 'react';
import Date from "./ExpenseDate";
import React from "react";
import Card from '../UI/Card'

function ExpenseItem(props) {

  const [title, setTitle]  = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
  };

  return (
    <li>
      <Card className="expense-item">
        <Date date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button className="expense-item__price" onClick={clickHandler}>
          Click Me
        </button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
