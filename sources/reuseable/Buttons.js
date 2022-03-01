import React from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

const Button = ({ title, onPress, theme, bgStyle, txtStyle, icon }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onPress && onPress()}>
            <View style={{ ...bgStyle, padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {icon}
                <Text style={{
                    ...txtStyle,
                    textAlign: 'center',

                }}>
                    {title}

                </Text>
            </View>
        </TouchableOpacity>

    )
}

export default Button
