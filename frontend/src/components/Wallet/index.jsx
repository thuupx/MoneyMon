import React, { useEffect, useState } from 'react';
import { getAllUserWallets } from '../../api';
import { Col, Button, Skeleton, Avatar, List, Tag } from 'antd';
import { formatNumberToMoney } from '../../utils/transaction.util';
import { EyeTwoTone } from "@ant-design/icons";
import CreateWalletModal from './CreateWalletModal';
import DetailWallet from './DetailWallet';
const WalletComponent = props => {
    const [list, setList] = useState([]);
    const [initLoading, setInitLoading] = useState(false);
    const [visibleCreateModal, setvisibleCreateModal] = useState(false);
    const [visibleViewModal, setvisibleViewModal] = useState(false);
    const [currentWallet, setCurrentWallet] = useState(null);
    const appendItem = item => setList([...list, item]);
    const updatedItem = item => {
        const clone = [...list]
        const oldItem = clone.find(w => item.id === w.id)
        console.log("oldItem", oldItem)
        const newerList = clone.map(w => oldItem.id === w.id ? item : w);
        console.log("newerList", newerList)
        setList(newerList);
    }
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

    const handleEditWallet = (evt, wallet) => {
        setCurrentWallet(wallet);
        setvisibleViewModal(true);
    }
    return (
        <Col span={16}>
            <Button type="primary" onClick={() => setvisibleCreateModal(!visibleCreateModal)}>Create</Button>
            <CreateWalletModal visible={visibleCreateModal} setVisible={setvisibleCreateModal} addNewWallet={appendItem} />
            {currentWallet && <DetailWallet 
            visible={visibleViewModal} 
            setVisible={setvisibleViewModal} 
            wallet={currentWallet}
            updatedWallet={updatedItem}
             />}
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
                        actions={[
                            <EyeTwoTone onClick={(e) => handleEditWallet(e, item)} />]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://img.icons8.com/cute-clipart/64/000000/wallet.png" />
                                }
                                title={<p>{item.wallet_name}</p>}
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