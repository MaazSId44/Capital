import React, { Component, useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './sources/Navigations/Navigator'


export default App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
{/* <DataTable.Header>
                        <DataTable.Title>CompanyName</DataTable.Title>
                        <DataTable.Title numeric>MarketCap</DataTable.Title>
                        <DataTable.Title numeric>YTDGains</DataTable.Title>
                        <DataTable.Title>StockPrice</DataTable.Title>
                        <DataTable.Title numeric>Weekprice</DataTable.Title>
                        <DataTable.Title numeric>randomstocks</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell>{item.CompanyName}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.MarketCap}</DataTable.Cell>
                        <DataTable.Cell numeric>[{item.YTDGains}</DataTable.Cell>
                        <DataTable.Cell>{item.StockPrice}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.Weekprice}</DataTable.Cell>
                        <DataTable.Cell numeric>[{item.randomstocks}</DataTable.Cell>
                    </DataTable.Row> */}

                    // <View style={{ backgroundColor: '#F4F8FF', borderRadius: 10, margin: 10 }}>