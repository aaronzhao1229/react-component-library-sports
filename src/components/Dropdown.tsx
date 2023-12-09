import { useState } from "react";
import { useAppDispatch } from "src/store/configureStore";
import { setOrderByPram } from "./sportSlice";

const options = [
  {value: '', text: 'Order by'},
  {value: 'az', text: 'A - Z of name'},
  {value: 'za', text: 'Z - A of name'},
]

interface Props {
  orderBy: string
  setOrderBy: (state: string) => void
}

export default function Dropdown({orderBy, setOrderBy}: Props) {
  
  const [selected, setSelected] = useState(orderBy);
  const dispatch = useAppDispatch()

  function handleChange(event:any) {
      setSelected(event.target.value)
      localStorage.setItem('orderBy', JSON.stringify(event.target.value))
      setOrderBy(event.target.value)
      dispatch(setOrderByPram(event.target.value))
  }
  
  return (
  <>
    <select value={selected} onChange={handleChange} id="order" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
  
    </select>
  </>)
}