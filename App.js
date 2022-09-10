import {
  HStack,
  NativeBaseProvider,
  Switch,
  Text,
  useColorMode,
} from 'native-base'
import React from 'react'
import { Provider } from 'react-redux'

import Main from './Main'
import { store } from './Redux/store'
import { theme } from './utils/theme'

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Main />
      </NativeBaseProvider>
    </Provider>
  )
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  )
}
