import React from 'react';
import { Row, Col, Card, Carousel } from 'antd';
import Meta from 'antd/lib/card/Meta';
export default function Home(props) {
    return (
        <Carousel autoplay >
            <img style={{ border: '5px' }} alt="example" width="100%" height="640px" src="https://images.unsplash.com/photo-1554672723-d42a16e533db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
            <img style={{ border: '5px' }} alt="example" width="100%" height="640px" src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
            <img style={{ border: '5px' }} alt="example" width="100%" height="640px" src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        </Carousel>
    )
}