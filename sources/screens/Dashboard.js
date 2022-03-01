import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { DrawerActions } from '@react-navigation/native';
import SurveyTextInput from '../reuseable/SurveyTextInput';
import DashboadSurvey from './DashboadSurvey';


export default class Dashboard extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1,backgroundColor: '#E5E5E5' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 23, margin: 10 }}>
                    <Image resizeMode='contain' style={{ width: 90, height: 60 }} source={require('../assests/Images/Logo.png')} />
                    <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                        <Image style={{ width: 24, height: 24, top: 14, right: 10 }} source={require('../assests/Images/openDrawer.png')} />
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 10, marginTop: 66 }}>

                    <View>
                        <Text style={{ color: '#1A1A1A', fontSize: 14, fontWeight: "bold", fontFamily: 'Open Sans', }}>Import Contacts</Text>
                        <View style={{ backgroundColor: '#F4F8FF', borderRadius: 6.10063, width: 160, marginTop: 15 }}>
                            <View style={{ margin: 7, flexDirection: 'row', }}>

                                <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC1.png')} />
                                <Text style={{ color: 'black', marginLeft: 10 }}>Jonson Roy</Text>

                            </View>
                            <View style={{ margin: 7, flexDirection: 'row', }}>

                                <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC2.png')} />
                                <Text style={{ color: 'black', marginLeft: 10 }}>David</Text>

                            </View>
                            <View style={{ margin: 7, flexDirection: 'row', }}>

                                <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC3.png')} />
                                <Text style={{ color: 'black', marginLeft: 10 }}>Jackson Jack</Text>

                            </View>
                            <View style={{ margin: 7, flexDirection: 'row', }}>

                                <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC4.png')} />
                                <Text style={{ color: 'black', marginLeft: 10 }}>Toni Kross</Text>

                            </View>


                            <View style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", margin: 10 }}>
                                <TouchableOpacity>
                                    <Text style={{ color: "#017EFA", }} >
                                        see more
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ paddingHorizontal: 30, paddingVertical: 5, backgroundColor: '#017EFA', borderRadius: 13.2758, margin: 10 }}>
                                    <Text>
                                        Import
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </View>


                    <View>
                        <Text style={{ color: '#1A1A1A', fontSize: 14, fontWeight: "bold", fontFamily: 'Open Sans', }}>Friends</Text>
                        <View style={{ backgroundColor: '#F4F8FF', borderRadius: 6.10063, width: 160, height: 230, marginTop: 15 }}>
                            <View style={{ margin: 7, flexDirection: 'row', }}>

                                <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC1.png')} />
                                <Text style={{ color: 'black', marginLeft: 10 }}>Jonson Roy</Text>

                            </View>
                            <View style={{ margin: 7, flexDirection: 'row', }}>

                                <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC2.png')} />
                                <Text style={{ color: 'black', marginLeft: 10 }}>David</Text>

                            </View>
                            <View style={{ margin: 7, flexDirection: 'row', }}>

                                <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC3.png')} />
                                <Text style={{ color: 'black', marginLeft: 10 }}>Jackson Jack</Text>

                            </View>
                            <View style={{ margin: 7, flexDirection: 'row', }}>

                                <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC4.png')} />
                                <Text style={{ color: 'black', marginLeft: 10 }}>Toni Kross</Text>

                            </View>


                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", marginTop: 12 }}>
                                <Text style={{ color: "#017EFA", }} >
                                    see list
                                </Text>
                            </TouchableOpacity>
                        </View>



                    </View>

                </View>

                <View>
                    <DashboadSurvey />
                </View>







            </ScrollView>
        )
    }
}