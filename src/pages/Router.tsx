import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Layout from '@components/Layout';
import FullLayout from '@components/FullLayout';

import DashBoard from './dashBoard';
import Login from './login';
import WithdrawHistory from './withdrawHistory';
import SwapHistory from './swapHistory';
import AdminAccount from './adminAccount';
import Tokens from './tokens';
import Point from './point';
import SwappedToken from './swappedToken';
import Users from './users';
import DeletedUsers from './deletedUsers';
import Notice from './notice';
import Faq from './faq';
import Policy from './policy';
import Banner from './banner';
import PopUp from './popUp';

const Router = () => {
  return (
    <>
      <ReactRoutes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="transaction/withdraw" element={<WithdrawHistory />} />
          <Route path="transaction/swap" element={<SwapHistory />} />
          <Route path="balance/tokens" element={<Tokens />} />
          <Route path="balance/point" element={<Point />} />
          <Route path="balance/swap/token" element={<SwappedToken />} />
          <Route path="users" element={<Users />} />
          <Route path="users/deleted" element={<DeletedUsers />} />
          <Route path="service/notice" element={<Notice />} />
          <Route path="service/faq" element={<Faq />} />
          <Route path="service/policy" element={<Policy />} />
          <Route path="notification/banner" element={<Banner />} />
          <Route path="notification/popup" element={<PopUp />} />
          <Route path="administrator" element={<AdminAccount />} />
        </Route>
        <Route element={<FullLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </ReactRoutes>
    </>
  );
};

export default Router;
