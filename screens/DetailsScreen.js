import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const DetailsScreen = () =>
{
    return(
        <View style={styles.container}>
            <Text>DetailsScreen</Text>
        </View>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});