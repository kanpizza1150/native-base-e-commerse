import { Center, ScrollView, VStack } from 'native-base'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectCategory,
  setAllCategories,
  setAllProducts,
} from './Redux/products/slice'
import Footer from './components/Footer'
import NavigateHeader from './components/NavigateHeader'
import ProductList from './components/ProductList'
import SearchHeader from './components/SearchHeader'
import useAxios from './hooks/useAxios'

const Main = () => {
  const categories = useAxios({ url: '/products/categories' })
  const dispatch = useDispatch()

  useEffect(() => {
    if (!categories.loading && categories.response) {
      dispatch(setAllCategories(categories.response))
    }
  }, [categories])
  return (
    <Fragment>
      <Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={0}
        flex={1}
      >
        <VStack flex={1} safeArea width="100%">
          <NavigateHeader />
          <ScrollView>
            <SearchHeader />
            <ProductList />
          </ScrollView>
        </VStack>
      </Center>
      <Footer />
    </Fragment>
  )
}

export default Main
