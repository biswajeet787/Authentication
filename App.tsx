import { View, Text } from 'react-native'
import React from 'react'
import UseEffect from './My_Pratice/UseState_UseEffect/UseEffect';
import UseEffect2 from './My_Pratice/UseState_UseEffect/UseEffect2';
import Send_Money from './My_Pratice/UI Pratice/Send_Money';
import Google_OTP from './My_Pratice/Authentication/Google_OTP';
import Auth_Screen from './My_Pratice/Authentication/Auth_Screen';

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <UseEffect /> */}
      {/* <UseEffect2 /> */}
      {/* <Send_Money /> */}
      {/* <Google_OTP /> */}
      <Auth_Screen />
    </View>
  )
}

export default App