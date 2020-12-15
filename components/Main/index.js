import React from 'react'
import { View } from 'react-native'
import './index.styl'

import Section from './Section'
import Nav from './Navigation'
import Intro from './Intro'
import First from './First'
import Second from './Second'
import Cta from './Cta'

const Main = () => {
  return pug`
    View.main
      Section(navBar)
        Nav
      Section(intro first)  
        Intro
      Section
        First
      Section
        Second
      Section
        Cta
  `
}

export default Main
