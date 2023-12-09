import { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
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
  <div className="m-4">
    <label htmlFor="order" className="m-2">Select an option:</label>
    <select value={selected} onChange={handleChange} id="order" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-0 focus:border-teal block w-full p-2.5">
      {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
  
    </select>
  </div>)
}