import { SimpleLineIcons } from '@expo/vector-icons'
import { Avatar, HStack } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'

const NavigateHeader = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center" p={5}>
      <SimpleLineIcons name="menu" size={24} color="black" />
      <Avatar
        bg="green.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
      >
        AJ
      </Avatar>
    </HStack>
  )
}

export default NavigateHeader
