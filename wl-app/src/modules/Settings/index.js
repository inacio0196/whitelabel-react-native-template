import Wallet from './views/wallet';
import Settings from './views/settings';

const moduleConfig = {
  id: 'Settings',
  initialRouteName: 'Settings',
  routes: [
    {
      id: 'wallet',
      title: 'Wallet',
      component: Wallet,
    },
    {
      id: 'settings',
      title: 'Settings',
      component: Settings,
    },
  ],
};

export default moduleConfig;
