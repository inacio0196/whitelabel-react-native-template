import Mocks from './views/mocks';
import News from './views/news';

const moduleConfig = {
  id: 'Mocks',
  initialRouteName: 'Mocks',
  routes: [
    {
      id: 'mocks',
      title: 'Mocks',
      component: Mocks,
    },
    {
      id: 'News',
      title: 'News',
      component: News,
    },
  ],
};

export default moduleConfig;
