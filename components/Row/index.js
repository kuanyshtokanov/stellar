import React from 'react'
import { View, Text } from 'react-native'

import './index.styl'

const Row = ({ title, children }) => {
  return pug`
    View.row
      Text.title #{title}
      Text.text #{children}
  `
}
export default Row
