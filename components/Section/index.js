import React from 'react'
import { View } from 'react-native'
import './index.styl'

const Section = ({ children, center }) => {
  return pug`
    View.section(styleName=[{ center }]) #{children}
  `
}

export default Section
