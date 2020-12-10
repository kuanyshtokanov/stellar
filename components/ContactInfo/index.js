import React from 'react'
import { View, Text } from 'react-native'
import './index.styl'

import Row from '../Row'
import Link from '../Link'

const ContactInfo = () => {
  return pug`
    View.container
      Row(title='Address')
        Text 1234 Somewhere Road • Nashville, TN 00000 • USA
      Row(title='Phone')
        Text (000) 000-0000 x 0000
      Row(title='Email' last)
        Link(url='#')
          Text.link information@untitled.tld
  `
}

export default ContactInfo
