import React from 'react'
import { View, Image, Text } from 'react-native'
import './index.styl'

import Intro from './Intro'
import First from './First'
import Second from './Second'

const Main = () => {

  return pug`
    View.main
      Intro
      First
      Second
  `
}

export default Main
