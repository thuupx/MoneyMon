import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card, Row } from 'antd';

class Tests extends Component {
  state = {
    key: 'app',
  };
  
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render(){
    const tabList = [
      {
        key: '1',
        tab: '1',
      },
      {
        key: '2',
        tab: '2',
      },
      {
        key: '3',
        tab: '3',
      },
      {
        key: '4',
        tab: '4',
      },
      {
        key: '5',
        tab: '5',
      },
      {
        key: '6',
        tab: '6',
      },
      {
        key: '7',
        tab: '7',
      },
      {
        key: '8',
        tab: '8',
      },
      {
        key: '9',
        tab: '9',
      }
    ];  
    
    const contentList = {
      article: <p>article content</p>,
      app:    <p>app content</p>,
      project: <p>project content</p>,
    };
    return (
      <Row justify="start" align='top' style={{ height: 'calc(100vh - 146.1px)' }}>
      <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabkey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>
      </Row>
    );
  }
}  
export default Tests;