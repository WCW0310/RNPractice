import React, { useState } from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native'
import TorchManager from './nativeModules/TorchManager'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  }

  const [torchState, setTorchState] = useState(false)

  const onPress = () => {
    TorchManager.toggleTorch(!torchState)
    setTorchState(!torchState)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button title="Torch" onPress={onPress}></Button>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App
