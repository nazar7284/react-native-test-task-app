import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from './types/root'
import { useAddFavorite } from '../api/favorites'
import MapPin from '../../assets/icons/MapPin.svg'
import { ArrowLeft } from 'lucide-react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useState } from 'react'

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'ActivityDetails'>
type NavProp = StackNavigationProp<RootStackParamList, 'ActivityDetails'>

const ActivityDetailsScreen = () => {
  const { params } = useRoute<DetailsScreenRouteProp>()
  const navigation = useNavigation<NavProp>()
  const { mutate: addFavorite, isPending } = useAddFavorite()

  const [isFavorite, setIsFavorite] = useState(false)
  const loading = isPending

  const handleAddToFavorites = () => {
    if (isFavorite || loading) return

    addFavorite(
      { id: params.activity.id },
      {
        onSuccess: () => setIsFavorite(true),
        onError: error => console.error(error),
      },
    )
  }

  return (
    <View className="flex-1 bg-white">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
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
        }}
      >
        <ArrowLeft color="black" size={28} />
      </TouchableOpacity>
      <ScrollView
        className="gap-5"
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View className="relative">
          <Image
            source={{ uri: params.activity.photoUrl }}
            className="w-full h-[450px]"
          />
        </View>

        <View className="px-5 gap-5">
          <Text className="text-2xl font-[Abel-Regular]">
            {params.activity.name}
          </Text>

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <MapPin />
              <Text className="text-base">${params.activity.price}</Text>
            </View>
            <Text className="text-[#979797]">Included taxes and fees</Text>
          </View>

          <View className="flex-row items-center h-[1px] bg-[#F5F5F5]" />

          <View className="flex-col">
            <Text className="text-base mb-2.5">Description</Text>
            <Text className="text-sm text-[#9D9D9D]">
              {params.activity.description}
            </Text>
          </View>

          <View className="flex-row items-center h-[1px] bg-[#F5F5F5]" />
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 16,
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          backgroundColor: 'white',
        }}
      >
        <TouchableOpacity
          onPress={handleAddToFavorites}
          disabled={isFavorite || loading}
          className={`py-4 rounded-2xl ${
            isFavorite ? 'bg-gray-400' : 'bg-black'
          }`}
        >
          <Text className="text-white text-center text-lg font-semibold">
            {isFavorite
              ? 'Added to Favorites'
              : loading
                ? 'Adding...'
                : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ActivityDetailsScreen
