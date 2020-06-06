import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile62865Navigator from '../features/UserProfile62865/navigator';
import Settings62864Navigator from '../features/Settings62864/navigator';
import Settings62862Navigator from '../features/Settings62862/navigator';
import SignIn262860Navigator from '../features/SignIn262860/navigator';
import Settings62844Navigator from '../features/Settings62844/navigator';
import Settings62804Navigator from '../features/Settings62804/navigator';
import Settings62787Navigator from '../features/Settings62787/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile62865: { screen: UserProfile62865Navigator },
Settings62864: { screen: Settings62864Navigator },
Settings62862: { screen: Settings62862Navigator },
SignIn262860: { screen: SignIn262860Navigator },
Settings62844: { screen: Settings62844Navigator },
Settings62804: { screen: Settings62804Navigator },
Settings62787: { screen: Settings62787Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
