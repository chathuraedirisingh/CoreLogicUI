import { createDrawerNavigator } from "react-navigation-drawer";
// import { BlankScreen } from '../BlankScreen';
import { createAppContainer } from "react-navigation";
import HomePage from "../Home";
import BlankScreen from "../BlankScreen";
import TabNavigator from "../TabNavigator";
import colors from "../../styles/colors";
import Settings from "../Tabs/Settings";

const DrawerNavigator = createDrawerNavigator(
    {
        Scan: {
            screen: TabNavigator,
            navigationOptions:{
                title:'Scan ID'
            }
            
        },
        DA: {
            screen: Settings,
            navigationOptions:{
                title:'Digital Application'
            }
            
        },
        CI: {
            screen: BlankScreen,
            navigationOptions:{
                title:'Credit Inquiry'
            }
            
        },
        PQ: {
            screen: BlankScreen,
            navigationOptions:{
                title:'Compliance Solutions'
            }
            
        },
        SF: {
            screen: BlankScreen,
            navigationOptions:{
                title:'Synthetic Fraud'
            }
            
        },
        TS: {
            screen: BlankScreen,
            navigationOptions:{
                title:'Transactions'
            }
            
        },
        MA: {
            screen: BlankScreen,
            navigationOptions:{
                title:'Message Alerts'
            }
            
        },
        Settings: {
            screen: BlankScreen,
            navigationOptions:{
                title:'Account Settings'
            }
            
        },
        PD: {
            screen: BlankScreen,
            navigationOptions:{
                title:'Push Date to DT/TR1'
            }
            
        },
        DMS: {
            screen: BlankScreen,
            navigationOptions:{
                title:'DMS Sync'
            }
            
        },
    },
    {
        hideStatusBar: true,
        drawerBackgroundColor: colors.white,
        // overlayColor: '#fff',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: colors.background,
        },
    }
);

export default createAppContainer(DrawerNavigator);