import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import COLORS from '../assests/Colors/COLORS'
export default class SurveyTextInput extends Component {
    render() {
        return (


            <View style={{ marginHorizontal: 16, marginTop: 15, borderRadius:  6.51125, backgroundColor: '#E7EBF3' }}>
                <TextInput

                    style={{ marginLeft: 30, fontSize: 12.4517, color: COLORS.secondaryColor }}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={COLORS.placeholderColor}
                    value={this.props.value}
                    keyboardType={this.props.keyboardType}
                    onChangeText={this.props.onChangeText}
                    secureTextEntry={this.props.secureTextEntry}
                    onSubmitEditing={this.props.onSubmitEditing}

                />

            </View>

        )
    }
}
