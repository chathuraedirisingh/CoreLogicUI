import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
if (Platform.OS === 'android') {
    SafeAreaView.setStatusBarHeight(0);
}


import colors from '../styles/colors';
import { Header } from 'react-native-elements';
import SearchBar from '../components/searchbar/SearchBar';

import { createBottomTabNavigator } from 'react-navigation-tabs';


class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={<SearchBar />}
                />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.name}>Good Morning Joe</Text>
                    <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                        <Text>Open Drawer</Text>
                    </TouchableOpacity>
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
    SearchHeader: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        alignItems: 'stretch',
    },
    name: {
        marginTop: 20,
        fontSize: 30,
        // fontWeight: 'bold',
        color: 'rgba(0,0,0,0.5)',
    }
});
export default HomePage;