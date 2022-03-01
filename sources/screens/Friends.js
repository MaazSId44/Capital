import { Text, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { Component } from 'react'
import { DrawerActions } from '@react-navigation/native';
import FriendsZoneData from '../assests/FriendsArray/FriendsZoneData';
import COLORS from '../assests/Colors/COLORS';

export default class Friends extends Component {



  //renderMethod
  renderItem = (item) => {
    return (
      <View style={{ margin: 4, backgroundColor: '#E5E5E5',margin:5,marginBottom:10 }}>

        <Image style={{ width: 167, height: 127,marginTop:20,borderTopLeftRadius:8,borderTopRightRadius:8 }} source={item.image} />
        <View style={{ justifyContent: 'space-between', }}>
          <Text style={{ color: 'black', padding: 5, fontSize: 9.79472, fontFamily: 'Open Sans', fontWeight: 'bold' }}>{item.name}</Text>

        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'space-around', }}>
          <View style={{ justifyContent: 'space-around', alignItems: 'center', color: "#017EFA", }}>
            <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 5, backgroundColor: '#017EFA', borderRadius: 6.51125, padding: 5 }}>
              <Text style={{ fontSize: 8.81525, fontFamily: 'Open Sans', fontWeight: 'bold', color: '#FFFFFF' }}>
                View profile
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", }}>
            <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 5, backgroundColor: '#E2F1FF', borderRadius: 6.51125, }}>
              <Text style={{ color: '#017EFA', fontSize: 8.81525, fontFamily: 'Open Sans', fontWeight: 'bold' }}>
                unfriend
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    );
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

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
          <Text style={{ color: '#1A1A1A', fontSize: 14, fontWeight: "bold", fontFamily: 'Open Sans', }}>Friends</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", }}>
            <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 5, backgroundColor: '#017EFA', borderRadius: 6.51125,marginRight:10 }}>
              <Text>
                Add new
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {/*FlatList*/}
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            data={FriendsZoneData}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </View>
      </ScrollView>
    )
  }
}