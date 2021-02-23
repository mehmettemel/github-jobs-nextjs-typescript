import Link from 'next/link'
import React from 'react'
import { ArrowIcon } from '../common/icon'
import css from './job.module.css'
export interface JobApplyProps {
  html: string
}
export const JobApply: React.FC<JobApplyProps> = ({ html }) => {
  const goBackStyle = {
    display: 'flex',
    alignItems: 'center',
  }
  return (
    <div className={css.apply}>
      <Link href='/'>
        <a style={{ display: 'flex' }}>
          <ArrowIcon />
          <span style={{ marginLeft: '.5rem' }}>Back to search</span>
        </a>
      </Link>
      <h3 className={css['apply-header']}>How To Apply</h3>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}

export default JobApply
