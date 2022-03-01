import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { DrawerActions } from '@react-navigation/native';
import COLORS from '../assests/Colors/COLORS';
import Button from '../reuseable/Buttons';
import TextInputs from '../reuseable/TextInputs';



export default class DoNotDisturb extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      phone: '',
      value: ''
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 23, margin: 10 }}>
          <Image resizeMode='contain' style={{ width: 90, height: 60 }} source={require('../assests/Images/Logo.png')} />
          <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
            <Image style={{ width: 24, height: 24, top: 14, right: 10 }} source={require('../assests/Images/openDrawer.png')} />
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'space-between', margin: 20, }}>
          <Text style={{ color: '#1A1A1A', fontSize: 16, fontWeight: "bold", fontFamily: 'Open Sans', }}>Do Not Disturb</Text>
        </View>

        <View style={{}}>
          {/*Email TextInput*/}
          <View>
            <TextInputs
              placeholder={"Name"}
              value={this.state.name}
              onChangeText={(text) => this.setState({ name: text })}
            />
          </View>

          {/*Password TextInput*/}
          <View>
            <TextInputs
              placeholder={"phone"}
              value={this.state.phone}
              secureTextEntry={true}
              keyboardType='number-pad'
              onChangeText={(text) => this.setState({ phone: text })}
            />
          </View>
        </View>

        <View style={{ justifyContent: 'space-around', alignItems: 'center', color: "#017EFA", marginTop: 20 }}>
          <TouchableOpacity style={{ paddingHorizontal: 150, paddingVertical: 10, backgroundColor: '#017EFA', padding: 5, borderRadius: 5 }}>
            <Text style={{ fontSize: 8.81525, fontFamily: 'Open Sans', fontWeight: 'bold', color: '#FFFFFF', }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}