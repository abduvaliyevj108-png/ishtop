// app/jobs/[id]/page.tsx
"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_JOBS } from "@/data/mock-jobs";
import { ApplyModal } from "@/components/apply-modal";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  Building2,
  CheckCircle2,
  Send,
  DollarSign,
} from "lucide-react";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function JobDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const job = MOCK_JOBS.find((item) => String(item.id) === String(id));

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 dark:bg-slate-950 dark:text-white">
      <div className="container mx-auto max-w-4xl px-4">
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Barcha vakansiyalarga qaytish
        </Link>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
          
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                <Building2 className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-xl font-bold md:text-2xl">{job.title}</h1>
                <p className="text-base font-semibold text-blue-600">{job.company}</p>
              </div>
            </div>

            {/* Modalni ochish tugmasi */}
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 active:scale-95 transition"
            >
              <Send className="h-4 w-4" /> Ariza topshirish
            </button>
          </div>

          {/* Qisqacha ko'rsatkichlar */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/50 sm:grid-cols-4">
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-blue-600 shrink-0" />
              <div>
                <span className="block text-xs text-slate-400">Maosh</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white sm:text-sm">{job.salary}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
              <div>
                <span className="block text-xs text-slate-400">Hudud</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white sm:text-sm">{job.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-blue-600 shrink-0" />
              <div>
                <span className="block text-xs text-slate-400">Ish turi</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white sm:text-sm">{job.type}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-blue-600 shrink-0" />
              <div>
                <span className="block text-xs text-slate-400">Joylashtirildi</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white sm:text-sm">{job.postedAt}</span>
              </div>
            </div>
          </div>

          {/* Teglar */}
          <div className="mt-6 flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Batafsil kontent */}
          <div className="mt-8 space-y-6 text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Vakansiya haqida</h2>
              <p className="mt-2 text-sm leading-relaxed">{job.description}</p>
            </div>

            {job.requirements && job.requirements.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Nomzodga qo'yiladigan talablar</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Modal oyna */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        jobTitle={job.title}
        companyName={job.company}
      />
    </div>
  );
}