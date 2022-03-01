import { Text, View,TouchableOpacity  } from 'react-native'
import React, { Component} from 'react';
import TextInputs from '../reuseable/SurveyTextInput'

export default class DashboadSurvey extends Component {
    constructor() {
        super();
        this.state = {
            ans1: '',
            ans2: '',
            ans3: '',
            value: '',
            checkbox: false

        }
    }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{ margin: 15 }}>
                    <Text style={{ color: '#1A1A1A', fontSize: 14, fontWeight: "bold", fontFamily: 'Open Sans', }}>Survey</Text>
                    <View style={{ backgroundColor: '#F4F8FF', borderRadius: 6.51125, marginTop: 15, width: 330 }}>
                        <Text style={{ color: 'black', marginLeft: 15,marginTop:10 }} >How much money do you have?</Text>
                        <View>
                            <TextInputs
                                placeholder={"Write your answer"}
                                value={this.state.ans1}
                                onChangeText={(text) => this.setState({ ans1: text })}
                            />
                        </View>
                        <Text style={{ color: 'black', marginLeft: 15,marginTop:16 }} >What return did you make in the market last year?</Text>
                        <View>
                            <TextInputs
                                placeholder={"Write your answer"}
                                value={this.state.ans2}
                                onChangeText={(text) => this.setState({ ans2: text })}
                            />
                        </View>
                        <Text style={{ color: 'black', marginLeft: 15,marginTop:16 }} >What do you think is a good return/what return would you like us to get you?</Text>
                        <View>
                            <TextInputs
                                placeholder={"Write your answer"}
                                value={this.state.ans3}
                                onChangeText={(text) => this.setState({ ans3: text })}
                            />
                        </View>
                        <Text style={{ color: 'black', marginLeft: 15,marginTop:16 }} >What percent ​return would you lend us money on?</Text>
                        <View>
                            <TextInputs
                                placeholder={"Write your answer"}
                                value={this.state.ans4}
                                onChangeText={(text) => this.setState({ ans4: text })}
                            />
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", margin: 10 }}>
                            <TouchableOpacity style={{ paddingHorizontal: 30, paddingVertical: 8, backgroundColor: '#017EFA', borderRadius: 6.51125, margin: 10 }}>
                                <Text>
                                    Submt 
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}