"use client";

import React, { useState, useMemo } from "react";
import { MOCK_JOBS, CATEGORIES } from "@/data/mock-jobs";
import { JobCard } from "@/components/job-card";
import { Search, MapPin, X, Code, BarChart3, Palette, TrendingUp, Headphones } from "lucide-react";

const ICON_MAP: Record<string, any> = { Code, BarChart3, Palette, TrendingUp, Headphones };
const POPULAR_TAGS = ["Next.js", "Python", "Figma", "SMM", "TypeScript"];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLocation =
        selectedLocation === "all" || job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;

      return matchesSearch && matchesLocation && matchesCategory;
    });
  }, [searchQuery, selectedLocation, selectedCategory]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 py-16 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Orzuingizdagi <span className="text-blue-600">Ishni</span> Shu Yerdan Toping
          </h1>
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl border border-slate-200/80 dark:bg-slate-900 dark:border-slate-800 md:flex-row md:items-center">
              <div className="flex flex-1 items-center gap-3 px-4 py-2">
                <Search className="h-5 w-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Kasb nomi, kalit so'z yoki kompaniya..."
                  className="w-full bg-transparent text-sm focus:outline-none dark:text-white"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="text-slate-400">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <button className="rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-bold text-white">Izlash</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isBookmarked={bookmarkedIds.includes(job.id)}
                onToggleBookmark={() => toggleBookmark(job.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}