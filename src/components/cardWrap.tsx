import { useState, useCallback, useEffect } from "react"
import { useAppDispatch } from "src/store/configureStore"
import { fetchSportsAsync } from "./cardSlice"
import { Card } from "./card"
import LoadingComponent from "./LoadingComponent"
import Dropdown from "./Dropdown"

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
    
    const refreshSports = async () => {
        setLoading(true)
        try {
            await dispatch(fetchSportsAsync())
            setLoading(false)
            
        } catch (error) {
            console.log(error)
        }
    }


return (
  <>
  {loading ? <LoadingComponent /> : 
  <>
    <Dropdown />
    <Card title="test" description="test description"/>
    <button onClick={refreshSports}>Refresh Sports</button>
  </>
  }
  
  </>
       
)

}