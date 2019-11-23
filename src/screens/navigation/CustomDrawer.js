import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.profileImage =
      'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        navOptionThumb: 'camera',
        navOptionName: 'ID Scan',
        screenToNavigate: 'Scan',
      },
      {
        navOptionThumb: 'image',
        navOptionName: 'Digital Application',
        screenToNavigate: 'DA',
      },
      {
        navOptionThumb: 'build',
        navOptionName: 'Credit Inquiry',
        screenToNavigate: 'CI',
      },
      {
        navOptionThumb: 'file-text',
        navOptionName: 'Pre-qualifications',
        screenToNavigate: 'PQ',
      },
      {
        navOptionThumb: 'camera',
        navOptionName: 'Compilance Solutions',
        screenToNavigate: 'SF',
      },
      {
        navOptionThumb: 'camera',
        navOptionName: 'Synthetic Fraud',
        screenToNavigate: 'TS',
      },
      {
        navOptionThumb: 'camera',
        navOptionName: 'Transactions',
        screenToNavigate: 'MA',
      },
      {
        navOptionThumb: 'camera',
        navOptionName: 'Manage Alerts',
        screenToNavigate: 'Settings',
      },
      {
        navOptionThumb: 'camera',
        navOptionName: 'Account Settings',
        screenToNavigate: 'PD',
      },
      {
        navOptionThumb: 'image',
        navOptionName: 'DMS Sync',
        screenToNavigate: 'DMS',
      }
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <View style={styles.sideMenuProfileIcon}>
          <ImageBackground
            // source={{ uri: this.proileImage }}
            source={require('../../../assets/wallpaper.png')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../../assets/agent-2.jpg')}
                style={{ width: 70, height: 70, borderRadius: 400 / 2 }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginLeft: 20, fontWeight: 'bold', marginTop: 10, fontSize: 18 }}>Jane Doe</Text>
                <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 15 }}>XXX-XXXX-3452</Text>
              </View>
            </View>

          </ImageBackground>
        </View>
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <ScrollView style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor:
                  global.currentScreenIndex === key ? '#2196F3' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25}
                  color={global.currentScreenIndex === key ? '#ffffff' : '#2196F3'} />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'white' : '#2196F3',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    flexDirection: 'column-reverse',
    // resizeMode: 'center',
    width: 150,
    height: 150,
    marginLeft: 20,
    // marginTop: 20,
    borderRadius: 150 / 2,
  },
});
