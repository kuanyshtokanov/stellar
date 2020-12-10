import React from 'react'
import { View } from 'react-native'
import './index.styl'

const Section = ({ children, first, intro }) => {
  return pug`
    View.section(styleName=[{ first, intro }]) #{children}
  `
}

export default Section