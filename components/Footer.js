import { Ionicons } from '@expo/vector-icons'
import { Center, HStack, Icon, Pressable, Stack } from 'native-base'
import React from 'react'

const Footer = () => {
  const [selected, setSelected] = React.useState(0)
  const menus = [
    {
      icon: (
        <Ionicons
          name={selected === 0 ? 'ios-home' : 'ios-home-outline'}
          size={24}
        />
      ),
      value: 0,
    },
    {
      icon: (
        <Ionicons
          name={selected === 1 ? 'ios-cart' : 'ios-cart-outline'}
          size={24}
        />
      ),
      value: 1,
    },
    {
      icon: (
        <Ionicons
          name={selected === 2 ? 'ios-heart' : 'ios-heart-outline'}
          size={24}
        />
      ),
      value: 2,
    },
    {
      icon: (
        <Ionicons
          name={selected === 3 ? 'ios-person' : 'ios-person-outline'}
          size={24}
        />
      ),
      value: 3,
    },
  ]
  return (
    <Stack alignItems="center" safeAreaBottom backgroundColor="transparent">
      <HStack
        space={3}
        alignItems="center"
        backgroundColor="primary.900"
        p={6}
        py={7}
        rounded="3xl"
      >
        {menus.map((menu) => (
          <Pressable
            key={menu.value}
            onPress={() => setSelected(menu.value)}
            marginX={5}
          >
            <Center>
              <Icon as={menu.icon} color="primary.100" size="md" />
            </Center>
          </Pressable>
        ))}
      </HStack>
    </Stack>
  )
}

export default Footer
