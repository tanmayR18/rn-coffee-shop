import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';

import CustomIcons from '../components/CustomIcons';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';

const Tab = createBottomTabNavigator();

const HomeIcon = ({focused}: {focused: boolean}) => (
  <CustomIcons
    name="home"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);

const CartIcon = ({focused}: {focused: boolean}) => (
  <CustomIcons
    name="cart"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);

const FavouriteIcon = ({focused}: {focused: boolean}) => (
  <CustomIcons
    name="like"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);

const HistoryIcon = ({focused}: {focused: boolean}) => (
  <CustomIcons
    name="bell"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: CartIcon,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: FavouriteIcon,
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: HistoryIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
