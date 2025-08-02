import { View, Text, Image, TouchableOpacity } from 'react-native'
import Star from '@/assets/icons/Star.svg'
import MapPin from '@/assets/icons/MapPin.svg'
import { Activity } from '@/api/activities'

interface ActivityCardProps {
  activity: Activity
  onPress: (activity: Activity) => void
}

const ActivityCard = ({ activity, onPress }: ActivityCardProps) => {
  return (
    <TouchableOpacity className="w-full" onPress={() => onPress(activity)}>
      <Image
        source={{ uri: activity.photoUrl }}
        className="h-[140px] w-full rounded-2xl"
      />

      <View className="bg-gray-100 rounded-2xl p-5 mt-1 flex-row justify-between items-center">
        <View className="h-[45px] flex-col justify-between">
          <Text className="text-base font-[Abel-Regular]">{activity.name}</Text>
          <View className="flex-row items-center gap-1">
            <MapPin />
            <Text className="text-xs font-sans">{activity.location}</Text>
          </View>
        </View>

        <View className="items-end">
          <View className="flex-row items-center mb-1">
            <Star />
            <Text className="text-xs ml-1 font-sans">{activity.rating}</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-sm font-[Abel-Regular]">
              ${activity.price}
            </Text>
            <Text className="text-xs font-[Abel-Regular] text-gray-400 ml-1">
              / night
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ActivityCard
