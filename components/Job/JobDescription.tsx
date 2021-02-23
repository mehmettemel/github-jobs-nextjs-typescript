import { GithubJob } from '../../lib/api'
import { fromToday } from '../../lib/date'
import css from './job.module.css'
import JobApply from './JobApply'
import { JobHeader } from './JobHeader'
export interface JobDescriptionProps extends GithubJob {}
export const JobDescription: React.FC<JobDescriptionProps> = ({
  title,
  description,
  location,
  type,
  company,
  company_logo,
  how_to_apply,
  created_at,
}) => {
  return (
    <div className={css['job-description']}>
      <JobApply html={how_to_apply} />
      <div>
        <JobHeader
          title={title}
          location={location}
          type={type}
          company={company}
          logo={company_logo}
          daysAgo={fromToday(created_at)}
        />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}
