import React from "react";
import { TouchableOpacity } from "react-native";
import CommonStyles from "../../styles/CommonStyle";
import CustomText from "../Text/CustomText";

type props = {
    containerStyle: any;
    text: String;
    textStyle: any;
    onPress: () => void,
    disabled: boolean
};

const CustomButton = ({ containerStyle, textStyle, text, disabled, onPress }: props) => {
    return (
        <TouchableOpacity
            style={[CommonStyles.buttonContainer, containerStyle]}
            onPress={onPress}
            activeOpacity={0.6}
            disabled={disabled}
        >
            <CustomText
                text={text}
                style={[textStyle]}
                numberOfLines={undefined}
            />
        </TouchableOpacity>
    );
};

export default CustomButton;
