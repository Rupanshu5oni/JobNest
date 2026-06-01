import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="mt-4 text-lg text-slate-700">Page not found</p>
      <Link to="/" className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded-md">Back to Jobs</Link>
    </div>
  )
}
