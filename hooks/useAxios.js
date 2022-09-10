import axios from 'axios'
import React, { useEffect, useState } from 'react'

const END_POINT = `https://fakestoreapi.com`
axios.defaults.baseURL = END_POINT

const useAxios = ({ url, method = 'get', body = null, headers = null }) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true)
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [method, url, body, headers])

  return { response, error, loading }
}

export default useAxios
