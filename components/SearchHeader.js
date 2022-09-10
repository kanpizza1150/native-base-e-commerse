import { Ionicons } from '@expo/vector-icons'
import {
  Avatar,
  Badge,
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  Pressable,
  ScrollView,
  VStack,
} from 'native-base'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectActiveCategory,
  selectCategory,
  setActiveCategory,
  setAllProducts,
} from '../Redux/products/slice'
import useAxios from '../hooks/useAxios'

const SearchHeader = () => {
  const [productApi, setProductApi] = useState('/products')
  const dispatch = useDispatch()
  const category = useSelector(selectCategory)
  const activeCategory = useSelector(selectActiveCategory)
  const products = useAxios({ url: productApi })
  const onBadgePress = (val) => {
    dispatch(setActiveCategory(val))
    if (val === 'All') {
      setProductApi('/products')
    } else {
      setProductApi(`/products/category/${val}`)
    }
  }
  useEffect(() => {
    if (!products.loading && products.response) {
      dispatch(setAllProducts(products.response))
    }
  }, [products])

  return (
    <VStack p={5}>
      <Box>
        <Heading size="xl">Discover</Heading>
        <Heading size="xl">our new items!</Heading>
      </Box>
      <HStack justifyContent="space-between" mt={5} w="100%">
        <Box
          w="85%"
          shadow={1}
          backgroundColor="white"
          rounded="3xl"
          alignItems="center"
          p={2}
        >
          <Input
            borderColor="transparent"
            w={{
              base: '100%',
              md: '25%',
            }}
            variant="unstyled"
            InputLeftElement={
              <Icon
                as={<Ionicons name={'ios-search'} size={24} />}
                color="grey"
                size="md"
              />
            }
            placeholder="Search Items"
          />
        </Box>
        <Button ml={2} variant="solid">
          <Icon
            as={<Ionicons name="ios-filter-outline" size={24} color="black" />}
            color="white"
            size="md"
          />
        </Button>
      </HStack>
      <ScrollView horizontal mt={5} showsHorizontalScrollIndicator={false}>
        {category.map((cate) => (
          <Pressable key={cate} onPress={() => onBadgePress(cate)}>
            <Badge
              rounded="3xl"
              py={1}
              px="2"
              mr={2}
              {...(activeCategory === cate
                ? {
                    bg: 'primary.600',
                    _text: { color: 'primary.100' },
                  }
                : { bg: 'primary.200' })}
            >
              {cate}
            </Badge>
          </Pressable>
        ))}
      </ScrollView>
    </VStack>
  )
}

export default SearchHeader
