import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flex: 1 }}>
      <Nav />
      <div
        style={{ flex: 4, border: '2px solid purple', display: 'flex', flexDirection: 'column' }}
      >
        <div
          style={{
            backgroundColor: 'gold',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '20px',
          }}
        >
          <Link to="/login">로그아웃</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
