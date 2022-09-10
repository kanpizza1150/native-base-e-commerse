import {
  Avatar,
  Box,
  Button,
  Divider,
  FlatList,
  HStack,
  Heading,
  IconButton,
  Image,
  Spacer,
  Stack,
  Text,
  VStack,
} from 'native-base'
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectProducts } from '../Redux/products/slice'

const ProductList = () => {
  const products = useSelector(selectProducts)
  return (
    <HStack flexWrap="wrap" justifyContent="space-between" p={2}>
      {products.map((item) => (
        <VStack
          rounded="3xl"
          shadow={3}
          key={item.id}
          bg="primary.100"
          my={2}
          w={180}
          h={300}
        >
          <VStack
            overflow="hidden"
            m={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              source={{ uri: item.image }}
              alt={item.title}
              w={100}
              h={150}
            />
            <Box alignItems="flex-start">
              <Heading mt={2} fontSize="md" numberOfLines={1}>
                {item.title}
              </Heading>
              <Text mt={2} fontSize="xs" numberOfLines={2}>
                {item.title}
              </Text>
            </Box>
            <Box alignItems="flex-end" justifyContent="flex-end">
              <Button>Add to cart</Button>
            </Box>
          </VStack>
        </VStack>
      ))}
    </HStack>
  )
}

export default ProductList
