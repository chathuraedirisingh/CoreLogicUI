import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                    <Text>Open Drawer</Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
            </View>
        );
    }
}

export default HomeScreen;