import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import { getExpenses, addExpense } from "./components/Firebase";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
    const [expenses, setExpenses] = useState();
    const [isAddingExpense, setIsAddingExpense] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const expensesData = await getExpenses();
                setExpenses(expensesData);
            } finally {
                setLoading(false);
            }
        };
        fetchExpenses();
    }, []);

    const addExpenseHandler = async (expense) => {
        await addExpense(expense);
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
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
            {loading ? (
                <div
                    className="card expenses"
                    style={{
                        color: "white",
                        display: "flex",
                        "justify-content": "center",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <Expenses expenses={expenses} />
            )}
        </div>
    );
};

export default App;
