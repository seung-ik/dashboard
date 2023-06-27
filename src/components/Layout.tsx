import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ title, children }) => {
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
            justifyContent: 'space-between',
            padding: '20px',
          }}
        >
          <div>{title}</div>
          <Link to="/login">로그아웃</Link>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
