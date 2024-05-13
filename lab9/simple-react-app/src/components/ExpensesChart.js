import React from "react";
import "./ExpenseChart.css";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ];

    if (props.expenses && props.expenses.length > 0) {
        for (const expense of props.expenses) {
            const expenseMonth = expense.date.getMonth();
            chartDataPoints[expenseMonth].value += expense.amount;
        }
    }

    const maxValue = Math.max(
        ...chartDataPoints.map((dataPoint) => dataPoint.value)
    );

    return (
        <div className="card chart">
            {chartDataPoints.map((dataPoint, index) => (
                <div key={dataPoint.label + index} className="chart-bar">
                    <div className="chart-bar__container">
                        <div
                            className="chart-bar__inner"
                            style={{
                                height:
                                    maxValue > 0
                                        ? (dataPoint.value / maxValue) * 100 +
                                          "%"
                                        : "0",
                            }}
                        ></div>
                    </div>
                    <div className="chart-bar__label">{dataPoint.label}</div>
                </div>
            ))}
        </div>
    );
};

export default ExpensesChart;
