import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
import './App.css';


const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 451,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Medications",
    amount: 28,
    date: new Date(2019, 8, 22),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <div className='title'>
      <h1 className="title-text">Expense Tracker</h1>
      </div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses DummyExp={expenses}></Expenses>
    </div>
  );
};

export default App;
