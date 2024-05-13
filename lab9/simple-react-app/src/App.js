import React, { useState } from "react";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import expensesData from "./data/expenses";
import "./App.css";

const App = () => {
    const [expenses, setExpenses] = useState(expensesData);
    const [isAddingExpense, setIsAddingExpense] = useState(false);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [...prevExpenses, expense];
        });
        setIsAddingExpense(false);
    };

    const startAddExpenseHandler = () => {
        setIsAddingExpense(true);
    };

    const cancelAddExpenseHandler = () => {
        setIsAddingExpense(false);
    };

    return (
        <div>
            {isAddingExpense && (
                <ExpenseForm
                    onSaveExpenseData={addExpenseHandler}
                    onCancel={cancelAddExpenseHandler}
                />
            )}
            {!isAddingExpense && (
                <div
                    className="card expense__form"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <button
                        className="expense__button"
                        onClick={startAddExpenseHandler}
                    >
                        Add New Expense
                    </button>
                </div>
            )}
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
