import React from 'react'
import { View, Image, Text, Linking } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

const Header = () => {
  const base = BASE_URL

  const openTwitter = () => {
    Linking.openURL('https://twitter.com/ajlkn')
  }

  const openSite = () => {
    Linking.openURL('https://html5up.net/')
  }

  return pug`
    View.header
      View.logo
        Image.img(source={uri:base+'/assets/logo.svg'})
      Text.title Stellar
      Text.description
        Text.txt Just another free, fully responsive site template built by 
        View.link
          Text(onPress=openTwitter).linkTxt @ajlkn  
        Text.txt for 
        View.link
          Text(onPress=openSite).linkTxt HTML5 UP
  `
}

export default Header
