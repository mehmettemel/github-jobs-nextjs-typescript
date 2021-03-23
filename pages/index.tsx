import { useEffect, useState } from 'react'
import { JobCard } from '../components/Job/JobCard'
import { Layout } from '../components/Layout/layout'
import SearchBox from '../components/SearchBox/SearchBox'
import SearchLocation from '../components/SearchLocation/SearchLocation'
import SearchType from '../components/SearchType/SearchType'
import { API_URL, GithubJob } from '../lib/api'
import Loader from 'react-loader-spinner'
import Pagination from '@/components/Pagination/Pagination'
interface HomeProps {
  jobs: GithubJob[]
}
export default function Home(props: HomeProps) {
  const [jobs, setJobs] = useState<GithubJob[]>(props.jobs)
  const [type, setType] = useState(false)
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(false)
  const [request, setRequest] = useState(false)
  const [page, setPage] = useState(0)

  const handleSearch = async (term?: string) => {
    setRequest(true)
    await fetch('/api', {
      method: 'post',
      body: JSON.stringify({
        term,
        type,
        location,
        page,
      }),
    })
      .then((res) => res.json())
      .then(setJobs)
      .then(() => setRequest(false))
      .catch(console.log)
  }

  const handlePageChange = (count: number) => {
    setPage(count - 1)
    handleSearch()
  }

  return (
    <Layout title='Home'>
      <SearchBox onSearch={handleSearch} />
      <div className='responsive'>
        <div className='search-widgets'>
          <SearchType checked={type} onChange={setType} />
          <SearchLocation location={location} onChange={setLocation} />
        </div>
        <div className='full-width'>
          {request ? (
            <div
              style={{
                display: 'grid',
                placeItems: 'center',
                marginTop: '1rem',
              }}
            >
              <Loader
                type='Puff'
                color='#00BFFF'
                height={100}
                width={100}
                timeout={6000} //3 secs
              />
            </div>
          ) : (
            <div>
              {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
              <Pagination
                current={page + 1}
                onChange={handlePageChange}
                hasNext={jobs.length === 50}
                disabled={loading}
              />
              {!jobs.length && <h1>No result is Found</h1>}
            </div>
          )}
        </div>
      </div>
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
