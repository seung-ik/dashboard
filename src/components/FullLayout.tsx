import React from 'react';
import { Outlet } from 'react-router-dom';

const FullLayout = () => {
  return (
    <div
      style={{
        background: 'gray',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Outlet />
    </div>
  );
};

export default FullLayout;
