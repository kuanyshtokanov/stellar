import React from 'react'
import { View } from 'react-native'
import './index.styl'

const Section = ({ children }) => {
  return pug`
    View.section #{children}
  `
}

export default Section