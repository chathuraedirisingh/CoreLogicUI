import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

import { Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(0);
}

import colors from '../styles/colors';

class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={
                        <Icon 
                            name="menu" 
                            size = {30}
                            color= {colors.white}
                            onPress={() => this.props.navigation.openDrawer()} />
                    }
                    centerComponent={<TextInput>Hi</TextInput>}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Home Page</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default HomePage;