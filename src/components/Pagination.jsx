import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../redux/jobsSlice.js'

export default function Pagination({ totalPages }) {
  const dispatch = useDispatch()
  const page = useSelector((s) => s.jobs.page)
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  return (
    <div className="flex justify-center gap-2 mt-6">
      <button disabled={page === 1} onClick={() => dispatch(setPage(page - 1))} className="px-3 py-1.5 rounded border bg-white disabled:opacity-50">Prev</button>
      {pages.map((p) => (
        <button key={p} onClick={() => dispatch(setPage(p))} className={`px-3 py-1.5 rounded border ${p === page ? 'bg-blue-600 text-white border-blue-600' : 'bg-white'}`}>{p}</button>
      ))}
      <button disabled={page === totalPages} onClick={() => dispatch(setPage(page + 1))} className="px-3 py-1.5 rounded border bg-white disabled:opacity-50">Next</button>
    </div>
  )
}
