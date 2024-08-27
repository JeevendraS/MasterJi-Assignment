import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ReactApiQuery(urlPath, dependency=[]) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    (async () => {
        try {
            setLoading(true)
            setError(false)
            const response = await axios.get(urlPath)
            setData(response.data.data)
        } catch (error) {
            setError(true)
        }finally{
          setLoading(false)
        }
    })()
  },[...dependency])

  return {
    data,
    loading,
    error
  }
}

export default ReactApiQuery