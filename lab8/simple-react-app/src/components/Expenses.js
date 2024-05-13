import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    return (
        <div>
            <h2>My Expenses template</h2>
            <Card className="expenses">
                {props.expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
