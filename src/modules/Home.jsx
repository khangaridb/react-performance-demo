import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="layout" style={{ height: '100vh', padding: '20px' }}>
      <Content>
        <center>
          <Row gutter={16} style={{ paddingBottom: '200px' }}>
            <Col span={4}>
              <Card bordered={false}>
                <Link to="/virtualize">Virtualize</Link>
              </Card>
            </Col>
            <Col span={4}>
              <Card bordered={false}>
                <Link to="/memo">Memoize</Link>
              </Card>
            </Col>
            <Col span={4}>
              <Card bordered={false}>
                <Link to="/wasm">WASM</Link>
              </Card>
            </Col>
            <Col span={4}>
              <Card bordered={false}>
                <Link to="/webworkers">Web workers</Link>
              </Card>
            </Col>
          </Row>
        </center>
      </Content>
    </Layout>
  );
};

export default Home;
