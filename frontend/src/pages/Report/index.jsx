import React from 'react';
import ReportSummary from '../../components/Report/Summary';
import Row from 'antd/lib/row';

export default function ReportPage(props) {
    return (<Row justify="start" align='top' style={{ height: 'calc(100vh - 146.1px)' }}>
        <ReportSummary />
    </Row>)
}