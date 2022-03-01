import React, { Component } from 'react';
import { BackHandler, Image, TouchableOpacity } from 'react-native';
//Navigators
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';

//Vector Icon
import AntDesign from 'react-native-vector-icons/AntDesign';

//Stack Components
// import DrawerContent from '../screens/DrawerContent';
import LoginScreen from '../Auth/LoginScreen';
import SignUpScreen from '../Auth/SignUpScreen';
import Dashboard from '../screens/Dashboard';
import Friends from '../screens/Friends';
import ProfileSettings from '../screens/ProfileSettings';
import DrawerContent from '../screens/DrawerContent';
import Library from '../screens/Libirary';
import DoNotDisturb from '../screens/DoNotDisturb';


//Method for handle backbutton
function handleBackButton() {
    BackHandler.exitApp();
    return true;
}

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

//stack Navigator
export default function Navigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} />

        </Stack.Navigator>
    );
}


const Drawer = createDrawerNavigator();
// function MyDrawer() {
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen name="Dashboad" component={Dashboad} />
//             {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
//         </Drawer.Navigator>
//     );
// }

function MyDrawer({ navigation }) {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={props => <DrawerContent  {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: '#1B2B65',
                drawerActiveTintColor: '#FFFFFF',
                drawerLabelStyle: { marginLeft: -25, fontFamily: 'Roboto-Medium', fontSize: 15 },
                drawerInactiveTintColor: "#FFFFFF",
                headerTintColor: 'black',
                drawerPosition: 'left',
                headerShown: false




            }}

        >
            <Drawer.Screen

                options={{
                    headerShown: false,
                    // headerTintColor:'white',
                    title: 'Dashboard',
                    drawerIcon: ({ color }) => (

                        <Image style={{ width: 20, height: 18 }} source={require('../assests/Images/Dashboard.png')} />
                    ),


                }}
                name="Dashboard" component={Dashboard}

                listeners={{
                    focus: () =>
                        BackHandler.addEventListener(
                            'hardwareBackPress',
                            handleBackButton,
                        ),
                    blur: () =>
                        BackHandler.removeEventListener(
                            'hardwareBackPress',
                            handleBackButton,
                        ),
                }}
            />

            <Drawer.Screen options={{

                title: 'Library',
                drawerIcon: ({ color }) => (
                    <Image style={{ width: 20, height: 18 }} source={require('../assests/Images/library.png')} />
                ),

            }}
                name="Library" component={Library} />
            {/* <Drawer.Screen options={{

                title: 'Friends ',
                drawerIcon: ({ color }) => (
                    <Image style={{ width: 20, height: 18 }} source={require('../assests/Images/Friends.png')} />
                ),
                headerStyle: {
                    backgroundColor: 'red',

                }
            }} name="Friends" component={Friends} /> */}

            <Drawer.Screen options={{

                title: 'DoNotDisturb',
                drawerIcon: ({ color }) => (
                    <Image style={{ width: 20, height: 18 }} source={require('../assests/Images/donotdisturb.png')} />
                ),

            }}
                name="DoNotDisturb" component={DoNotDisturb} />
            <Drawer.Screen options={{

                title: 'ProfileSettings',
                drawerIcon: ({ color }) => (
                    <Image style={{ width: 20, height: 18 }} source={require('../assests/Images/ProfileSettings.png')} />
                ),
                headerStyle: {
                    backgroundColor: 'red',

                }
            }}
                name="ProfileSettings" component={ProfileSettings} />


        </Drawer.Navigator>
    );
}

























// Drawer Navigator which passes to stack

// function MyDrawer() {
//     return (
//         <Drawer.Navigator drawerContent={props => <DrawerContent  {...props} />}
//             screenOptions={{
//                 drawerActiveBackgroundColor: 'red',
//                 drawerActiveTintColor: 'white',
//                 drawerLabelStyle: { marginLeft: -25, fontFamily: 'Roboto-Medium', fontSize: 15 },
//                 drawerInactiveTintColor: "red",
//                 headerTintColor: 'white'



//             }}>
//             <Drawer.Screen

//                 options={{
//                     // headerTintColor:'white',
//                     title: 'Dashboad',
//                     drawerIcon: ({ color }) => (
//                         <FontAwesome5 name='Dashboad' color={color} size={22} />
//                     ),
//                     headerStyle: {
//                         backgroundColor: 'red'
//                     },

//                 }}
//                 name="Dashboad" component={Dashboad}

//                 listeners={{
//                     focus: () =>
//                         BackHandler.addEventListener(
//                             'hardwareBackPress',
//                             handleBackButton,
//                         ),
//                     blur: () =>
//                         BackHandler.removeEventListener(
//                             'hardwareBackPress',
//                             handleBackButton,
//                         ),
//                 }}
//             />

//             {/* <Drawer.Screen options={{

//                 title: 'Orders',
//                 drawerIcon: ({ color }) => (
//                     <FontAwesome5 name='shipping-fast' color={color} size={19} />
//                 ),
//                 headerStyle: {
//                     backgroundColor: 'red',

//                 }
//             }}
//                 name="MyOrders" component={App} /> */}
//         </Drawer.Navigator>
//     );
// }


