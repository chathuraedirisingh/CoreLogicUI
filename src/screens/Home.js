import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(0);
}

import colors from '../styles/colors';
import { Header } from 'react-native-elements';
import SearchBar from '../components/searchbar/SearchBar';

class HomePage extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    // leftComponent={
                    //     <Icon 
                    //         name="menu" 
                    //         size = {30}
                    //         color= {colors.white}
                    //         onPress={() => this.props.navigation.openDrawer()} />
                    // }
                    centerComponent={<SearchBar/>}
                />
                <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.name}>Good Morning Joe</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
    },
    SearchHeader:{
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        alignItems: 'stretch',
    },
    name:{
        marginTop:20,
        fontSize: 30,
        // fontWeight: 'bold',
        color: 'rgba(0,0,0,0.5)',
    }
});
export default HomePage;