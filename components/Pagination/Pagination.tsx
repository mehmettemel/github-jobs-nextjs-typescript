import { RightIcon } from '../common/icon'
import css from '../Pagination/pagination.module.css'
import { PaginationHasNext } from './HasNext'
import { PaginationHasPrev } from './HasPrev'
export interface PaginationProps {
  current: number
  onChange(page: number): void
  hasNext: boolean
  disabled: boolean
}

const Pagination: React.FC<PaginationProps> = ({
  current,
  onChange,
  hasNext,
  disabled,
}) => {
  const increment = disabled ? () => {} : () => onChange(current + 1)
  const decrement = disabled ? () => {} : () => onChange(current - 1)
  const setPage = disabled
    ? () => () => {}
    : (num: number) => () => onChange(num)
  const active = `${css['pagination-button']} ${css.active}`
  return (
    <div className={css.pagination}>
      <div className='flex'>
        {current > 1 && (
          <PaginationHasPrev
            value={current - 1}
            onSet={setPage(current - 1)}
            onDecrement={decrement}
          />
        )}
        <div className={active}>
          <span>{current}</span>
        </div>
        {hasNext && (
          <PaginationHasNext
            value={current + 1}
            onSet={setPage(current + 1)}
            onIncrement={increment}
          />
        )}
      </div>
    </div>
  )
}

export default Pagination
