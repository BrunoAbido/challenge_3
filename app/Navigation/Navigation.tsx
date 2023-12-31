import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import colors from '../constants/Colors';


import Home from '../Screens/appScreens/Home';
import Favorites from '../Screens/appScreens/Favorites';
import Cart from '../Screens/appScreens/Cart';
import Details from '../Screens/appScreens/Details';
import Initial from '../Screens/Initial';
import SignUpScreen from '../Screens/SignUpScreen';
import SignInScreen from '../Screens/signInScreen';
import Profile from '../Screens/appScreens/Profile';

const homeIconFocused = require('../assets/images/Vector.Home.png') as ImageSourcePropType;
const homeIconUnfocused = require('../assets/images/Vector.Home.png') as ImageSourcePropType;
const favoritesIconFocused = require('../assets/images/favorite_border.png') as ImageSourcePropType;
const favoritesIconUnfocused = require('../assets/images/favorite_border.png') as ImageSourcePropType;
const cartIconFocused = require('../assets/images/Vector.Cart.png') as ImageSourcePropType;
const cartIconUnfocused = require('../assets/images/Vector.Cart.png') as ImageSourcePropType;

export type RootStackParamList = {
    Initial: any; 
    SignUpScreen: undefined;
    SignInScreen: undefined;
    Details: undefined;
    Home: undefined;
    Profile: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => {
                let iconSource;
                let labelText = '';

                if (route.name === 'Home') {
                    iconSource = focused ? homeIconFocused : homeIconUnfocused;
                    labelText = 'Home';
                } else if (route.name === 'Favorites') {
                    iconSource = focused ? favoritesIconFocused : favoritesIconUnfocused;
                    labelText = 'Favorites';
                } else if (route.name === 'Cart') {
                    iconSource = focused ? cartIconFocused : cartIconUnfocused;
                    labelText = 'Cart';
                }
                
                return (
                    <React.Fragment>
                        {iconSource && (
                            <Image
                                source={iconSource}
                                style={{ 
                                width: 25,
                                height: 25,
                                justifyContent: 'center',
                                marginTop: 20, 
                                tintColor: focused ? colors.green : 'black' }}
                            />
                        )}
                            <Text style={{
                                height: 14,
                                marginTop: 2,
                                color: focused ? colors.green : 'black' }} >
                                {labelText}
                                </Text>
                    </React.Fragment>
                );
            },
        })}
    >
        <Tab.Screen name="Home" component={Home} 
        options={{ headerShown: false }} />
        <Tab.Screen name="Favorites" component={Favorites as React.ComponentType} 
        options={{ headerShown: false }} />
        <Tab.Screen name="Cart" component={Cart} 
        options={{ headerShown: false }} />
    </Tab.Navigator>
);

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Initial">
            <Stack.Screen name="Initial" component={Initial} 
            options={{ headerShown: false }} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen}
            options={{ headerShown: false }} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} 
            options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={TabNavigator} 
            options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details as React.ComponentType} 
            options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} />
        
        </Stack.Navigator>
    );
};

export default Navigation;