import React from 'react';
import { Row } from 'antd';
import WeekStatistic from '../../components/Statistic/Week';

const StatisticPage = props => {
    return (
        <Row justify="center" align='top' style={{ height: 'calc(100vh - 146.1px)' }}>
            <WeekStatistic></WeekStatistic>
        </Row>
    )
}
export default StatisticPage;