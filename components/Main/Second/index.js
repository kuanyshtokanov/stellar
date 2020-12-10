import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import './index.styl'

import Button from '../../Button'

const Second = () => {
  const handleClick = () => {
    console.log('Learn More pressed')
  }

  const items = [
    {
      iconSrc: ['fa', 'code-branch'],
      title: 'Etiam',
      text: '5,120',
      color: '#efa8b0'
    },
    {
      iconSrc: ['fa', 'copy'],
      title: 'Magna',
      text: '8,192',
      color: '#c79cc8'
    },
    {
      iconSrc: ['fa', 'signal'],
      title: 'Tempus',
      text: '2,048',
      color: '#a89cc8'
    },
    {
      iconSrc: ['fa', 'laptop'],
      title: 'Aliquam',
      text: '4,096',
      color: '#9bb2e1'
    },
    {
      iconSrc: ['fa', 'gem'],
      title: 'Nullam',
      text: '1,024',
      color: '#8cc9f0'
    }
  ]

  return pug`
    View.first
      Text.title Ipsum consequat
      View.line
      Text.txt(style={color: '#636363'}) Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
    View.statistic
      each item, index in items
        View.statItem(
          key=item.iconSrc
          styleName=[{head: index===0, tail: index===items.length-1}]
          style={backgroundColor: item.color}
        )
          View.icon
            FontAwesomeIcon(icon=item.iconSrc size=65 color='white')
          Text.subtitle #{item.title}
          Text.txt #{item.text}
    Text.infoText Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
    View.btn
      Button.button(title='Learn more' onPress=handleClick)
  `
}

export default Second
