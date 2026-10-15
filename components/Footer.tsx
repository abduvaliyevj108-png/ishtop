// components/footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, Send, Phone, Mail, MapPin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-950 text-slate-600 dark:text-slate-400">
      
      {/* Top Section: CTA / Banner */}
      <div className="border-b border-slate-100 dark:border-slate-800/80 py-12 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black tracking-tight">Kompaniyangiz uchun mutaxassis qidiryapsizmi?</h3>
            <p className="mt-1 text-sm text-blue-100">
              Bir necha daqiqada e'lon joylang va eng kuchli nomzodlar bilan bog'laning.
            </p>
          </div>
          <Link
            href="/employer/post-job"
            className="shrink-0 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-blue-600 shadow-lg hover:bg-blue-50 transition active:scale-95"
          >
            + Bepul e'lon berish
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand info */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2 font-black text-xl text-slate-900 dark:text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
              <Briefcase className="h-5 w-5" />
            </div>
            <span>
              Ish<span className="text-blue-600">top</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            O'zbekistondagi eng zamonaviy va qulay ish qidiruv platformasi. Dasturlash, dizayn, moliya va boshqa sohalardagi eng so'nggi vakansiyalar.
          </p>
          <div className="flex items-center gap-3 text-sm pt-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900">
              <MapPin className="h-4 w-4 text-blue-600" />
            </div>
            <span>Toshkent shahri, O'zbekiston</span>
          </div>
        </div>

        {/* Column 1: Nomzodlarga */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-4">
            Ishtirokchilarga
          </h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <Link href="/jobs" className="hover:text-blue-600 transition">Barcha vakansiyalar</Link>
            </li>
            <li>
              <Link href="/companies" className="hover:text-blue-600 transition">Kompaniyalar</Link>
            </li>
            <li>
              <Link href="/bookmarks" className="hover:text-blue-600 transition">Saqlanganlar</Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Ish beruvchilarga */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-4">
            Ish beruvchilarga
          </h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <Link href="/employer/post-job" className="hover:text-blue-600 transition">E'lon joylash</Link>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-600 transition">Tariflar</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-blue-600 transition">Ko'p beriladigan savollar</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Kontaktlar */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-4">
            Bog'lanish
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-600 shrink-0" />
              <span>+998 (90) 123-45-67</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600 shrink-0" />
              <span>info@ishtop.uz</span>
            </li>
            <li className="flex items-center gap-2 pt-1">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 dark:bg-slate-900 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition"
              >
                <Send className="h-3.5 w-3.5" /> Telegram Kanal
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-100 dark:border-slate-900 py-6 text-center text-xs text-slate-400">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} IshTop Inc. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center gap-1">
            Yaratildi <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" /> Next.js & Tailwind CSS
          </p>
        </div>
      </div>

    </footer>
  );
};