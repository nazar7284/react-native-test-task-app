declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}

declare module 'react-native-vector-icons/*' {
  import { ComponentType } from 'react'
  import { TextStyle, ViewStyle, ImageStyle } from 'react-native'

  const Icon: ComponentType<{
    name: string
    size?: number
    color?: string
    style?: TextStyle | ViewStyle | ImageStyle
  }>

  export default Icon
}
