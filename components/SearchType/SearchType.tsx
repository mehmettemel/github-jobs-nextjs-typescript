import React from 'react'
import css from './search-type.module.css'
export interface SearchTypeProps {
  checked: boolean
  onChange(checked: boolean): void
}
const SearchType: React.FC<SearchTypeProps> = ({ checked, onChange }) => {
  const toggle = () => onChange(!checked)
  return (
    <>
      <input
        className={css.checkbox}
        id='ft'
        type='checkbox'
        checked={checked}
        onChange={toggle}
      />
      <label htmlFor='ft'>Full Time</label>
    </>
  )
}

export default SearchType
