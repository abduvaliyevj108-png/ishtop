// app/companies/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { MOCK_COMPANIES } from "@/data/mock-jobs";
import { Search, Building2, MapPin, ExternalLink, Briefcase } from "lucide-react";

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = useMemo(() => {
    return MOCK_COMPANIES.filter(
      (company) =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="container mx-auto px-4">
        
        {/* Заголовок */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Компании-работодатели
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Найдите лучших работодателей и узнайте об их открытых вакансиях.
          </p>
        </div>

        {/* Поиск */}
        <div className="mb-8 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию компании, отрасли или городу..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Сетка компаний */}
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-blue-50 dark:bg-slate-800">
                      <Building2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="mt-4 text-lg font-bold group-hover:text-blue-600">
                    {company.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {company.industry}
                  </p>

                  <p className="mt-3 line-clamp-2 text-xs text-slate-500 leading-relaxed">
                    {company.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    <span>{company.location}</span>
                  </div>

                  <Link
                    href={`/jobs?search=${encodeURIComponent(company.name)}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                  >
                    <Briefcase className="h-3.5 w-3.5" />
                    <span>{company.activeJobsCount} вакансий</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-800">
            <Building2 className="mx-auto h-12 w-12 text-slate-400" />
            <h3 className="mt-4 text-lg font-bold">Компании не найдены</h3>
            <p className="mt-1 text-sm text-slate-500">
              По вашему запросу ничего не найдено.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}