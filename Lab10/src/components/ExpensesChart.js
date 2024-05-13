import React from "react";
import "./ExpenseChart.css";

const ExpensesChart = (props) => {
    // Обробка даних про витрати
    const chartDataPoints = [
        { label: "Січ", value: 0 },
        { label: "Лют", value: 0 },
        { label: "Бер", value: 0 },
        { label: "Кві", value: 0 },
        { label: "Тра", value: 0 },
        { label: "Чер", value: 0 },
        { label: "Лип", value: 0 },
        { label: "Сер", value: 0 },
        { label: "Вер", value: 0 },
        { label: "Жов", value: 0 },
        { label: "Лис", value: 0 },
        { label: "Гру", value: 0 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.toDate().getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    const maxValue = Math.max(
        ...chartDataPoints.map((dataPoint) => dataPoint.value)
    );

    return (
        <div className="card chart">
            {chartDataPoints.map((dataPoint) => (
                <div key={dataPoint.label} className="chart-bar">
                    <div className="chart-bar__container">
                        <div
                            className="chart-bar__inner"
                            style={{
                                height:
                                    maxValue > 0
                                        ? (dataPoint.value / maxValue) * 100 +
                                          "%"
                                        : 0,
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
