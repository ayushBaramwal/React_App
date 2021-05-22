// Item must be started with uppercase so react can differentiate b/w custom component and HTML component
import "./expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../YearFilter/ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpenseChart from '../Chart/ExpenseChart';

function Expenses(props) {
  const [year, setYear] = useState(2022);

  const selYear = (year) => {
    setYear(year);
  };

  // Now the filteredExpense array will contain only the elements of expenses having year matches
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === year;
  });

  // JSX can be used return
  // let expensesItems = <p>No expenses found.</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesItems = filteredExpenses.map((expense) => (
  //     <Item
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    // We have to use builtin props.children in Card.js to use other custom-components in it also className as props.className value
    <Card className="expenses">
      <ExpenseFilter selYear={selYear} />

      {/* In js, statement after && is executed if condition before it is correct */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found.</p> }
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
        return (
          <Item
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
        })
      } */}

      {/* We can also directly store and use variable */}
      {/* {expensesItems} */}

      {/* We can also use separate file to show the contents */}
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />

    </Card>
  );
}

export default Expenses;
