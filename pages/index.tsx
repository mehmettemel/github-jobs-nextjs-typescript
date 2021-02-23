import { useEffect } from 'react'
import { JobCard } from '../components/Job/JobCard'
import { Layout } from '../components/Layout/layout'
import { API_URL, GithubJob } from '../lib/api'
interface HomeProps {
  jobs: GithubJob[]
}
export default function Home(props: HomeProps) {
  return (
    <Layout title='Home'>
      {props.jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </Layout>
  )
}

export const getServerSideProps = async () => {
  try {
    const data = await fetch(`${API_URL}.json`)
    const json = await data.json()
    return {
      props: {
        jobs: json,
      },
    }
  } catch (err) {
    return {
      props: {
        jobs: [],
      },
    }
  }
}
