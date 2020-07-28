import React, { useState, useEffect } from 'react';
import { Card, Col, Layout, Row, Radio } from 'antd';
import useAxios from 'axios-hooks';

import isEmpty from './utils/isEmpty';

const { Header } = Layout;
const { Meta } = Card;
const apiUrl = './mockData.json';

const sortByName = arr => {
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });
};

const sortBySize = arr => {
  arr.sort((a, b) => (a.size > b.size ? 1 : -1));
};

const sortByModified = arr => {
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });
};

const Image = () => {
  const [{ data, loading, error }] = useAxios(apiUrl);
  const [state, setState] = useState(data);

  useEffect(() => {}, [state, data]);

  const filterData = isEmpty(state) ? data : state;

  const sortName = () => {
    setState(prevCount => prevCount - 1);
    sortByName(data);
    return data;
  };

  const sortSize = () => {
    setState(data);
    sortBySize(data);
    return data;
  };

  const sortModified = () => {
    setState(prevCount => prevCount - 2);
    sortByModified(data);
    return data;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div style={{ background: '#ECECEC', padding: '10px' }}>
      <Header style={{ background: '#ECECEC', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Radio.Group>
          <Radio.Button value="large" onClick={() => sortName(state)}>
            Name
          </Radio.Button>
          <Radio.Button value="large" onClick={() => sortSize(state)}>
            Size
          </Radio.Button>
          <Radio.Button value="large" onClick={() => sortModified(state)}>
            Modified
          </Radio.Button>
        </Radio.Group>
      </Header>
      <Row gutter={16}>
        {filterData.map(item => (
          <Col span={8} key={item.id}>
            <Card hoverable cover={<img alt={item.name} src={item.url} />}>
              <Meta title={item.name} description={`${item.data} ${item.size}MB`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Image;
