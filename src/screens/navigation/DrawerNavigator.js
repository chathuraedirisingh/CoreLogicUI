import { createDrawerNavigator } from "react-navigation-drawer";
// import { BlankScreen } from '../BlankScreen';
import { createAppContainer } from "react-navigation";
import HomePage from "../Home";
import BlankScreen from "../BlankScreen";
import TabNavigator from "../TabNavigator";
import colors from "../../styles/colors";
import Settings from "../Tabs/Settings";
import { Icon } from "react-native-vector-icons/AntDesign";
import { Dimensions } from "react-native";
import CustomSidebarMenu from "./CustomDrawer";

const DrawerNavigator = createDrawerNavigator(
    {
        Scan: {
            screen: TabNavigator,
            navigationOptions:{
                drawerLabel:'Scan ID',
                // drawerIcon:()=><Icon name="home" size={27} color={tintColor} />
            }
            
        },
        DA: {
            screen: Settings,
            navigationOptions:{
                drawerLabel:'Digital Application'
            }
            
        },
        CI: {
            screen: BlankScreen,
            navigationOptions:{
                drawerLabel:'Credit Inquiry'
            }
            
        },
        PQ: {
            screen: BlankScreen,
            navigationOptions:{
                drawerLabel:'Compliance Solutions'
            }
            
        },
        SF: {
            screen: BlankScreen,
            navigationOptions:{
                drawerLabel:'Synthetic Fraud'
            }
            
        },
        TS: {
            screen: BlankScreen,
            navigationOptions:{
                drawerLabel:'Transactions'
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
                drawerLabel:'Account Settings'
            }
            
        },
        PD: {
            screen: BlankScreen,
            navigationOptions:{
                drawerLabel:'Push Date to DT/TR1'
            }
            
        },
        DMS: {
            screen: BlankScreen,
            navigationOptions:{
                drawerLabel:'DMS Sync'
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
        contentComponent:CustomSidebarMenu,
        drawerWidth:Dimensions.get('window').width -80
    }
);

export default createAppContainer(DrawerNavigator);