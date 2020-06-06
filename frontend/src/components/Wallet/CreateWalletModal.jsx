import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Select, Modal, Button, message, notification, Row, Col } from 'antd';
import { CURRENCIES } from '../../constants/currency';
import MoneyInput from '../Transaction/MoneyInput';
import { createWallet } from '../../api/wallet.api';
import { createNewTransaction } from '../../actions/transaction.action';

const CreateWalletModal = props => {
    const { visible, setVisible, addNewWallet } = props;
    const [walletName, setWalletName] = useState('');
    const [description, setDescription] = useState('');
    const [balance, setBalance] = useState('');
    const [walletType, setWalletType] = useState('');
    const [balanceCurrency, setBalanceCurrency] = useState('');
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const w_types = ["Basic", "Digital", "Card", "Credit"]
    const handleOk = async () => {
        if (walletName === "") {
            message.error("Please enter a wallet name");
            return;
        }
        if (balance === "") {
            message.error("Please enter init balance");
            return;
        }
        if (walletType === "") {
            message.error("Please choose a wallet type");
            return;
        }
        setLoading(true);
        const payload = {
            wallet_name: walletName,
            wallet_type: walletType,
            description,
            balance,
            balance_currency: balanceCurrency,
        }
        try {
            const response = await createWallet(payload);
            addNewWallet(response);
            const { id, wallet_name, balance } = response;
            message.success(`Created wallet successfully with name ${response.wallet_name}`);
            const transaction = {
                category: 1,
                from_wallet: id,
                action: "IN",
                amount: balance,
                name: `Init wallet ${wallet_name}`
            }
            dispatch(createNewTransaction(transaction));
        } catch (error) {
            console.log("handleOk -> error", error)
            notification["error"]({
                title: "Error",
                message: error.detail || "Error while creating wallet"
            });
        }
        setLoading(false);
        setVisible(false);
    }
    const handleCancel = () => {
        setVisible(false);
    }
    return (
        <Modal
            visible={visible}
            title="New Wallet"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button
                    key="create"
                    type="primary"
                    loading={loading}
                    onClick={handleOk}>
                    Create
                </Button>,
            ]}
        >
            <Input.Group >
                <Input
                    size="large"
                    addonBefore="Name"
                    type="text"
                    value={walletName}
                    onChange={(e) => setWalletName(e.target.value)}
                    placeholder="Enter wallet name" />
                <Input
                    allowClear
                    size="large"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Wallet description" />
                <MoneyInput  size="large" addonBefore="Balance" value={balance} onChange={setBalance} />
                <Row 
                style={{ paddingBottom: '10px' }}
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                >
                <Col span={12}>
                    <Select
                    size="large"
                    allowClear
                    placeholder="Wallet type"
                    style={{ width: '100%' }}
                    onChange={value => setWalletType(value)}
                >
                    {w_types.map(type => (<Select.Option value={type} key={type}>{type}</Select.Option>))}
                    </Select>
                </Col>
                <Col span={12}>
                    <Select
                    size="large"
                    showSearch
                    allowClear
                    placeholder="Currency"
                    style={{ width: '100%' }}
                    onChange={value => setBalanceCurrency(value)}
                    defaultValue="VND"
                >
                    {CURRENCIES.map(currency => (<Select.Option value={currency} key={currency}>{currency}</Select.Option>))}
                    </Select>
                </Col>
                </Row>
            </Input.Group>
        </Modal>
    )
}
export default CreateWalletModal;