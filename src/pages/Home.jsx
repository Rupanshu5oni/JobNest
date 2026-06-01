import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import jobs from '../data/jobs.json'
import JobCard from '../components/JobCard.jsx'
import Filters from '../components/Filters.jsx'
import Pagination from '../components/Pagination.jsx'

export default function Home() {
  const { search, companyFilter, locationFilter, sortBy, page, perPage } = useSelector((s) => s.jobs)

  // Filter + search + sort pipeline
  const filtered = useMemo(() => {
    let list = [...jobs]
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter((j) =>
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.description.toLowerCase().includes(q)
      )
    }
    if (companyFilter !== 'All') list = list.filter((j) => j.company === companyFilter)
    if (locationFilter !== 'All') list = list.filter((j) => j.location === locationFilter)
    if (sortBy === 'newest') list.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted))
    if (sortBy === 'salary-high') list.sort((a, b) => b.salary - a.salary)
    if (sortBy === 'salary-low') list.sort((a, b) => a.salary - b.salary)
    return list
  }, [search, companyFilter, locationFilter, sortBy])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const currentPage = Math.min(page, totalPages)
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Open Positions</h1>
      <Filters />
      <p className="text-sm text-slate-600 mb-3">{filtered.length} job(s) found</p>
      <div className="space-y-4">
        {paginated.length === 0 ? (
          <div className="bg-white p-8 rounded border text-center text-slate-500">No jobs match your filters.</div>
        ) : (
          paginated.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  )
}
