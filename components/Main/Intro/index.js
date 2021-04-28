import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

import Button from '../../Button'

const Intro = () => {
  const base = BASE_URL

  return pug`
    View.container
      View.right
        View.border
          Image.img(source={uri:base+'/assets/pic01.jpg'})
      View.left
        Text.title="Ipsum sed adipiscing"
        View.line
        Text.txt="Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam."
        View.btn
          Button(title='Learn More')
  `
}

export default Intro
