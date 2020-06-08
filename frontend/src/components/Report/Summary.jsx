import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import SummaryContent from './SumaryContent';
import { getAllUserWallets } from '../../api';
const { TabPane } = Tabs;
const ReportSummary = props => {
    const [list, setList] = useState([]);
    const [initLoading, setInitLoading] = useState(false);
    useEffect(() => {
        const fetchWallets = async () => {
            setInitLoading(true);
            const wallets = await getAllUserWallets();
            console.log("fetchWallets -> wallets", wallets)
            setList(wallets);
            setInitLoading(false);
        };
        fetchWallets();
    }, []);
    return (
        <div style={style}>
            <h1 style={{ fontSize: 24 }}>Budget Report</h1>
            <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: 'calc(100vh - 140px)' }}>
                {list.length > 0 && list.map(wallet => (
                    <TabPane tab={`${wallet.wallet_name}`} key={wallet.id}>
                        <SummaryContent style={{ width: '100%' }} wallet={wallet} />
                    </TabPane>
                ))}
            </Tabs>
        </div>
    )
}
const style = {
    textAlign: 'center',
    width: '100%'
}
export default ReportSummary