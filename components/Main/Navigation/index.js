import React from 'react'
import { View, Text } from 'react-native'
import './index.styl'

import Link from '../../Link'

const Nav = () => {
  return pug`
    View.nav
      View.link.active
        Link.txt(url='#')
          Text.txt Introduction
      View.link
        Link(url='#')
        Text.txt First section
      View.link
        Link(url='#')
        Text.txt Second section
      View.link
        Link(url='#')
        Text.txt Get Started
  `
}

export default Nav
