import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Select, Row, Col, DatePicker } from 'antd';
import MoneyInput from './MoneyInput';
import { getAllCategories, getAllUserWallets } from '../../api';
const CreateTransactionModal = props => {
    const [categories, setCategories] = useState([]);
    const [wallet, setWallet] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedWallet, setSelectedWallet] = useState('');
    const [selectedAction, setSelectedAction] = useState('');
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    useEffect(() => {
        const fetchCategories = async () => {
            const cats = await getAllCategories();
            setCategories(cats);
        }
        const fetchWallets = async () => {
            const wallets = await getAllUserWallets();
            setWallet(wallets);
        }
        fetchWallets();
        fetchCategories();
    }, [])
    
    return (
        <Modal
            visible={props.visible}
            title="Create new transaction"
            onOk={() => props.handleOk({
                category: selectedCategory,
                from_wallet: selectedWallet,
                action: selectedAction,
                amount,
                name
            })}
            onCancel={() => props.handleCancel(false)}
            footer={[
                <Button key="back" onClick={() => props.handleCancel(false)}>
                    Cancel
                </Button>,
                <Button
                    key="create"
                    type="primary"
                    loading={props.loading}
                    onClick={() => props.handleOk({
                        category: selectedCategory,
                        from_wallet: selectedWallet,
                        action: selectedAction,
                        amount,
                        name
                    })}>
                    Create
                </Button>,
            ]}
        >
            <Input.Group>
                <Row 
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                >
                    <Col span={18}>
                        <Input
                        size="large"
                        addonBefore="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter transaction name" />
                    </Col>
                    <Col span={6}>
                        <DatePicker
                        size="large"
                        placeholder="Date"
                        />
                    </Col>
                </Row>
                <Row 
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                >
                    <Col span={8}>
                        <Select
                            size="large"
                            placeholder="Wallet"
                            style={{ width: '100%' }}
                            onChange={value => setSelectedWallet(value)}
                        >
                        {wallet.length > 0 && wallet.map(w => {
                            return (
                                <Select.Option
                                    
                                    value={w.id}
                                    key={w.id}
                                >
                                    <div style={{float: 'left'}}>
                                        <div style={{color: '#000'}}>{w.wallet_name}</div>
                            <div style={{fontSize: '14'}} >Balance: {w.balance} {w.balance_currency}</div>
                                    </div>
                                </Select.Option>
                            )
                        })}
                        </Select>
                    </Col>
                    <Col span={8}>
                        <Select
                            size="large"
                            placeholder="Category"
                            style={{ width: '100%' }}
                            onChange={value => setSelectedCategory(value)}
                            >
                            {categories.length > 0 && categories.map(category => {
                                return (
                                    <Select.Option
                                        value={category.id}
                                        key={category.id}
                                    >
                                        {category.cat_name}
                                    </Select.Option>
                                )
                            })}
                        </Select>
                    </Col>
                    <Col span={8}>
                    <Select
                        size="large"
                        placeholder="Action"
                        style={{ width: '100%' }}
                        onChange={value => setSelectedAction(value)}
                        >
                        <Select.Option value="IN">Khoảng thu</Select.Option>
                        <Select.Option value="OUT">Khoảng chi</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <MoneyInput size="large" addonBefore="Amount" value={amount} onChange={setAmount} />          
            </Input.Group>
        </Modal>)
}

export default CreateTransactionModal;