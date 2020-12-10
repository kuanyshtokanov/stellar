import React, { useState } from 'react'
import { View } from 'react-native'
import './index.styl'

import Link from '../../Link'

const Nav = () => {

  return pug`
    View.nav
      View.link.active
        Link(url='#') Introduction
      View.link
        Link(url='#') First section
      View.link
        Link(url='#') Second section
      View.link
        Link(url='#') Get Started
  `
}

export default Nav
