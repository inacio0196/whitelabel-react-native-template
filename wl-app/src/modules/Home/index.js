import Home from './views/home';
import User from './views/user';

const moduleConfig = {
  id: 'Home',
  initialRouteName: 'Home',
  routes: [
    {
      id: 'home',
      title: 'Home',
      component: Home,
    },
    {
      id: 'user',
      title: 'User',
      component: User,
    },
  ],
};

export default moduleConfig;
