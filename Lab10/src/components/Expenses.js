import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    let filteredExpenses = props.expenses;

    if (!filteredExpenses || filteredExpenses.length === 0) {
        return <Card className="expenses">No expenses</Card>;
    }

    filteredExpenses = props.expenses.filter((expense) => {
        return (
            filteredYear === "" ||
            expense.date.toDate().getFullYear().toString() === filteredYear
        );
    });

    return (
        <div>
            {/* <h2>My Expenses template</h2> */}
            <Card className="expenses">
                <ExpenseFilter
                    selectedYear={filteredYear}
                    onChangeFilter={filterChangeHandler}
                    availableYears={getAvailableYears(props.expenses)}
                />
                <ExpensesChart expenses={filteredExpenses} />
                {filteredExpenses.map((expense) => (
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

const getAvailableYears = (expenses) => {
    const years = new Set();
    expenses.forEach((expense) => {
        years.add(expense.date.toDate().getFullYear().toString());
    });
    return Array.from(years);
};

export default Expenses;
