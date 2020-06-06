import React, { useEffect, useState } from 'react';
import { getAllCategories, createCategory } from '../../api';
import { Row, Col, Table, Button, Tooltip, Modal, Input, Select, Checkbox, notification, message } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const ListCategory = props => {
    const [categories, setCategories] = useState([]);
    const [visible, setVisible] = useState(false);
    const [catName, setCatName] = useState('');
    const [catParent, setCatParent] = useState('');
    const [isParent, setIsParent] = useState(false);
    useEffect(() => {
        const fetchCategories = async () => {
            let cats = await getAllCategories();
            cats = cats.map(category => ({ ...category, key: category.id }));
            setCategories(cats);
        };
        fetchCategories();
    }, []);
    const columns = [
        {
            title: 'Category',
            dataIndex: 'cat_name',
            key: 'id',
        },
        {
            title: 'Parent',
            dataIndex: 'cat_parent',
            key: 'cat_parent',
            render: (text, row) => {
                const parent = row.cat_parent ? categories.filter(cat => cat.id === row.cat_parent) : [];
                return parent.length > 0 && parent[0].cat_name;
            }
        },
    ];
    const handleCancel = (event) => {
        setVisible(false);
    };
    const reset = () => {
        setCatName("");
        setIsParent(false);
        setCatParent("");
        setVisible(false);
    }
    const handleOk = async (event) => {
        if (catName.length === 0) {
            message.error("Please enter a category name");
            return;
        }
        const payload = {
            cat_name: catName,
            is_parent: isParent,
            cat_parent: catParent
        }
        try {
            const createdCat = await createCategory(payload);
            if (createdCat.id) {
                notification["success"]({
                    message: "Create Category success with name: " + createdCat.cat_name,
                    title: "Created"
                });
                const newCats = [...categories, { ...createdCat, key: createdCat.id }];
                setCategories(newCats);
                reset();
            }
        } catch (error) {
            console.log("handleOk -> error", error)
            notification["error"]({
                message: error.message,
                title: "Error while creating category"
            });
            reset();
        }
    }
    return (
        <Row style={{ height: 'calc(100vh - 140px)' }}>
            <Col>
                <Table
                    bordered={true}
                    dataSource={categories}
                    columns={columns}
                    tableLayout='auto'
                />
            </Col>
            <Col>
                <Tooltip title="New Category">
                    <Button
                        icon={<PlusCircleOutlined />}
                        type="primary"
                        shape="circle"
                        onClick={() => setVisible(true)}
                    ></Button>
                </Tooltip>
            </Col>
            <Modal
                visible={visible}
                title="New Category"
                onOk={(e) => handleOk(e)}
                onCancel={handleCancel}
            >
                <Input.Group >
                    <Input
                        size="large"
                        addonBefore="Name"
                        type="text"
                        value={catName}
                        onChange={(e) => setCatName(e.target.value)}
                        placeholder="Enter category name" />
                    <Select
                        size="large"
                        allowClear
                        placeholder="Select category parent"
                        style={{ width: '100%' }}
                        onChange={value => setCatParent(value)}
                    >
                        {categories.length > 0 &&
                            categories.map(cat => (<Select.Option value={cat.id} key={cat.id}>{cat.cat_name}</Select.Option>))}
                    </Select>
                    <Checkbox onChange={(e) => setIsParent(!isParent)}>Is category parent?</Checkbox>
                </Input.Group>
            </Modal>
        </Row>
    )
}
export default ListCategory;