import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import Star from '../../assets/icons/Star.svg'
import MapPin from '../../assets/icons/MapPin.svg'
import { useActivities } from '../api/activities'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from './types/root'

interface Activity {
  id: number
  photoUrl: string
  name: string
  description: string
  location: string
  price: number
  rating: number
}

const HomeScreen = () => {
  const { data: activities, isLoading, isError } = useActivities()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  if (isError) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text>Something went wrong</Text>
      </SafeAreaView>
    )
  }

  const renderItem = ({ item }: { item: Activity }) => (
    <TouchableOpacity
      className="w-full"
      onPress={() => navigation.navigate('ActivityDetails', { activity: item })}
    >
      <Image
        source={{ uri: item.photoUrl }}
        className="h-[140px] w-full rounded-2xl"
      />

      <View className="bg-gray-100 rounded-2xl p-5 mt-1 flex-row justify-between items-center">
        <View className="h-[45px] flex-col justify-between">
          <Text className="text-base font-[Abel-Regular]">{item.name}</Text>
          <View className="flex-row items-center gap-1">
            <MapPin />
            <Text className="text-xs font-sans">{item.location}</Text>
          </View>
        </View>

        <View className="items-end">
          <View className="flex-row items-center mb-1">
            <Star />
            <Text className="text-xs ml-1 font-sans">{item.rating}</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-sm font-[Abel-Regular]">${item.price}</Text>
            <Text className="text-xs font-[Abel-Regular] text-gray-400 ml-1">
              / night
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-center text-base font-[Abel-Regular] my-4">
        Activities
      </Text>

      <FlatList
        data={activities}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, gap: 10 }}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
