import React from 'react'
import { View, Image, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import './index.styl'

import Section from '../Section'
import Button from '../../Button'

const First = () => {
  const handleClick = () => {
    console.log('Learn More pressed')
  }

  const items = [
    {
      iconSrc: ['fa', 'code'],
      title: 'Ipsum consequat',
      text: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.',
      color: 'rgb(239, 168, 176)',
    },
    {
      iconSrc: ['fa', 'copy'],
      title: 'Amed sed feugiat',
      text: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.',
      color: 'rgb(168, 156, 200)',
    },
    {
      iconSrc: ['fa', 'gem'],
      title: 'Dolor nullam',
      text: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.',
      color: 'rgb(140, 201, 240)',
    },
  ]

  return pug`
    Section
      View.first
        Text.title Ipsum sed adipiscing
        View.line
      View.list
        each item, index in items
          View.listItem(key=item.iconSrc styleName=[{head: index===0, tail: index>1}])
            View.outerIcon
              View.icon
                FontAwesomeIcon(icon=item.iconSrc size=65 color=item.color)
            Text.subtitle #{item.title}
            Text.txt #{item.text}
      View.btn
        Button.button(title='Learn more' onPress=handleClick)
  `
}

export default First
