import { lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const RootLayout = lazy(() => import('@/layout/RootLayout/RootLayout'));
const Home = lazy(() => import('@/pages/Home/Home'));
const Cart = lazy(() => import('@/pages/Cart/Cart'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/lumieleu" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=":productsId" element={<Cart />} />
    </Route>
  )
);

export default router;
