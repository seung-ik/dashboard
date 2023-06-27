import { Route, Routes as ReactRoutes } from 'react-router-dom';
import DashBoard from './dashBoard';
import Login from './login';
import WithdrawHistory from './withdrawHistory';
import SwapHistory from './swapHistory';
import AdminAccount from './adminAccount';

const Router = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/transaction/withdraw" element={<WithdrawHistory />} />
      <Route path="/transaction/swap" element={<SwapHistory />} />
      <Route path="/administrator" element={<AdminAccount />} />
      <Route path="*" element={<div>404</div>} />
    </ReactRoutes>
  );
};

export default Router;
