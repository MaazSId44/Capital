import { Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { Component } from 'react'
import COLORS from '../assests/Colors/COLORS';
import { DrawerActions } from '@react-navigation/native';

import TextInputs from '../reuseable/TextInputs';
import Button from '../reuseable/Buttons';



export default class ProfileSettings extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      value: '',

    }
  }
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 23, margin: 10 }}>
          <Image resizeMode='contain' style={{ width: 90, height: 60 }} source={require('../assests/Images/Logo.png')} />
          <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
            <Image style={{ width: 24, height: 24, top: 14, right: 10 }} source={require('../assests/Images/openDrawer.png')} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginTop: 101 }}>
          <Text style={{ color: '#1A1A1A', fontSize: 14, fontWeight: "bold", fontFamily: 'Open Sans', }}>Profile</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", }}>
            <TouchableOpacity style={{ paddingHorizontal: 30, paddingVertical: 5, backgroundColor: '#017EFA', borderRadius: 6.51125, marginRight: 10 }}>
            <Text style={{ fontSize: 10.605, fontFamily: 'Open Sans', fontWeight: 'bold', color: '#FFFFFF' }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <View>
          <View style={{ justifyContent: 'center', alignContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', padding: 10 }}>
              <Image style={{ width: 54.27, height: 54.27, borderRadius: 70 / 2, }} source={require('../assests/Images/ProfileImage.png')} />
              <Text style={{ color: '#000000', paddingTop: 10, marginLeft: 5 }}>@anamularshad</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 32 }}>
          <View style={{ width: 180 }} >
            <TextInput
              style={{
                color: 'black',
                backgroundColor: '#F2F2F2',
                borderRadius: 7.13684,
                marginHorizontal: 16,
                fontSize: 12.4517,
                paddingHorizontal: 30
              }}
              placeholder={"First name"}
              value={this.state.firstName}
              onChangeText={(text) => this.setState({ firstName: text })}
              placeholderTextColor={COLORS.placeholderColor}
            />
          </View>

          <View style={{ width: 180 }} >
            <TextInput
              style={{
                color: 'black',
                backgroundColor: '#F2F2F2',
                borderRadius: 7.13684,
                marginHorizontal: 16,
                fontSize: 12.4517,
                paddingHorizontal: 30,

              }}
              placeholder={"Last name"}
              value={this.state.lastName}
              onChangeText={(text) => this.setState({ lastName: text })}
              placeholderTextColor={COLORS.placeholderColor}

            />
          </View>
        </View>

        <View style={{ marginTop: 29 }}>
          <TextInput
            style={{
              color: 'black',
              backgroundColor: '#F2F2F2',
              borderRadius: 7.13684,
              marginHorizontal: 16,
              fontSize: 12.4517,
              paddingHorizontal: 30,

            }}
            placeholder={"email"}
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
            placeholderTextColor={COLORS.placeholderColor}
          />
        </View>

        <View style={{ flexDirection: 'row', }}>
          <View style={{ justifyContent: 'space-around', color: "#017EFA", padding: 20 }}>
            <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#017EFA', borderRadius: 5.89189, padding: 5 }}>
              <Text style={{ fontSize: 10.6054, fontFamily: 'Open Sans', fontWeight: 'bold', color: '#FFFFFF' }}>
                Change Password
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", }}>
            <TouchableOpacity>
              <Text style={{ color: '#081A51', fontSize: 14, fontFamily: 'Open Sans', }}>
                Reset Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", }}>
            <TouchableOpacity style={{ paddingHorizontal: 40, paddingVertical: 10, backgroundColor: '#081A51', borderRadius: 6.51125, marginRight: 10 }}>
              <Text style={{ fontSize: 10.605, fontFamily: 'Open Sans', fontWeight: 'bold', color: '#FFFFFF' }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>






      </ScrollView>
    )
  }
}