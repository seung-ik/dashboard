import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>Admin Login</div>
        <input type="text" />
        <input type="text" />
        <button onClick={() => navigate('/')}>로그인</button>
      </div>
    </div>
  );
};

export default Login;
