import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'lucide-react-native'

interface BackButtonProps {
  onPress?: () => void
  style?: any
}

const BackButton = ({ onPress, style }: BackButtonProps) => {
  const navigation = useNavigation()

  const handlePress = () => {
    if (onPress) {
      onPress()
    } else {
      navigation.goBack()
    }
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        {
          position: 'absolute',
          top: 50,
          left: 20,
          width: 56,
          height: 56,
          borderRadius: 90,
          backgroundColor: '#F7F7F7',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        },
        style,
      ]}
    >
      <ArrowLeft color="black" size={28} />
    </TouchableOpacity>
  )
}

export default BackButton
