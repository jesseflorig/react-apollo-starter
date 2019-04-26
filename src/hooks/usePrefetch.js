import { useState, useEffect } from "react"
import client from "@/graphql/client"

const usePrefetchQuery = ({ query, variables }) => prefetch => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const load = async () => {
    const { data } = await client.query({ query, variables })
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    prefetch && load()
  }, [prefetch])

  return { data, loading }
}

export default usePrefetchQuery
