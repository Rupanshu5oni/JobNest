import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  setCompanyFilter,
  setLocationFilter,
  setSortBy,
} from "../redux/jobsSlice";
import jobs from "../data/jobs.json";

export default function Filters() {
  const dispatch = useDispatch();

  const {
    search,
    companyFilter,
    locationFilter,
    sortBy,
  } = useSelector((state) => state.jobs);

  const companies = [
    "All",
    ...new Set(jobs.map((job) => job.company)),
  ];

  const locations = [
    "All",
    ...new Set(jobs.map((job) => job.location)),
  ];

  return (
    <div className="mb-8 w-full">
      
      {/* Search */}
      <div className="relative mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
        >
          <path d="m21 21-4.34-4.34"></path>
          <circle cx="11" cy="11" r="8"></circle>
        </svg>

        <input
          type="text"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="Search jobs..."
          className="
            w-full
            h-12
            pl-12
            pr-4
            rounded-full
            border
            border-slate-200
            bg-white
            text-sm
            outline-none
            shadow-sm
            focus:border-blue-400
            focus:ring-2
            focus:ring-blue-100
          "
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Company */}
        <div>
          <label className="block text-sm text-slate-500 mb-2">
            Company
          </label>

          <select
            value={companyFilter}
            onChange={(e) =>
              dispatch(setCompanyFilter(e.target.value))
            }
            className="
              w-full
              h-12
              rounded-full
              border
              border-slate-200
              bg-white
              px-4
              text-sm
              shadow-sm
              outline-none
              focus:border-blue-400
            "
          >
            {companies.map((company) => (
              <option key={company} value={company}>
                {company === "All"
                  ? "All Companies"
                  : company}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm text-slate-500 mb-2">
            Location
          </label>

          <select
            value={locationFilter}
            onChange={(e) =>
              dispatch(setLocationFilter(e.target.value))
            }
            className="
              w-full
              h-12
              rounded-full
              border
              border-slate-200
              bg-white
              px-4
              text-sm
              shadow-sm
              outline-none
              focus:border-blue-400
            "
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location === "All"
                  ? "All Locations"
                  : location}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-sm text-slate-500 mb-2">
            Sort By
          </label>

          <select
            value={sortBy}
            onChange={(e) =>
              dispatch(setSortBy(e.target.value))
            }
            className="
              w-full
              h-12
              rounded-full
              border
              border-slate-200
              bg-white
              px-4
              text-sm
              shadow-sm
              outline-none
              focus:border-blue-400
            "
          >
            <option value="newest">
              Newest Posted
            </option>

            <option value="salary-high">
              Highest Salary
            </option>

            <option value="salary-low">
              Lowest Salary
            </option>
          </select>
        </div>

      </div>
    </div>
  );
}