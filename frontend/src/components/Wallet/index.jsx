import React, { useEffect, useState } from 'react';
import { getAllUserWallets } from '../../api';
import { Col, Button, Skeleton, Avatar, List, Tag } from 'antd';
import { formatNumberToMoney } from '../../utils/transaction.util';
import { EditTwoTone, EyeTwoTone } from "@ant-design/icons";
import CreateWalletModal from './CreateWalletModal';
const WalletComponent = props => {
    const [list, setList] = useState([]);
    const [initLoading, setInitLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const appendItem = item => setList([...list, item]);
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
        <Col span={16}>
            <Button type="primary" onClick={() => setVisible(!visible)}>Create</Button>
            <CreateWalletModal visible={visible} setVisible={setVisible} addNewWallet={appendItem} />
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                dataSource={list}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                renderItem={item => (
                    <List.Item
                        actions={[<EditTwoTone />, <EyeTwoTone />]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://img.icons8.com/cute-clipart/64/000000/wallet.png" />
                                }
                                title={<a href="/">{item.wallet_name}</a>}
                                description={item.description}
                            />
                            <Tag color="green">
                                {formatNumberToMoney(Number(item.balance)) + " " + item.balance_currency}
                            </Tag>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </Col>
    )
}

export default WalletComponent;