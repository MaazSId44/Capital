import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import COLORS from '../assests/Colors/COLORS'
export default class TextInputs extends Component {
    render() {
        return (


            <View style={{ marginHorizontal: 16, marginTop: 15, borderRadius: 7.13684, backgroundColor: '#F9F9F9' }}>
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
