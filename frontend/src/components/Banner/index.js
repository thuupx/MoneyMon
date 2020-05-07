import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { DownOutlined } from '@ant-design/icons';

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          <div key="title" {...dataSource.title}>
            {dataSource.title.children.match(
              /\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/
            ) ? (
              <img src={dataSource.title.children} width="100%" alt="img" />
              ) : (
                dataSource.title.children
              )}
          </div>
          <div key="content" {...dataSource.content}>
            {dataSource.content.children}
          </div>
          <Button ghost key="button" {...dataSource.button}>
            {dataSource.button.children}
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
