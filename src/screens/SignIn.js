import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

// import transparentHeaderStyle from '../styles/navigation';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import colors from '../styles/colors';
import styles from './styles/SignIn';

class SignIn extends Component {
//   static navigationOptions = ({ navigation }) => ({
//     headerRight: <NavBarButton
//       handleButtonPress={() => navigation.navigate('ForgotPassword')}
//       location="right"
//       color={colors.white}
//       text="Forgot Password"
//     />,
//     headerLeft: <NavBarButton
//       handleButtonPress={() => navigation.goBack()}
//       location="left"
//       icon={<Icon name="angle-left" color={colors.white} size={30} />}
//     />,
//     headerStyle: transparentHeaderStyle,
//     headerTransparent: true,
//     headerTintColor: colors.white,
//   });

//   constructor(props) {
//     super(props);
//     this.state = {
//       formValid: true,
//       validEmail: false,
//       emailAddress: '',
//       password: '',
//       validPassword: false,
//       loadingVisible: false,
//     };

//     this.handleCloseNotification = this.handleCloseNotification.bind(this);
//     this.handleEmailChange = this.handleEmailChange.bind(this);
//     this.handleNextButton = this.handleNextButton.bind(this);
//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
//     this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
//   }

//   handleNextButton() {
//     this.setState({ loadingVisible: true });
//     const { logIn, navigation } = this.props;
//     const { navigate } = navigation;

//     setTimeout(() => {
//       const { emailAddress, password } = this.state;
//       if (logIn(emailAddress, password)) {
//         this.setState({ formValid: true, loadingVisible: false });
//         navigate('HomeNavigationDrawer');
//       } else {
//         this.setState({ formValid: false, loadingVisible: false });
//       }
//     }, 2000);
//   }

//   handleCloseNotification() {
//     this.setState({ formValid: true });
//   }

//   handleEmailChange(email) {
//     // eslint-disable-next-line
//     const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const { validEmail } = this.state;
//     this.setState({ emailAddress: email });

//     if (!validEmail) {
//       if (emailCheckRegex.test(email)) {
//         this.setState({ validEmail: true });
//       }
//     } else if (!emailCheckRegex.test(email)) {
//       this.setState({ validEmail: false });
//     }
//   }

//   handlePasswordChange(password) {
//     const { validPassword } = this.state;

//     this.setState({ password });

//     if (!validPassword) {
//       if (password.length > 4) {
//         // Password has to be at least 4 characters long
//         this.setState({ validPassword: true });
//       }
//     } else if (password <= 4) {
//       this.setState({ validPassword: false });
//     }
//   }

//   toggleNextButtonState() {
//     const { validEmail, validPassword } = this.state;
//     if (validEmail && validPassword) {
//       return false;
//     }
//     return true;
//   }

  render() {
    // const {
    //   formValid, loadingVisible, validEmail, validPassword,
    // } = this.state;
    // const showNotification = !formValid;
    const background = colors.background; 
    // const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
        behavior="padding"
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              defaultValue="a@a.com"
              customStyle={{ marginBottom: 30 }}
            //   onChangeText={this.handleEmailChange}
            //   showCheckmark={validEmail}
              autoFocus
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              defaultValue="23456"
              customStyle={{ marginBottom: 30 }}
            //   onChangeText={this.handlePasswordChange}
            //   showCheckmark={validPassword}
            />
          </ScrollView>
          <NextArrowButton
            // handleNextButton={this.handleNextButton}
            // disabled={this.toggleNextButtonState()}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignIn;