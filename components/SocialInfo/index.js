import React from 'react'
import { View, Image, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'
import './index.styl'

import Link from '../Link'

const SocialInfo = () => {

  const socialData = [
    {
      iconSrc: ['fab', 'twitter'],
      url: 'https://twitter.com/',
    },
    {
      iconSrc: ['fab', 'facebook'],
      url: 'https://www.facebook.com/',
    },
    {
      iconSrc: ['fab', 'instagram'],
      url: 'https://www.instagram.com/',
    },
    {
      iconSrc: ['fab', 'github'],
      url: 'https://github.com/',
    },
    {
      iconSrc: ['fab', 'dribbble'],
      url: 'https://dribbble.com/',
    }
  ]

  return pug`
    View.container
      each iconData, index in socialData
        Link(url=iconData.url key=iconData.iconSrc)
          FontAwesomeIcon.icon(icon=iconData.iconSrc)
  `
}

export default SocialInfo
