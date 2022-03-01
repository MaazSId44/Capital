import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, RefreshControl } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
//vector Icon
import Entypo from 'react-native-vector-icons/Entypo';

export default class DrawerContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refresh: false,
      name: '',
      email: ''
    }

  }
  render() {
    return (

      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: "#081A51" }}>

        {/*Accepting props */}
        <DrawerContentScrollView
          {...this.props}>

          {/*header styling View*/}
          <View style={{ justifyContent: 'center', alignItems: 'center', height: 100 }}>
            <Image style={{ width: 108, height: 72 }} source={require('../assests/Images/Logo.png')} />
          </View>
          <DrawerItemList {...this.props} />
        </DrawerContentScrollView>

        {/*Logout Button*/}
        {/* <TouchableOpacity onPress={() => { this.handleLogout() }} style={{ paddingVertical: 10, paddingHorizontal: 10, borderRadius: 15, width: 150, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingRight: 50, bottom: 10 }}>
          <Entypo style={{ paddingRight: 5 }} name='log-out' color="#FFFFFF" size={22} />
          <Text style={{ color: '#FFFFFF', fontSize: 15, fontFamily: 'Roboto-Medium', }}>Logout</Text>
        </TouchableOpacity> */}
      </View >
    )
  }
}


