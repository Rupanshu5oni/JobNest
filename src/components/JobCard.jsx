import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark } from "../redux/bookmarksSlice";
import {
  Building2,
  MapPin,
  DollarSign,
  CalendarDays,
} from "lucide-react";

export default function JobCard({ job }) {
  const dispatch = useDispatch();

  const bookmarked = useSelector((state) =>
    state.bookmarks.ids.includes(job.id)
  );

  return (
    <div className="relative bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-md transition-all duration-300">

      {/* Bookmark Button */}
      <button
        onClick={() => dispatch(toggleBookmark(job.id))}
        className={`absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition ${
          bookmarked
            ? "bg-blue-50 border-blue-200 text-blue-600"
            : "bg-white border-slate-200 text-slate-400 hover:bg-slate-50"
        }`}
      >
        <svg
          width="18"
          height="18"
          fill={bookmarked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
      </button>

      {/* Title */}
      <h3 className="pr-14 text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-tight">
        {job.title}
      </h3>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-x-5 gap-y-3 text-slate-500 text-sm sm:text-[15px] mb-5">
        <div className="flex items-center gap-2">
          <Building2 size={18} strokeWidth={1.8} />
          <span>{job.company}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} strokeWidth={1.8} />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <DollarSign size={18} strokeWidth={1.8} />
          <span>${job.salary.toLocaleString()}</span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={18} strokeWidth={1.8} />
          <span>{job.datePosted}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        {job.description}
      </p>

      {/* Skills */}
      {job.skills?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs sm:text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}