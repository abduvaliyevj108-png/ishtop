// app/bookmarks/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MOCK_JOBS, Job } from "@/data/mock-jobs";
import { JobCard } from "@/components/job-card";
import { Bookmark, ArrowLeft, Trash2 } from "lucide-react";

export default function BookmarksPage() {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // LocalStorage dan saqlangan ID larni yuklab olish
  useEffect(() => {
    const saved = localStorage.getItem("bookmarked_jobs");
    if (saved) {
      try {
        setBookmarkedIds(JSON.parse(saved));
      } catch (e) {
        console.error("Bookmarks parsing error:", e);
      }
    } else {
      // Boshlanishida namuna sifatida 1- va 3-vakansiyani ko'rsatish
      setBookmarkedIds(["1", "3"]);
    }
    setIsLoaded(true);
  }, []);

  // Bookmark o'zgarganda LocalStorage ga saqlash
  const toggleBookmark = (id: string) => {
    const updated = bookmarkedIds.includes(id)
      ? bookmarkedIds.filter((item) => item !== id)
      : [...bookmarkedIds, id];

    setBookmarkedIds(updated);
    localStorage.setItem("bookmarked_jobs", JSON.stringify(updated));
  };

  const clearAllBookmarks = () => {
    setBookmarkedIds([]);
    localStorage.removeItem("bookmarked_jobs");
  };

  // Saqlangan vakansiyalar ro'yxatini shakllantirish
  const bookmarkedJobs = MOCK_JOBS.filter((job) =>
    bookmarkedIds.includes(job.id)
  );

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <p className="text-sm font-medium text-slate-500">Yuklanmoqda...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* Yuqori qism */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline mb-2"
            >
              <ArrowLeft className="h-4 w-4" /> Barcha vakansiyalarga qaytish
            </Link>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl flex items-center gap-3">
              <Bookmark className="h-8 w-8 text-blue-600 fill-blue-600" />
              Saqlangan Vakansiyalar
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Siz belgilab qo'ygan vakansiyalar ro'yxati ({bookmarkedJobs.length} ta)
            </p>
          </div>

          {bookmarkedJobs.length > 0 && (
            <button
              onClick={clearAllBookmarks}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-xs font-bold text-rose-600 hover:bg-rose-100 dark:border-rose-900/50 dark:bg-rose-950/30 dark:hover:bg-rose-900/50 transition"
            >
              <Trash2 className="h-4 w-4" /> Barchasini tozalash
            </button>
          )}
        </div>

        {/* Vakansiyalar ro'yxati */}
        {bookmarkedJobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {bookmarkedJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isBookmarked={true}
                onToggleBookmark={() => toggleBookmark(job.id)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
              <Bookmark className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-lg font-bold">Saqlangan vakansiyalar yo'q</h3>
            <p className="mt-1 text-sm text-slate-500 max-w-sm mx-auto">
              Siz hali hech qanday vakansiyani saqlab qo'ymadingiz. Vakansiya kartochkasidagi xatcho'p belgisini bosib saqlashingiz mumkin.
            </p>
            <Link
              href="/jobs"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition"
            >
              Vakansiyalarni ko'rish
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}