import React from 'react'
import { View, Text, Linking } from 'react-native'
import './index.styl'

import Row from '../Row'

const ContactInfo = () => {
  const openSite = () => {
    Linking.openURL('mailto:information@untitled.tld')
  }

  return pug`
    View.container
      Row(title='Address')
        Text 1234 Somewhere Road • Nashville, TN 00000 • USA
      Row(title='Phone')
        Text (000) 000-0000 x 0000
      Row(title='Email' last)
        Text
          View.link
            Text(onPress=openSite).txt information@untitled.tld
  `
}

export default ContactInfo
