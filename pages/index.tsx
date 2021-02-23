import { useEffect } from 'react'
import { JobCard } from '../components/Job/JobCard'
import { Layout } from '../components/Layout/layout'
import { API_URL, GithubJob } from '../lib/api'
interface HomeProps {
  jobs: GithubJob[]
}
export default function Home(props: HomeProps) {
  const handleSearch = () => {
    fetch('/api', {
      method: 'post',
      body: JSON.stringify({
        fullTime: true,
        location: 'New York',
        page: 1,
        term: 'react',
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      .catch(console.log)
  }
  useEffect(() => {
    handleSearch()
  }, [])
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
