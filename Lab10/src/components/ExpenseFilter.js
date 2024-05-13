import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
    const yearChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <label className="expenses-filter__label" htmlFor="year">
                Filter by year
            </label>
            <select
                className="expenses-filter__select"
                id="year"
                onChange={yearChangeHandler}
                value={props.selectedYear}
            >
                {props.availableYears.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ExpenseFilter;
