import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const Filter = () => {
 return (
    <Select >
      <SelectTrigger className="w-[200px] font-bold outline-none">
        <SelectValue placeholder="Filter by Region" className='font-bold' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className='cursor-pointer'>All</SelectLabel>
          <SelectItem className='cursor-pointer' value="apple">Africa</SelectItem>
          <SelectItem className='cursor-pointer' value="banana">Americas</SelectItem>
          <SelectItem className='cursor-pointer' value="blueberry">Asia</SelectItem>
          <SelectItem className='cursor-pointer' value="grapes">Europe</SelectItem>
          <SelectItem className='cursor-pointer' value="pineapple">Oceania</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Filter