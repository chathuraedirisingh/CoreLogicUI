import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
if (Platform.OS === 'android') {
    SafeAreaView.setStatusBarHeight(0);
}


import colors from '../styles/colors';
import { Header, Image } from 'react-native-elements';
import SearchBar from '../components/searchbar/SearchBar';


import { createBottomTabNavigator } from 'react-navigation-tabs';


class HomePage extends Component {
    render() {
        const { params } = this.props.navigation.state;
        var image = params ? params.image : null;
        // const encoded = image.base64;
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={<SearchBar />}
                />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.name}>Good Morning Joe</Text>
                    {/* <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                        <Text>Open Drawer</Text>
                    </TouchableOpacity> */}

                    <View>{this.showImage(image)}</View>

                </View>
            </View>
        );
    }

    showImage(image) {
        // console.log("Hi " + JSON.stringify(image));
        if (image == null) {
            return <Text>No</Text>
        }
        else {
            const id = image.base64;
            return <View style={styles.imageview}>
                <Image
                    source={{ uri: `data:image/gif;base64,${id}` }}
                    style={styles.image}
                />
            </View>

        }
    }

}

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
    },
    image: {
        width: width - 100,
        height: height - 400,
        resizeMode: 'cover',
    },
    imageview: {
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
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

class ItemViewComponent extends Component {
    render() {
        const helloMessage = <Text> Hello, JSX! </Text>;
        const goodbyeMessage = <Text> Goodbye, JSX! </Text>;
        return (
            <View>
                {this.props.isGreeting ? helloMessage : goodbyeMessage}
            </View>
        );
    }
}
export default HomePage;