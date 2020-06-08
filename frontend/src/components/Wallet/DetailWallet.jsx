import React, { useState } from 'react';
import Modal from 'antd/lib/modal';
import { Button, Input, Select, Switch, notification, message } from 'antd';
import { w_types, CURRENCIES } from '../../constants/currency';
import MoneyInput from '../Transaction/MoneyInput';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { updateWallet } from '../../api/wallet.api';


const DetailWallet = (props) => {
    const { wallet } = props;
    const {
        id,
        wallet_name = null,
        wallet_type,
        description: desc,
        balance,
        balance_currency
    } = wallet
    const [edit, setEdit] = useState(false);
    const [walletName, setWalletName] = useState(wallet_name);
    const [description, setDescription] = useState(desc);
    const [walletType, setWalletType] = useState(wallet_type);
    const [balanceCurrency, setBalanceCurrency] = useState(balance_currency);
    const [loading, setLoading] = useState(false)
    const handleOk = async e => {
        if (walletName === "") {
            message.error("Please enter a wallet name");
            return;
        }
        if (balanceCurrency === "") {
            message.error("Please choose balance currency");
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
            balance_currency: balanceCurrency,
        }
        try {
            const response = await updateWallet(id, payload);
            console.log("DetailWal -> response", response)
            message.success(`Updated wallet ${response.id} successfully`);
            props.updatedWallet(response);
            console.log(response);
        } catch (error) {
            console.log("handleOk -> error", error)
            notification["error"]({
                title: "Error",
                message: error.detail || "Error while creating wallet"
            });
        }
        setLoading(false);
        props.setVisible(false);
    }
    const handleCancel = () => props.setVisible(false);
    return (<Modal
        visible={props.visible}
        title={wallet.wallet_name}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
            <Button key="back" onClick={handleCancel}>
                Close
                </Button>,
            edit && <Button
                key="Update"
                type="primary"
                loading={loading}
                onClick={handleOk}>
                Update
                </Button>,
        ]}
    >
        <Input.Group >
            <Switch
                checkedChildren={<EditOutlined />}
                unCheckedChildren={<EyeOutlined />}
                defaultChecked={edit}
                onChange={(checked, event) => setEdit(checked)}
            />
            <Input
                disabled={!edit}
                addonBefore="Name"
                type="text"
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
                placeholder="Enter wallet name" />
            <Input
                disabled={!edit}
                addonBefore="Description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Wallet description" />
            <MoneyInput disabled addonBefore="Balance" value={balance} onChange={(e) => { }} />
            <Select
                disabled={!edit}
                allowClear
                placeholder="Select wallet type"
                style={{ width: '100%' }}
                defaultValue={walletType}
                onChange={value => setWalletType(value)}
            >
                {w_types.map(type => (<Select.Option value={type} key={type}>{type}</Select.Option>))}
            </Select>
            <Select
                disabled={!edit}
                showSearch
                allowClear
                placeholder="Select currency"
                style={{ width: '100%' }}
                onChange={value => setBalanceCurrency(value)}
                defaultValue={balanceCurrency}
            >
                {CURRENCIES.map(currency => (<Select.Option value={currency} key={currency}>{currency}</Select.Option>))}
            </Select>
        </Input.Group>
    </Modal>)
}
export default DetailWallet;