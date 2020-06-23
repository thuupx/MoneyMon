import React, { useState } from 'react';
import { Row, Col, Statistic, Progress } from 'antd';
import CanvasJSReact from '../../libs/canvasjs.react';
import { useEffect } from 'react';
import { getTransactionsFromWallet } from '../../api';
import { mergeDupTransactionByCategory } from '../../utils/transaction.util';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const initData = 
const setOptions = (dataPoints) => ({
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title: {
        text: "Rate"
    },
    data: [{
        type: "pie",
        indexLabel: "{label}: {y}VND",
        startAngle: -90,
        dataPoints
    }]
})
export default function SummaryContent(props) {
    const { wallet } = props;
    const [transactionsWallet, setTransactionsWallet] = useState([]);
    const [dataPoints, setDataPoints] = useState([{ y: 100, label: "Category Name" }]);
    // const [options, setOptions] = useState(initOptions({ y: 100, label: "Category Name" }));
    useEffect(() => {
        //fetch all transactions of the wallet
        const fetchTransOfWallet = async () => {
            const listTransactions = await getTransactionsFromWallet(wallet.id);
            //remove init wallet transactions
            const idx = listTransactions.findIndex(tran => tran.category === 1);
            listTransactions.splice(idx, 1);
            console.log("fetchTransOfWal -> listTransactions", listTransactions)
            setTransactionsWallet(listTransactions);

        }
        fetchTransOfWallet();
    }, [])

    useEffect(() => {
        const tempArray = [];
        const duplicateCat = [];
        transactionsWallet.forEach((tran => {

            if (tempArray.includes(tran.category) && !duplicateCat.includes(tran.category))
                duplicateCat.push(tran.category);
            tempArray.push(tran.category);
        }));
        console.log("fetchTransOfWal -> duplicateCat", duplicateCat);
        let newDataPoints = [];
        transactionsWallet.forEach(tran => {
            // !tempArray.includes(tran.category);
            if (!duplicateCat.includes(tran.category)) {
                let sign = "";
                if (tran.action === "IN") sign = "+"
                else sign = "-";
                newDataPoints.push({ label: tran.category_name, y: `${sign}${tran.amount}` })
            }
        });
        console.log("fetchTransOfWal -> newDataPoints", newDataPoints)

        const dataPointsMerged = mergeDupTransactionByCategory(transactionsWallet, duplicateCat);
        console.log("fetchTransOfWal -> dataPointsMerged", dataPointsMerged)
        const rest =
            transactionsWallet
                .map(tran => tran.action === "IN" ? parseFloat(tran.amount) : -parseFloat(tran.amount))
                .reduce((acc, curr) => acc + curr, 0);

        const used = parseFloat(wallet.balance) + rest;
        // if(newDataPoints.length===0) 
        setDataPoints([...newDataPoints, ...dataPointsMerged, { y: used, label: "Số dư" }]);
    }, [transactionsWallet])
    return (
        <Row>
            <Col span={12}>
                <h1>All transactions by category from wallet {wallet.wallet_name}</h1>
                <CanvasJSChart options={setOptions(dataPoints)} />
            </Col>
            <Col span={12}>
                <Statistic
                    title="Balance"
                    value={wallet.balance}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    // prefix={<ArrowUpOutlined />}
                    suffix={wallet.balance_currency}
                />

                <Progress
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={99.9}
                    status="active"
                    type="circle"
                />
            </Col>
        </Row>
    )
}