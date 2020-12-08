import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

import Link from '../Link'

const Header = () => {
  const base = BASE_URL
  return pug`
    View.header
      View.logo
        Image.img(source={uri:base+'/assets/logo.svg'})
      Text.title Stellar
      Text.txt Just another free, fully responsive site template built by 
        Link(url='https://twitter.com/ajlkn')
          Text.link @ajlkn 
        | for 
        Link(url='https://html5up.net/')
          Text.link HTML5 UP
  `
}

export default Header
