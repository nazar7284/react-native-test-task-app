import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RootRouter from './src/screens/RootRouter'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Root = () => {
  return (
    <>
      <RootRouter />
    </>
  )
}

const queryClient = new QueryClient()

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" translucent />
      <GestureHandlerRootView>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <Root />
          </QueryClientProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
