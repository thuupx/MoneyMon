import React from 'react';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Card } from 'antd';

import { Pie, yuan } from 'ant-design-pro/lib/Charts';
const salesPieData = [
    {
      x: 'Khoảng thu',
      y: 5000000,
    },
    {
      x: 'Khoảng chi',
      y: 2000000,
    },
    {
      x: 'Khoảng vay',
      y: 1000000,
    }];

          
const PieChart = props => {
    return (
        <Card.Grid 
        style={{
            width: "30%",
            height: "100%",
        }}
        >
            <Pie
            subTitle="Chart Test"
            total={() => (
            <span
                dangerouslySetInnerHTML=
                {{
                __html: yuan(salesPieData.reduce((pre, now) => now.y + pre, 0)),
                }}
            />
            )}
            hasLegend
            data={salesPieData}
            valueFormat={val => <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />}
            height={400}
            />
        </Card.Grid>  
    )
}
export default PieChart;