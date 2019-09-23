import { createAppContainer, createSwitchNavigator, NavigationContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createStackNavigator } from 'react-navigation-stack';

import Login from '@screens/Login';
import Home from '@screens/BottomTab/Home';
import { BottomTabContainer } from "@components/BottomTabNav/BottomTabContainer";
import Settings from "@screens/BottomTab/Settings";

const MenuNavigaton = createBottomTabNavigator(
    {
        ['Home']: Home,
        ['Settings']: Settings,
    }, {
        tabBarComponent: BottomTabContainer
    }
);


 
const AppStack: NavigationContainer = createStackNavigator(
    {

        Main: MenuNavigaton,
    },
    {
        headerMode: 'none',
    }

);
const AuthStack: NavigationContainer = createStackNavigator(
    {
        Login: Login,
    },
    {
        headerMode: 'none',
    }
);


const AppNavigator = createSwitchNavigator(
    {
        //   AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
    })


const AppContainer: NavigationContainer = createAppContainer(AppNavigator);



export default AppContainer;
