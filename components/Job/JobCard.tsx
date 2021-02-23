import React from 'react'
import { GithubJob } from '../../lib/api'
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
    <div>
      <div>
        <h2>{company}</h2>
        <h3>{title}</h3>
        <span>{type}</span>
        <div>
          <span>{location}</span>
          <span>{created_at}</span>
        </div>
      </div>
    </div>
  )
}
