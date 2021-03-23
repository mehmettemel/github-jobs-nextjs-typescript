import { useState } from 'react'
import { WorkIcon } from '../common/icon'
import css from './searchbox.module.css'
export interface SearchBoxProps {
  onSearch(term: string): void
}
const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [value, setValue] = useState('')

  return (
    <form
      className={css['search-box']}
      onSubmit={(e) => {
        e.preventDefault()
        onSearch(value)
      }}
    >
      <div className={css['search-box-input']}>
        <WorkIcon />
        <input
          type='text'
          placeholder='Title, companies, expertise or benefits'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'>search</button>
      </div>
    </form>
  )
}

export default SearchBox
