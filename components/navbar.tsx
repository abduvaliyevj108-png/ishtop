"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Briefcase, Bookmark, User, Menu, X, PlusCircle } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-black text-xl text-slate-900 dark:text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
            <Briefcase className="h-5 w-5" />
          </div>
          <span>Ish<span className="text-blue-600">top</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <Link href="/" className="transition hover:text-blue-600">Bosh sahifa</Link>
          <Link href="/jobs" className="transition hover:text-blue-600">Vakansiyalar</Link>
          <Link href="/companies" className="transition hover:text-blue-600">Kompaniyalar</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/bookmarks" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-300">
            <Bookmark className="h-4 w-4" />
          </Link>
          <Link href="/employer/post-job" className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md">
            <PlusCircle className="h-4 w-4" /> E'lon joylash
          </Link>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-300">
            <User className="h-4 w-4" />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-300 md:hidden">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pb-6 pt-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Bosh sahifa</Link>
            <Link href="/jobs" onClick={() => setIsMobileMenuOpen(false)}>Vakansiyalar</Link>
            <Link href="/companies" onClick={() => setIsMobileMenuOpen(false)}>Kompaniyalar</Link>
          </nav>
        </div>
      )}
    </header>
  );
};