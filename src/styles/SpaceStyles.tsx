import { StyleSheet } from "react-native";
import { BaseStyle } from "../constants/BaseStyle";

const HEIGHT = (BaseStyle.DEVICE_HEIGHT / 100)
const WIDTH = (BaseStyle.DEVICE_WIDTH / 100)

const SpaceStyles = StyleSheet.create({
    alignSelf: {
        alignSelf: 'center'
    },
    rowFlex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    rowJustify: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    alignSpaceBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center'
    },
    top5: {
        marginTop: HEIGHT * 5
    },
    top3: {
        marginTop: HEIGHT * 3
    },
    top2: {
        marginTop: HEIGHT * 2
    },
    top1: {
        marginTop: HEIGHT * 1
    },
    spaceHorizontal: {
        marginHorizontal: WIDTH * 5
    },
    vertical1: {
        marginVertical: HEIGHT * 1
    },
    vertical2: {
        marginVertical: HEIGHT * 2
    },
    paddingVertical2: {
        paddingVertical: HEIGHT * 2
    },
    paddingVertical1: {
        paddingVertical: HEIGHT * 1
    }
});

export default SpaceStyles;
