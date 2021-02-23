import Link from 'next/link'
import React from 'react'
import { GithubJob } from '../../lib/api'
import { fromToday } from '../../lib/date'
import { ClockIcon, GlobeIcon } from '../common/icon'
import css from './job.module.css'
import { JobImage } from './JobImage'
export interface JobCardProps extends GithubJob {}
export const JobCard: React.FC<JobCardProps> = ({
  id,
  company,
  company_logo,
  title,
  location,
  created_at,
  type,
}) => {
  return (
    <Link href={`/job/${id}`}>
      <div className={css.card}>
        <JobImage src={company_logo} alt={company} size={120} />
        <div className={css.info}>
          <h2>{company}</h2>
          <h3>{title}</h3>
          <div className={css['info-line']}>
            <span className={css['job-type']}>{type}</span>
            <div className={css['icon-line']}>
              <span>
                <GlobeIcon />
                {location}
              </span>
              <span>
                <ClockIcon />
                {fromToday(created_at)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
