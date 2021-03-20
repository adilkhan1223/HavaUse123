import React from 'react'
import { View, Text } from 'react-native'
import MainCart from './src/Screens/Cart/MainCart'
import Main from './src/Screens/HavaUseBemo/Main';
import MainScreen2 from './src/Screens/Main/MainScreen2'
import Dispensaries from './src/Screens/Dispensaries/Dispensaries'
import MyReturnAndRefund from './src/Screens/ReturnAndRefund/MyReturnAndRefund'
import MyProfile from './src/Screens/Profile/MyProfile'
import DetailsReview from './src/Screens/Details/DetailsReview'
import SettingScreen from './src/Screens/SettingScreen/SettingScreen';
import BuynowScreen from './src/Screens/BuyNow/BuynowScreen';
import Main3 from './src/Screens/Main/MainScreen';
import Payment from "./src/Screens/CheckOut/Payment"
import Timing from "./src/Screens/Timing/Timing"
import HavausePlusMaps from './src/Screens/Maps/HavausePlusMaps';
import RateApp from './src/Screens/Profile/RateApp';
import PaymentMethod from './src/Screens/Payment/PaymentMethod';


export default function App() {
  return (
    <View> 
      {/* <BuynowScreen  /> */}
      <Main3   />
    </View>
  )
}
