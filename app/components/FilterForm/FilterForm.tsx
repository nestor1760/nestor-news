'use client'

import { useAppDispatch, useAppSelector } from '@/app/hook'
import { setDebouncedValue, setFilterValue } from '@/app/store/filterSlice'
import { Input } from '@/app/UI/Form/Input'
import React, { useEffect, useState } from 'react'

const FilterForm = () => {
  const dispatch = useAppDispatch()
  const { filterValue, debouncedValue } = useAppSelector(state => state.filterValue)

  const [valueInput, setValueInput] = useState(filterValue)

  useEffect(() => {
    const handler = setTimeout(() => {
      if (valueInput !== debouncedValue) {
        dispatch(setDebouncedValue(valueInput));
      }
    }, 200)

    return () => {
      clearTimeout(handler)
    }
  }, [valueInput, dispatch, debouncedValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value
    setValueInput(newInputValue)
    dispatch(setFilterValue(newInputValue))
  }

  return (
    <div className='w-full mb-3 py-4 pl-4'>
      <div className='w-[40%]'>
        <Input
          value={valueInput}
          onChange={handleInputChange}
          className='m-0'
          placeholder='search...'
        />
      </div>
    </div>
  )
}

export default FilterForm