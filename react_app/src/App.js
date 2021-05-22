import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
  
const DummyExpense = [
  { id: 0, title: "Car Insurance", amount: "500", date: new Date(2021, 5, 2) },
  { id: 1, title: "Shopping", amount: "800", date: new Date(2019, 3, 24) },
  { id: 2, title: "Marketting", amount: "950", date: new Date(2021, 1, 18) },
  { id: 3, title: "Electricity Bill", amount: "440", date: new Date(2022, 2, 25) },
];

function App() {

  const [expenses, setExpenses] = useState(DummyExpense);

  const addExpenseHandler = (expense) => {
    setExpenses(() => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onSaving={addExpenseHandler} expenseLength={expenses.length} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
