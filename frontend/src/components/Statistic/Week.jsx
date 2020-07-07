import React, { useState, useEffect } from 'react';
import { Row, Col, DatePicker, Button, message } from 'antd';
import { Bar, Pie } from 'react-chartjs-2';
import moment from 'moment';
import { getStatistics } from '../../api/statistic.api';
import { IncomeDatasets, ExpenseDatasets } from './chart-option';
const { RangePicker } = DatePicker;

const _data = {
    labels: [],
    datasets: [
        {
            ...IncomeDatasets,
            data: []
        },
        {
            ...ExpenseDatasets,
            data: []
        }
    ]
};
const stylePie = {
    backgroundColor: [
        'rgba(75,192,192,0.8)',
        'rgba(255,99,132,0.8)',
    ],
    hoverBackgroundColor: [
        'rgba(75,192,192,1)',
        'rgba(255,99,132,1)',
    ]
}
const dataPie = {
    labels: [
        'Total Income',
        'Total Expense',
    ],
    datasets: [{
        data: [0, 0],
        ...stylePie
    }]
};
const dateFormat = 'YYYY-MM-DD';
const currentDate = new Date().toJSON().slice(0, 10)//.replace(/-/g, '/');
const WeekStatistic = props => {
    const [data, setData] = useState(_data);
    const [statistic, setStatistic] = useState(dataPie);
    const fetchDatasets = (start_date, end_date) => {
        getStatistics({ start_date, end_date })
            .then(json => {
                console.log("fetchDatasets -> json", json)
                if (json.length === 0) {
                    message.info('No statistics for range date');
                    const dates = [];
                    let stDate = moment(start_date, dateFormat);
                    let eDate = moment(end_date, dateFormat);
                    for (let current = stDate; current <= eDate; current.add(1, 'days')) {
                        dates.push(current.format(dateFormat))
                    }
                    console.log('dates', dates);
                    setData(prev => {
                        return {
                            labels: dates,
                        }
                    });
                    setStatistic(prev => ({
                        datasets: [{
                            data: [0, 0],
                            ...stylePie
                        }]
                    }));
                    return;
                }
                const income = json.map(transaction => transaction.action === 'IN' && transaction.amount);
                const expense = json.map(transaction => transaction.action === 'OUT' && transaction.amount);
                const createdAt = json.map(transaction => transaction.created_at.split('T')[0]);
                const dataIncome = {
                    ...IncomeDatasets,
                    data: income
                }
                const dataExpense = {
                    ...ExpenseDatasets,
                    data: expense
                }
                setData(prev => {
                    return {
                        labels: createdAt,
                        datasets: [dataIncome, dataExpense]
                    }
                });
                const reducer = (acc, curr) => {
                    if (!curr) curr = 0;
                    return Number(acc) + Number(curr);
                }
                const totalIncome = income.reduce(reducer, 0);
                const totalExpense = expense.reduce(reducer, 0);
                setStatistic(prev => {
                    return {
                        datasets: [{
                            data: [totalIncome, totalExpense],
                            ...stylePie
                        }]
                    }
                })
            })
    }
    useEffect(() => {
        const initGraph = async () => {
            const today = moment(currentDate, dateFormat);
            console.log("initGraph -> currentDate", currentDate)
            const latestWeeks = today.subtract(7, 'days').format(dateFormat);
            fetchDatasets(latestWeeks, currentDate);
        };
        initGraph();
    }, []);
    const onChange = (date, dateString) => {
        if (!date) return;
        fetchDatasets(dateString[0], dateString[1]);
    }
    return (
        <Row>
            <Col xs={24} sm={24} md={8} lg={8}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit aliquid veritatis facere.
                <RangePicker onChange={onChange} />
                <Pie data={statistic} />
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
                <Bar data={data} />
            </Col>
        </Row>
    );
}

export default WeekStatistic;