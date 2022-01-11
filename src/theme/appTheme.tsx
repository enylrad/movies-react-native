import { StyleSheet } from "react-native";

export const stylesGlobal = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    allBorder: {
        borderRadius: 15,
    },
    bottomBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    }
});