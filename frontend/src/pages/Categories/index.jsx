import React from 'react';
import CategoryComponent from '../../components/Categories';
import { Row } from 'antd';


const CategoryPage = props => {
    return (
        <Row justify="start" align='top' style={{ height: 'calc(100vh - 146.1px)' }}>
            <CategoryComponent {...props}></CategoryComponent>
        </Row>
    )
}
export default CategoryPage;