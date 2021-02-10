import React from 'react'
import { View, Text, Linking } from 'react-native'
import './index.styl'

import Section from '../Section'
import Button from '../Button'
import ContactInfo from '../ContactInfo'
import SocialInfo from '../SocialInfo'

const Footer = () => {
  const handleClick = () => {
    console.log('Learn More pressed')
  }

  const openTwitter = () => {
    Linking.openURL('https://twitter.com/ajlkn')
  }

  return pug`
    View.footer
      View.container
        Section
          Text.title Aliquam sed mauris
          Text.txt Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
          View.button
            Button(title='Learn more' onPress=handleClick info)
        Section
          Text.title Etiam feugiat
          ContactInfo
          SocialInfo
          View.last
            Text.lastText
              Text.copyright © Untitled. Design: 
              View.link
                Text(onPress=openTwitter).linkTxt HTML5 UP.
              Text.copyright   Demo Images: 
              View.link
                Text(onPress=openTwitter).linkTxt Unsplash.
  `
}

export default Footer
