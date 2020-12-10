import React from 'react'
import { View } from 'react-native'
import './index.styl'

const Section = ({ children, first, intro, navBar }) => {
  return pug`
    View.section(styleName=[{ first, intro, navBar }]) #{children}
  `
}

export default Section
