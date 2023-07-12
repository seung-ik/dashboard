import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import FullLayout from '@components/layout/FullLayout';

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

export enum Paths {
  Dashboard = '/',
  WithdrawTx = '/transaction/withdraw',
  SwapTx = '/transaction/swap',
  TokenBalance = '/balance/tokens',
  PointBalance = '/balance/point',
  SwapToken = '/balance/swap/token',
  User = '/users',
  DeletedUser = '/users/deleted',
  Notice = '/service/notice',
  FAQ = '/service/faq',
  Policy = '/service/policy',
  Banner = '/notification/banner',
  Popup = '/notification/popup',
  Administrator = '/administrator',
  Login = '/login',
}

const Router = () => {
  return (
    <>
      <ReactRoutes>
        <Route element={<Layout />}>
          <Route path={Paths.Dashboard} element={<DashBoard />} />
          <Route path={Paths.WithdrawTx} element={<WithdrawHistory />} />
          <Route path={Paths.SwapTx} element={<SwapHistory />} />
          <Route path={Paths.TokenBalance} element={<Tokens />} />
          <Route path={Paths.PointBalance} element={<Point />} />
          <Route path={Paths.SwapToken} element={<SwappedToken />} />
          <Route path={Paths.User} element={<Users />} />
          <Route path={Paths.DeletedUser} element={<DeletedUsers />} />
          <Route path={Paths.Notice} element={<Notice />} />
          <Route path={Paths.FAQ} element={<Faq />} />
          <Route path={Paths.Policy} element={<Policy />} />
          <Route path={Paths.Banner} element={<Banner />} />
          <Route path={Paths.Popup} element={<PopUp />} />
          <Route path={Paths.Administrator} element={<AdminAccount />} />
        </Route>
        <Route element={<FullLayout />}>
          <Route path={Paths.Login} element={<Login />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </ReactRoutes>
    </>
  );
};

export default Router;
