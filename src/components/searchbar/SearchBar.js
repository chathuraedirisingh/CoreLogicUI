import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icn from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import colors from '../../styles/colors';

var width = Dimensions.get('window').width; //full width

export default class SearchBar extends Component {
    
  render() {
  	return (
    <View style={styles.wrapper}>
        <Icon 
            name="menu" 
            size = {30}
            color= {colors.white}
            onPress={() => this.props.navigation.openDrawer()} />

      <View style={styles.searchContainer}>
        <Icn
          name="ios-search"
          size={20}
          color={colors.white}
          style={styles.searchIcon}
        />
        <Text style={styles.textInput}>Search</Text>
      </View>
    </View>
  	);
  }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection:'row',
        width:width-30
    },

  searchContainer: {
  	// display: 'flex',
      // borderWidth: 1,
    // alignSelf: 'stretch',
    width: width-90,
  	// borderColor: colors.gray03,
  	backgroundColor: 'rgba(255,255,255,0.5)',
  	// shadowColor: 'rgba(0,0,0,0.1)',
  	// shadowOffset: { width: 0, height: 5 },
  	// shadowOpacity: 0.7,
  	// shadowRadius: 10,
  	borderRadius: 3,
  	height: 40,
  	// marginTop: 28,
  	marginLeft: 21,
  	// marginRight: 21,
  },
  searchIcon: {
  	position: 'absolute',
  	left: 9,
  	top: 9,
  },
  textInput: {
    display: 'flex',
    marginTop: 9,
    marginLeft: 30,
    color: colors.white,
  },
});