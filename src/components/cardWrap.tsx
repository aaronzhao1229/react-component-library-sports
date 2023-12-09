import { useState, useCallback, useEffect } from "react"
import { useAppDispatch } from "../hooks/hooks"
import { fetchSportsAsync } from "./sportSlice"
import { Card } from "./card"
import LoadingComponent from "./LoadingComponent"
import Dropdown from "./Dropdown"

export default function CardWrap() {
  let initialPramState = ''
  const pram = localStorage.getItem('orderBy')
  if (pram) initialPramState = JSON.parse(pram)

  const [loading, setLoading] = useState(true)
  const [orderBy, setOrderBy] = useState(initialPramState)
  const dispatch = useAppDispatch()

  const initApp = useCallback(async () => {
    try {
        await dispatch(fetchSportsAsync(orderBy))
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
            await dispatch(fetchSportsAsync(orderBy))
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

return (
  <>
      {loading ? <LoadingComponent /> : 
      <div className="flex items-center justify-center flex-col">
        <Dropdown orderBy={orderBy} setOrderBy={setOrderBy}/>
        <Card title="test" description="test description"/>
        <button className='text-white bg-teal font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={refreshSports}>Refresh Sports</button>
      </div>
      }
  </>
       
)

}