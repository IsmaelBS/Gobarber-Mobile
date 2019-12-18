import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './Pages/SignIn/index';
import SignUp from './Pages/SignUp/index';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
