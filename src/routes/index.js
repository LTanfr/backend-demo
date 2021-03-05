import Board from "../pages/admin/dashboard/Board";
import Edit from "../pages/admin/products/Edit";
import List from "../pages/admin/products/List";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import {
  AreaChartOutlined,
  ShopOutlined
} from '@ant-design/icons';

export const mainRoutes = [{
  path: '/login',
  component: Login
}, {
  path: '/404',
  component: PageNotFound
}]

export const adminRoutes = [{
  path: '/admin/dashboard',
  component: Board,
  isShow: true,
  title: '看板',
  icon: <AreaChartOutlined />
}, {
  path: '/admin/products',
  component: List,
  isShow: true,
  exact: true,
  title: '商品管理',
  icon: <ShopOutlined />
}, {
  path: '/admin/products/edit/:id?',
  component: Edit,
  isShow: false
}]