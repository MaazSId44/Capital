import { Text, View, TouchableOpacity, Image, ScrollView, FlatList, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { DrawerActions } from '@react-navigation/native';
import SurveyTextInput from '../reuseable/SurveyTextInput';
import DashboadSurvey from './DashboadSurvey';
import stocks from '../assests/StocksArray/Stocks'
import DataTable, { COL_TYPES } from 'react-native-datatable-component';


import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";



export default class Dashboard extends Component {







    //renderMethod
    renderItem = (item) => {

        return (

            <View style={{ backgroundColor: '#F4F8FF', borderRadius: 10, margin: 10 }}>
                <DataTable
                    data={stocks} // list of objects
                    colNames={['CompanyName', 'MarketCap', 'YTDGains', 'StockPrice', 'WeekpriceRange',
                        'LiveStockPrice', 'FIELD', 'randomstocks', 'stockpercentgrowth']} //List of Strings
                    colSettings={[{ name: 'CompanyName', type: COL_TYPES.STRING },
                    { name: 'MarketCap', type: COL_TYPES.STRING },
                    { name: 'YTDGains', type: COL_TYPES.INT },
                    { name: 'StockPrice', type: COL_TYPES.INT },
                    { name: 'WeekpriceRange', type: COL_TYPES.INT },
                    { name: 'LiveStockPrice', type: COL_TYPES.INT },
                    { name: 'FIELD', type: COL_TYPES.STRING },
                    { name: 'randomstocks', type: COL_TYPES.STRING },
                    { name: 'stockpercentgrowth', type: COL_TYPES.STRING },
                    ]}//List of Objects
                    noOfPages={2} //number
                    backgroundColor={'rgba(23,2,4,0.2)'} //Table Background Color
                />

            </View>

        );
    }







    data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
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

                <View>
                    <FlatList
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyExtractor={(item, index) => index}
                        data={stocks}
                        renderItem={({ item }) => this.renderItem(item)}
                    />
                </View>


                <View style={{ margin: 10 }}>
                    <Text style={{ color: '#1A1A1A', fontSize: 14, fontFamily: 'Open Sans', fontWeight: 'bold', margin: 10 }}>Comissions</Text>
                    <BarChart
                        data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [
                                {
                                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                    colors: [
                                        () => "blue"
                                    ]
                                }]
                        }}

                        width={340} // from react-native
                        height={200}
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: '#F4F8FF',
                            backgroundGradientFrom: '#F4F8FF',
                            backgroundGradientTo: '#F4F8FF',
                            fillShadowGradient: '#51CBFF',
                            fillShadowGradientOpacity: 15,
                            spacingInner={ 0.8}
                            decimalPlaces: 0,

                            color: (opacity = 1) => `rgba(0, 0, 1, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 1,  ${opacity})`,
                            style: {
                                borderRadius: 16,
                                fontFamily: "Bogle-Regular",
                            },
                            propsForBackgroundLines: {
                                stroke: "#F4F8FF",
                                strokeDasharray: "0",
                            },
                            propsForLabels: {
                                fontFamily: "Bogle-Regular",

                            },

                        }}

                        style={{

                            marginVertical: 8,
                            borderRadius: 10,
                        }}

                        showBarTops={false}

                    />
                </View>








            </ScrollView>
        )
    }
}