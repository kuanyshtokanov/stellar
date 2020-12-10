import React from 'react'
import { View, Text } from 'react-native'
import './index.styl'

import Button from '../../Button'

const Second = () => {
  const handleClick = () => {
    console.log('Learn More pressed')
  }

  const handleActionClick = () => {
    console.log('Get Started pressed')
  }

  return pug`
    View.first
      Text.title Congue imperdiet
      View.line
      Text.txt Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
    View.buttons
      View.button
        Button(
          title='Get Started'
          onPress=handleActionClick
          action
        )
      View.button.last
        Button(
          title='Learn more'
          onPress=handleClick
        )
        
  `
}

export default Second
