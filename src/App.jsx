import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import Image from './Image';

import './assets/css/App.css';

const { Sider } = Layout;

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: 'Files',
    main: () => <h2>Files</h2>,
    id: 1,
    icon: 'file',
  },
  {
    path: '/photos',
    sidebar: 'Photos',
    main: () => <Image />,
    id: 2,
    icon: 'picture',
  },
  {
    path: '/sharing',
    sidebar: 'Sharing',
    main: () => <h2>Sharing</h2>,
    id: 3,
    icon: 'share-alt',
  },
  {
    path: '/links',
    sidebar: 'Links',
    main: () => <h2>Links</h2>,
    id: 4,
    icon: 'link',
  },
  {
    path: '/events',
    sidebar: 'Events',
    main: () => <h2>Events</h2>,
    id: 5,
    icon: 'history',
  },
  {
    path: '/started',
    sidebar: 'Get Started',
    main: () => <h2>Get Started</h2>,
    id: 6,
    icon: 'export',
  },
];

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Sider>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
            {routes.map(route => (
              <Menu.Item key={route.id}>
                <Link to={route.path}>
                  <Icon type={route.icon} />
                  <span>{route.sidebar}</span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Switch>
            {routes.map(route => (
              <Route key={route.id} path={route.path} exact={route.exact} children={<route.main />} />
            ))}
          </Switch>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
