import { StyleSheet, Platform } from "react-native";
import { BaseStyle } from "../constants/BaseStyle";
import { COLORS } from "../constants/Colors";

const HEIGHT = (BaseStyle.DEVICE_HEIGHT / 100)
const WIDTH = (BaseStyle.DEVICE_WIDTH / 100)

const CommonStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    inputView: {
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        width: WIDTH * 90,
        alignSelf: "center",
        borderColor: COLORS.GRAY,
        height: 45,
        paddingHorizontal: WIDTH * 2,
        borderRadius: 12
    },
    inputText: {
        marginLeft: 10,
        width: WIDTH * 80,
        color: COLORS.BLACK,
    },
    buttonContainer: {
        width: WIDTH * 90,
        backgroundColor: COLORS.THEME_COLOR,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        alignSelf: 'center'
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00000040',
        justifyContent: 'center',
    },
    activityIndicatorWrapper: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 90
    },
    headText: {
        fontSize: 30,
        alignSelf: 'center'
    },
    buttonText: {
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});

export default CommonStyles;
