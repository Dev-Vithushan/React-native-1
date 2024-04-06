import React from "react";

import {
    View,
    Text,
    useColorScheme,
    StyleSheet,
} from 'react-native'
import App from "./App";

// This methoda always returns a JSX element
function AppPro(): JSX.Element{

    const isDarkMode = useColorScheme() === 'dark';

    return(
        <View style={styles.container}>
            <Text style = {isDarkMode ? styles.whiteText : styles.blackText}> Hello from App pro </Text>
        </View>
    )
}

// Styling the React Native Component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    whiteText:{
        color: 'white'

    },
    blackText:{
        color: 'black'
    }
})



export default AppPro;