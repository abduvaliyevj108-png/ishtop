import React from "react";
import Link from "next/link";
import { MapPin, Briefcase, Clock, Building2, Bookmark } from "lucide-react";

export interface JobProps {
  id?: string | number;
  title?: string;
  company?: string;
  location?: string;
  type?: string;
  salary?: string;
  postedAt?: string;
  tags?: string[];
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string) => void;
  job?: {
    id?: string | number;
    title?: string;
    company?: string;
    location?: string;
    type?: string;
    salary?: string;
    postedAt?: string;
    tags?: string[];
  };
}

export const JobCard: React.FC<JobProps> = (props) => {
  const data = props.job ? props.job : props;
  const {
    id = "1",
    title = "Noma'lum vakansiya",
    company = "Kompaniya ko'rsatilmagan",
    location = "O'zbekiston",
    type = "To'liq bandlik",
    salary = "Kelishilgan holda",
    postedAt = "Yaqinda",
    tags = [],
  } = data;

  const { isBookmarked = false, onToggleBookmark } = props;

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleBookmark) {
      onToggleBookmark(String(id));
    }
  };

  return (
    <Link 
      href={`/jobs/${id}`}
      className="group relative block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
            <Building2 className="h-6 w-6 text-slate-600 dark:text-slate-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 dark:text-white">
              {title}
            </h3>
            <p className="text-sm font-medium text-slate-500">{company}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleBookmarkClick}
          aria-label="Saqlash"
          className={`rounded-full p-2 transition ${
            isBookmarked
              ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
              : "text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
          }`}
        >
          <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-y-2 text-xs text-slate-500">
        <div className="mr-4 flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5 text-slate-400" />
          <span>{location}</span>
        </div>
        <div className="mr-4 flex items-center gap-1">
          <Briefcase className="h-3.5 w-3.5 text-slate-400" />
          <span>{type}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5 text-slate-400" />
          <span>{postedAt}</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
          {salary}
        </span>
      </div>
    </Link>
  );
};