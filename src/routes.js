import React from 'react';
import { useHistory  } from 'react-router-dom';
import DashboardLayout from '../src/layouts/DashboardLayout';
import MainLayout from '../src/layouts/MainLayout';
import AccountView from '../src/views/account/AccountView';
import CustomerListView from '../src/views/customer/CustomerListView';
import DashboardView from '../src/views/reports/DashboardView';
import LoginView from '../src/views/auth/LoginView';
import NotFoundView from '../src/views/errors/NotFoundView';
import ProductListView from '../src/views/product/ProductListView';
import RegisterView from '../src/views/auth/RegisterView';
import SettingsView from '../src/views/settings/SettingsView';

const routes = [
  {
    path: 'app-admin',
    component: <DashboardLayout />,
    children: [
      { path: 'account', component: <AccountView /> },
      { path: 'customers', component: <CustomerListView /> },
      { path: 'dashboard', component: <DashboardView /> },
      { path: 'products', component: <ProductListView /> },
      { path: 'settings', component: <SettingsView /> }
      //{ path: '*', component: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/admin',
    component: <MainLayout />,
    children: [
      { path: 'login', component: <LoginView /> },
      { path: 'register', component: <RegisterView /> },
      { path: '404', component: <NotFoundView /> }
      //{ path: '/', component: <Navigate to="/app/dashboard" /> }
      //{ path: '*', component: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
