import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const translateStatusCode = (statusCode) => {
  switch (statusCode) {
    case 200:
      return 'healthy'
    default:
      return 'unhealthy'
  }
}

const useApiStatus = (initialStatus = '...loading') => {
  const [apiStatus, setApiStatus] = useState(initialStatus)
  const getApiStatus = async () => {
    const { data: { status: statusCode } = {} } = await axios.get('/api/status')
    setApiStatus(translateStatusCode(statusCode))
  }
  return [apiStatus, getApiStatus]
}

export default () => {
  const [apiStatus, getApiStatus] = useApiStatus()
  useEffect(() => {
    getApiStatus()
  }, [])
  return (
    <>
      <span>Hello World!</span>
      <br />
      <span>api status is now: {apiStatus}</span>
    </>
  )
}
