import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from './types/root'
import { useAddFavorite } from '../api/favorites'
import MapPin from '../../assets/icons/MapPin.svg'
import { useState } from 'react'
import BackButton from '@/components/BackButton'

const ActivityDetailsScreen = () => {
  const { params } =
    useRoute<RouteProp<RootStackParamList, 'ActivityDetails'>>()
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
      <BackButton />
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
