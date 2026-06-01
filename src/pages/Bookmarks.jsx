import { useSelector } from 'react-redux'
import jobs from '../data/jobs.json'
import JobCard from '../components/JobCard.jsx'

export default function Bookmarks() {
  const ids = useSelector((s) => s.bookmarks.ids)
  const bookmarked = jobs.filter((j) => ids.includes(j.id))

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bookmarked Jobs</h1>
      {bookmarked.length === 0 ? (
        <div className="bg-white p-8 rounded border text-center text-slate-500">
          You haven't bookmarked any jobs yet.
        </div>
      ) : (
        <div className="space-y-4">
          {bookmarked.map((j) => <JobCard key={j.id} job={j} />)}
        </div>
      )}
    </div>
  )
}
