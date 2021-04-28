import React from 'react'
import { View, Text } from 'react-native'

import './index.styl'

const Row = ({ title, children, last }) => {
  return pug`
    View.row(styleName=[{ last }])
      Text.title #{title}
      Text.text #{children}
  `
}
export default Row
