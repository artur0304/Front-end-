import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        };

        props.onSaveExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    };

    return (
        <form className="card expense__form" onSubmit={submitHandler}>
            <div className="form-input__container">
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div>
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="form-buttons__container">
                <button
                    className="expense__button"
                    type="button"
                    onClick={props.onCancel}
                >
                    Cancel
                </button>
                <button className="expense__button" type="submit">
                    Add Expense
                </button>
            </div>
        </form>
    );
};

export default ExpenseForm;
