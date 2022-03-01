import { Text, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { Component } from 'react'
import { DrawerActions } from '@react-navigation/native';
import COLORS from '../assests/Colors/COLORS';
import LibraryArray from '../assests/LibraryArray/LibraryArray';

export default class Libirary extends Component {



  //renderMethod
  renderItem = (item) => {
    return (
      <View style={{ margin: 4, backgroundColor: '#E5E5E5', margin: 5, }}>

        <Image style={{ width: 167, height: 127, marginTop: 10, }} source={item.image} />
        <View style={{ backgroundColor: '#F4F8FF', width: 167, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', padding: 5, fontSize: 9.79472, fontFamily: 'Open Sans', fontWeight: 'bold' }}>{item.Productname}</Text>
            <Text style={{ color: '#6ab567', padding: 5, fontSize: 9.79472, fontFamily: 'Open Sans', }}>{item.cost}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#017EFA', padding: 5, fontSize: 9.79472, fontFamily: 'Open Sans', }}>{item.disc}</Text>
          </View>

          <View style={{ justifyContent: 'space-around', alignItems: 'center', color: "#017EFA", }}>
            <TouchableOpacity style={{ paddingHorizontal: 70, paddingVertical: 5, backgroundColor: '#017EFA', padding: 5, marginBottom: 10 }}>
              <Text style={{ fontSize: 8.81525, fontFamily: 'Open Sans', fontWeight: 'bold', color: '#FFFFFF' }}>
                Buy
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

        <View style={{ justifyContent: 'space-between', margin: 10 }}>
          <Text style={{ color: '#1A1A1A', fontSize: 14, fontWeight: "bold", fontFamily: 'Open Sans', }}>Library</Text>
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
            data={LibraryArray}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </View>
      </ScrollView>
    )
  }
}