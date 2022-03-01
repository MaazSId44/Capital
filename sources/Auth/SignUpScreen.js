import React, { Component } from 'react';
import { Text, TouchableOpacity, View, ScrollView, RefreshControl, Image, StatusBar, TextInput } from 'react-native';
//reuseable 
import Button from '../reuseable/Buttons';
import TextInputs from '../reuseable/TextInputs';
import Helper from '../utilis/Helper';
import COLORS from '../assests/Colors/COLORS';
import CheckBox from '@react-native-community/checkbox';


const helper = new Helper()
export default class SignUpScreen extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      birthday: '',
      confirmPassword: '',
      accessCode: '',
      value: '',
      checkbox: false

    }
  }
  handleLogin() {
    const { email, password } = this.state;
    if (email == '') {
      helper.showToast('Enter your email', COLORS.primary)
      return
    }
    if (!helper.isValidEmail(email)) {
      helper.showToast('Your Email is not Correct', COLORS.primary)
      return
    }
    if (password == '') {
      helper.showToast('Password Required', COLORS.primary)
      return
    }
    if (password.length < 6) {
      helper.showToast('Password must be greater than 8', COLORS.primary)
      return
    }
  }

  render() {
    return (

      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}>
        <StatusBar hidden />
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 60 }}>
          <Image resizeMode='cover' style={{ width: 108, height: 72 }} source={require('../assests/Images/Logo.png')} />
        </View>

        {/*header text*/}
        <View style={{ marginTop: 32 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "black", fontFamily: 'Aeonik', alignSelf: 'center' }}>Get started with us</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 14, color: "black", fontFamily: 'Aeonik', alignSelf: 'center' }}>Please enter your credentials</Text>
        </View>

        <View style={{ marginTop: 25 }}>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 180 }} >
              <TextInput
                style={{
                  color:'black',
                  backgroundColor: '#F9F9F9',
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
                  color:'black',
                  backgroundColor: '#F9F9F9',
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



          {/*Email TextInput*/}
          <View style={{ marginTop: 11 }}>
            <TextInputs
              placeholder={"Email"}
              value={this.state.email}
              keyboardType='email-address'
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>

          <View style={{ marginTop: 11 }}>
            <TextInputs
              placeholder={"Birthday"}
              value={this.state.birthday}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ birthday: text })}
            />
          </View>

          {/*Password TextInput*/}
          <View style={{ marginTop: 11 }}>
            <TextInputs
              placeholder={"Password"}
              value={this.state.password}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>

          <View style={{ marginTop: 11 }}>
            <TextInputs
              placeholder={"Confirm Password"}
              value={this.state.confirmPassword}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ confirmPassword: text })}
            />
          </View>
          <View style={{ marginTop: 11 }}>
            <TextInputs
              placeholder={"Access Code"}
              value={this.state.accessCode}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ accessCode: text })}
            />
          </View>
        </View>


        <View style={{ flexDirection: 'row', marginTop: 31.75, }}>
          <CheckBox
            tintColors={{ true: '#017EFA', false: 'black' }}

            style={{ marginLeft: 12 }}
            disabled={false}
            value={this.state.checkbox}
            onValueChange={(newValue) => this.setState({ checkbox: newValue })}
          />
          <View style={{}}>
            <Text style={{ marginLeft: 6, fontSize: 12.2312, color: COLORS.secondaryColor, fontFamily: 'Aeonik', lineHeight: 20, }}>
              I  read/ confirm T&C and privacy policy to continue the authorization process
            </Text>
          </View>
        </View>

        {/*Login Button View*/}
        <View style={{ marginTop: 20, }}>
          <Button
            onPress={() => this.handleLogin()}
            title={'Sign up '}
            bgStyle={{ backgroundColor: COLORS.primarSecond, borderColor: "black", marginHorizontal: 16, borderRadius: 7.1384, }}
            txtStyle={{ color: 'white', textAlign: 'center', fontSize: 16.0614, fontFamily: 'Aeonik' }} />
        </View>

        <View style={{marginBottom:20}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, alignSelf: 'center', }}>
            <View>
              <Text style={{ color: '#656564' }}>Already have an account?</Text>
            </View>

            {/*SignUp View*/}
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Text style={{ color: COLORS.secondaryColor, fontWeight: 'bold' }}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}
