import React, { useState } from 'react';
import { Row, Col, Statistic, Progress } from 'antd';
import CanvasJSReact from '../../libs/canvasjs.react';
import { useEffect } from 'react';
import { getTransactionsFromWallet } from '../../api';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const initData = 
const initOptions = (dataPoints) => ({
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
    const [options, setOptions] = useState(initOptions({ y: 100, label: "Category Name" }));
    console.log("SummaryContent -> wallet", wallet);
    useEffect(() => {
        //fetch all transactions of the wallet
        const fetchTransOfWallet = async () => {
            const listTransactions = await getTransactionsFromWallet(wallet.id);
            console.log("fetchTransOfWal -> listTransactions", listTransactions)
            setTransactionsWallet(listTransactions);
            const newDataPoints = listTransactions.map(tran => {
                let sign = "";
                if (tran.action === "IN") sign = "+"
                else sign = "-";
                return { label: tran.category_name, y: `${sign}${tran.amount}` };
            });
            
            // const existCat = []
            // listTransactions.forEach(tran => {
            //     if (!existCat.includes(tran["category_name"]))
            //         existCat.push(tran["category_name"])
            // });
            // console.log("fetchTransOfWal -> existCat", existCat)

            const rest =
                listTransactions
                    .map(tran => tran.action === "IN" ? parseFloat(tran.amount) : -parseFloat(tran.amount))
                    .reduce((acc, curr) => acc + curr, 0);

            const used = parseFloat(wallet.balance) - rest;
            console.log("fetchTransOfWal -> wallet.balance", wallet.balance)
            setDataPoints([...newDataPoints, { y: rest, label: "Balance" }]);
        }
        fetchTransOfWallet();
    }, [])

    return (
        <Row>
            <Col span={12}>
                <h1>All transactions by category from wallet {wallet.wallet_name}</h1>
                <CanvasJSChart options={initOptions(dataPoints)} />
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