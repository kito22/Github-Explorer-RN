import {createAppContainer, createStackNavigator} from 'react-navigation';

import './config/ReactotronConfig';

import Main from './pages/Main/index';
import User from './pages/User/index';
import Repository from './pages/Repository/index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Repository,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
