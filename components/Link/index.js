import React from 'react'
import { Alert, TouchableOpacity, Linking } from 'react-native'

const Link = ({ children, url, active }) => {
  const handleClick = async () => {
    const supported = await Linking.canOpenURL(url)
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }

  return pug`
    TouchableOpacity(onPress=handleClick styleName=[{active}]) #{children}
  `
}

export default Link
