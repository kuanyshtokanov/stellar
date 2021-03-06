import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'
import Header from '../../../components/Header'
import Main from '../../../components/Main'
import Footer from '../../../components/Footer'

export default observer(function PAbout () {
  return pug`
    ScrollView.root
      View.container
        Header
        Main
        Footer
  `
})
