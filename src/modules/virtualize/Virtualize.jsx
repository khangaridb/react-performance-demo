import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const Virtualize = () => {
  return (
    <Layout className="layout" style={{ height: '100vh', padding: '20px', margin: 'auto' }}>
      <h2>Do not forget to launch React Dev tools</h2>
      <Content>
        <center>
          <Row gutter={16} style={{ paddingBottom: '200px' }}>
            <Col span={8}>
              <Card bordered={false}>
                <Link to="/virtualize/virtualized">Virtualized</Link>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Link to="/virtualize/not-virtualized">Not Virtualized</Link>
              </Card>
            </Col>
          </Row>
        </center>
      </Content>
    </Layout>
  );
};

export default Virtualize;
