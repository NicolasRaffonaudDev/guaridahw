import { lazy } from 'react';


const routes = [
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
    exact: true
  },
  {
    path: '/category/:categoryId?',
    component: lazy(() => import('../pages/Category'))
  },
  {
    path: '/detail/:productId',
    component: lazy(() => import('../pages/ItemDetailPage'))
  },
  {
    path: '/cart',
    component: lazy(() => import('../pages/Cart'))
  },
  {
    path: '/checkout',
    component: lazy(() => import('../pages/CheckoutPage'))
  },
  {
    path: '/login',
    component: lazy(() => import('../pages/LoginPage'))
  },
  {
    path: '/contact',
    component: lazy(() => import('../pages/ContactPage'))
  }
];

export default routes;