import { Text, SafeAreaView, FlatList } from 'react-native'
import { useActivities } from '@/api/activities'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/screens/types/root'
import ActivityCard from '@/components/ActivityCard'
import Loader from '@/components/Loader'
import ErrorView from '@/components/ErrorView'
import { Activity } from '@/api/activities'

const HomeScreen = () => {
  const { data: activities, isLoading, isError } = useActivities()
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <ErrorView />
  }

  const handleActivityPress = (activity: Activity) => {
    navigate('ActivityDetails', { activity })
  }

  const renderItem = ({ item }: { item: Activity }) => (
    <ActivityCard activity={item} onPress={handleActivityPress} />
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
