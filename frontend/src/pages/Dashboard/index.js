import React from 'react';
import { Row } from 'antd';
import PieChart from '../../components/Chart/Pie';
import BarChart from '../../components/Chart/Bar';

const Dashboard = props => {
    return (
        <div>
            <Row justify="start" align='top' style={{ height: 'calc(100vh - 146.1px)' }}>
              <PieChart/>             
              <BarChart/>
            </Row>
        </div>
        
    )
}
export default Dashboard