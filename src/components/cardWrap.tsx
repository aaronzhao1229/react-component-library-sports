import { useState, useCallback, useEffect } from "react"
import { useAppDispatch } from "src/store/configureStore"
import { fetchSportsAsync } from "./cardSlice"
import { Card } from "./card"

export default function CardWrap() {
  const [loading, setLoading] = useState(true)
  const dispatch = useAppDispatch()

  const initApp = useCallback(async () => {
    try {
        await dispatch(fetchSportsAsync())
    } catch (error) {
        console.log(error)
    }
    }, [dispatch])
    
    useEffect(() => {
      initApp().then(() => setLoading(false))
    }, [initApp])

return (
  
       <Card title="test" description="test description"/>
)

}