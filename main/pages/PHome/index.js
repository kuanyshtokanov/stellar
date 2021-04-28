import React from 'react'
import { ScrollView } from 'react-native'
import { observer } from 'startupjs'
import { TestComponent } from 'components'
import './index.styl'
import { Content } from '@startupjs/ui'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      Content
        TestComponent
  `
})
