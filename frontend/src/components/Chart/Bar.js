import React from 'react';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Card } from 'antd';
import { Bar } from 'ant-design-pro/lib/Charts';
const salesData = [];
for (let i = 0; i < 12; i += 1) {
    salesData.push({
      x: `T${i + 1}`,
      y: Math.floor(Math.random() * 1000000) + 200,
    });
  }


const BarChart = props => {
    return (
        <Card.Grid 
            style={{
                width: "70%",
                height: "100%"
            }}
            >
            <Bar 
            height={300}
            title="Chart test" 
            data={salesData} />
        </Card.Grid>          
    )
}
export default BarChart;