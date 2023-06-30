import { Route, Routes as ReactRoutes } from 'react-router-dom';
import DashBoard from './dashBoard';
import Login from './login';
import WithdrawHistory from './withdrawHistory';
import SwapHistory from './swapHistory';
import AdminAccount from './adminAccount';
import Layout from '@components/Layout';
import FullLayout from '@components/FullLayout';

const Router = () => {
  return (
    <>
      <ReactRoutes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="transaction/withdraw" element={<WithdrawHistory />} />
          <Route path="transaction/swap" element={<SwapHistory />} />
          <Route path="administrator" element={<AdminAccount />} />
        </Route>
        <Route element={<FullLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </ReactRoutes>
    </>
  );
};

export default Router;
