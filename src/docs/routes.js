import Home from './pages/Home';
import List from './pages/List';
import Error404 from './pages/Error';

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '*',
    name: 'error',
    component: Error404
  }
];

export default routes;
