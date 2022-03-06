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

            // <ScrollView style={{ backgroundColor: '#F4F8FF', borderRadius: 10, margin: 10 }}>
               
            //     <Text style={{ color:'black' }}>{item.CompanyName}</Text>
                

            //     {/* <DataTable
                    
            //         data={stocks} // list of objects
            //         colNames={['CompanyName', 'MarketCap', 'YTDGains', 'StockPrice', 'WeekpriceRange',
            //             'LiveStockPrice', 'FIELD', 'randomstocks', 'stockpercentgrowth']} //List of Strings
            //         colSettings={[{ name: 'CompanyName', type: COL_TYPES.STRING },
            //         { name: 'MarketCap', type: COL_TYPES.STRING },
            //         { name: 'YTDGains', type: COL_TYPES.INT },
            //         { name: 'StockPrice', type: COL_TYPES.INT },
            //         { name: 'WeekpriceRange', type: COL_TYPES.INT },
            //         { name: 'LiveStockPrice', type: COL_TYPES.INT },
            //         { name: 'FIELD', type: COL_TYPES.STRING },
            //         { name: 'randomstocks', type: COL_TYPES.STRING },
            //         { name: 'stockpercentgrowth', type: COL_TYPES.STRING },
            //         ]}//List of Objects
            //         noOfPages={10} //number
            //         doSort={false}

            //         backgroundColor={'#F4F8FF'} //Table Background Color
            //     /> */}
            //     {/* <Text style={{ color:'black' }}>
            //         {item.CompanyName}
            //     </Text>
            //     <Text style={{ color:'black' }}>
            //         {item.MarketCap}
            //     </Text> */}


            // </ScrollView>


        //     <ScrollView
        //     horizontal
        //     bounces={false}
        // >
        //     <ScrollView
        //         nestedScrollEnabled
        //         bounces={false}
        //         // You will need to figure out the height of inner content yourself
        //         // contentContainerStyle={{ height: 400 }}
        //     >
        //         <View>
        //         <Text style={{ color:'black' }}>{item.CompanyName}</Text>
                        
        //         </View>
        //     </ScrollView>
        // </ScrollView>
        <ScrollView
                nestedScrollEnabled
                bounces={false}>
             {/* <ScrollView horizontal style={{flexDirection:'row',backgroundColor:'#F4F8FF',borderRadius: 6.51125,width:400 }}>
            <View style={{ flexDirection:'column',marginHorizontal:10 }}>
            <Text style={{color:'black'  }}>
                {item.CompanyName}
            </Text>
            </View>
            <View style={{ flexDirection:'column' ,marginHorizontal:10}}>
            <Text style={{color:'black'  }}>
                {item.MarketCap}
            </Text>
            </View>
            <View style={{ flexDirection:'column',marginHorizontal:10}}>
            <Text style={{color:'black'  }}>
                {item.YTDGains}
            </Text>
            
            </View>
            <View style={{ flexDirection:'column',marginHorizontal:10}}>
            <Text style={{color:'black'  }}>
                {item.StockPrice}
            </Text>
            </View>
            <View style={{ flexDirection:'column',marginHorizontal:10}}>
            <Text style={{color:'black'  }}>
                {item.WeekpriceRange}
            </Text>
            
            </View>
            <View style={{ flexDirection:'column',marginHorizontal:10}}>
            <Text style={{color:'black'  }}>
                -
            </Text>
            
            </View>
            <View style={{ flexDirection:'column',marginHorizontal:20}}>
            <Text style={{color:'black'  }}>
                Total
            </Text>
            <Text style={{color:'black'  }}>
            Investment
            </Text>
            </View>
            </ScrollView> */}
        </ScrollView>
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


                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 10, marginTop: 40 }}>

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

                <View style={{ flex:1,marginHorizontal:25,marginVertical:10 }}>
                <Text style={{ color: '#1A1A1A', fontSize: 14, fontWeight: "bold", fontFamily: 'Open Sans', }}>Stocks</Text>
                <ScrollView horizontal style={{flexDirection:'row',backgroundColor:'#F4F8FF',borderRadius: 6.51125,marginVertical:10,width:340 }}>
            <View style={{ flexDirection:'column',marginHorizontal:20 }}>
            <Text style={{color:'black'  }}>
                Compan
            </Text>
            <Text style={{color:'black'  }}>
                Name
            </Text>
            <Text style={{color:'black'  }}>
              (Ticker)
            </Text>
            </View>
            <View style={{ flexDirection:'column' ,marginHorizontal:20}}>
            <Text style={{color:'black'  }}>
                Market
            </Text>
            <Text style={{color:'black'  }}>
            Cap
            </Text>
            </View>
            <View style={{ flexDirection:'column',marginHorizontal:20}}>
            <Text style={{color:'black'  }}>
                %YTD
            </Text>
            <Text style={{color:'black'  }}>
            Gains
            </Text>
            </View>
            <View style={{ flexDirection:'column',marginHorizontal:20}}>
            <Text style={{color:'black'  }}>
                Stock
            </Text>
            <Text style={{color:'black'  }}>
            Price
            </Text>
            </View>
            <View style={{ flexDirection:'column',marginHorizontal:20}}>
            <Text style={{color:'black'  }}>
                52 Weaks
            </Text>
            <Text style={{color:'black'  }}>
            Price
            </Text>
            <Text style={{color:'black'  }}>
            Range
            </Text>
            </View>
            <View style={{ flexDirection:'column',marginHorizontal:20}}>
            <Text style={{color:'black'  }}>
                My
            </Text>
            <Text style={{color:'black'  }}>
            Investment
            </Text>
            <Text style={{color:'black'  }}>
            (% or $)
            </Text>
            </View>
            <View style={{ flexDirection:'column',marginHorizontal:20}}>
            <Text style={{color:'black'  }}>
                Total
            </Text>
            <Text style={{color:'black'  }}>
            Investment
            </Text>
            </View>
            </ScrollView>
                    <FlatList
                    style={{ width:320,height:100, }}
                    scrollEnabled
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyExtractor={(item, index) => index}
                        data={stocks}
                        renderItem={({ item }) => this.renderItem(item)}
                    />
                </View>


                {/* <View style={{ marginHorizontal:20}}>
                    <Text style={{ color: '#1A1A1A', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', margin: 10 }}>A Total Comissions</Text>
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

                        width={350} // from react-native
                        height={200}
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        spacingInner={1}
                        withInnerLines={false}
                        
                        style={{ }}
                        chartConfig ={ {
                            backgroundGradientFrom: "#F4F8FF",
                            backgroundGradientTo: "#F4F8FF",
                            barPercentage: 0.5,
                            
                            height:5000,
                            fillShadowGradient: `rgba(81, 203, 255, 1)`,
                            fillShadowGradientOpacity: 1,
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
                          
                            style: {
                                
                              borderRadius: 16,
                              fontFamily: "Bogle-Regular",
                            },
                            // propsForBackgroundLines: {
                            //   strokeWidth: 1,
                            //   stroke: "black",
                            //   strokeDasharray: "0",
                            // },
                            propsForLabels: {
                              fontFamily: "Bogle-Regular",
                            },
                            propsForHorizontalLabels:{
                                
                            }
                          }}
                        //   style={{  }}
                        // chartConfig={{
                        //     backgroundColor: '#fff',
                        //     backgroundGradientFrom: '#F4F8FF',
                        //     backgroundGradientTo: '#F4F8FF',
                        //     fillShadowGradient: `rgba(1, 122, 205, 1)`,
                        //     fillShadowGradientOpacity: 1,
                        //     decimalPlaces: 0,
                        //     barPercentage: 0.5,

                        //     color: (opacity = 1) => `rgba(0, 0, 1, ${opacity})`,
                        //     labelColor: (opacity = 1) => `rgba(0, 0, 1,  ${opacity})`,
                        //     style: {
                        //         borderRadius: 16,
                        //         fontFamily: "Bogle-Regular",
                        //     },
                        //     propsForBackgroundLines: {
                        //         stroke: "#F4F8FF",
                        //         strokeDasharray: "0",
                        //     },
                        //     propsForLabels: {
                        //         fontFamily: "Bogle-Regular",

                        //     },

                        // }}

                        // style={{

                        //     marginVertical: 8,
                        //     borderRadius: 10,
                        // }}

                        showBarTops={false}

                    />
                </View> */}
                            <View style={{ flex:1,marginHorizontal:20,marginVertical:15 , }}>
                            <Text style={{ color: '#1A1A1A', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', margin: 10 }}>A Total Comissions</Text>
                          <View style={{backgroundColor:'#F4F8FF',borderRadius: 6.51125, }}>
                         
                          <View style={{ flexDirection:'row',height:159,width:340,backgroundColor:'#F4F8FF' ,borderRadius: 6.51125,justifyContent:'space-between',}}>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between', marginHorizontal:10,marginVertical:22}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}>1k</Text>
                              <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}></Text>
                              <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}>2k</Text>
                              <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}></Text>
                              <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}>3.58k</Text>
                              <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}></Text>
                              <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}>4k</Text>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Jan</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:40,width:17,marginTop:95 }}></View>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Feb</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:65,width:17,marginTop:70 }}></View>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Mar</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:48,width:17,marginTop:87 }}></View>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Apr</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:70,width:17,marginTop:65 }}></View>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>May</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:20,width:17,marginTop:115 }}></View>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Jun</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:64,width:17,marginTop:71 }}></View>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Jul</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:51,width:17,marginTop:83 }}></View>
                          </View> 
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Aug</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:37,width:17,marginTop:97 }}></View>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Sep</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:20,width:17,marginTop:115 }}></View>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Oct</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:38,width:17,marginTop:97 }}></View>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Nov</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:60,width:17,marginTop:75 }}></View>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                          <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Dec</Text>
                          <View style={{ backgroundColor:'#51CBFF',height:73,width:17,marginTop:61 }}></View>
                          </View>
                          <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                         
                          <View style={{ backgroundColor:'#F4F8FF',height:73,width:8,marginTop:61 }}></View>
                          </View>



                          </View>
                          <View style={{ alignItems:'center',backgroundColor:'#F4F8FF' }}>
                          <View style={{ height:1,backgroundColor: '#CBCBCB',width:320,marginHorizontal:15 ,marginVertical:6}}></View>
                          
                          <Text style={{ fontFamily:'Open Sans',fontSize:14 ,fontWeight:'600',color:'#9E9D9D'}}>Total Comissions</Text>
                          <Text style={{ fontFamily:'Open Sans',fontSize:18 ,fontWeight:'700',color:'#1A1A1A'}}>$3,000</Text>
                          </View>
                          </View>
                          </View>






            </ScrollView>
        )
    }
}