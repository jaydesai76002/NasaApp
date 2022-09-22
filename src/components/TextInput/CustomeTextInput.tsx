import React from "react";
import { View, TextInput } from "react-native";
import CommonStyles from "../../styles/CommonStyle";

type props = {
    value: any;
    placeholder: string;
    containerStyle: any;
    inputStyle: any;
    onChangeText: any;
    editable: boolean;
    multiline: boolean;
    defaultValue: string;
    keyboardType: any;
};

const CustomeTextInput = ({ keyboardType, inputStyle, value, placeholder, containerStyle, onChangeText, editable, multiline, defaultValue }: props) => {

    return (
        <View style={[CommonStyles.inputView, containerStyle]}>
            <TextInput
                placeholder={placeholder}
                style={[CommonStyles.inputText, inputStyle]}
                value={value}
                defaultValue={defaultValue}
                onChangeText={onChangeText}
                editable={editable}
                multiline={multiline}
                textAlignVertical={'top'}
                numberOfLines={10}
                keyboardType={keyboardType}
            />
        </View>
    );
};

export default CustomeTextInput;