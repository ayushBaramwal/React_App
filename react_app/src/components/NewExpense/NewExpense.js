import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {

  const [formShown, setFormShown] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: props.expenseLength
    }
    console.log(expenseData)
    props.onSaving(expenseData)
    setFormShown(!formShown);
  }

  const changeFormHandler = () => {
    setFormShown(!formShown);
  }

  return (
    <div className="new-expense">
      { formShown && <ExpenseForm onSavingExpenseForm={saveExpenseDataHandler} hideForm={changeFormHandler} /> }
      { !formShown && <button onClick={changeFormHandler}>Add Expenses</button> }
    </div>
  );
};

export default NewExpense;