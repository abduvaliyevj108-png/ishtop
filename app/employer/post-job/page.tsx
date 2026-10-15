// app/employer/post-job/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/data/mock-jobs";
import { ArrowLeft, Building2, Plus, Trash2, CheckCircle2, Send } from "lucide-react";

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    category: "1",
    location: "Toshkent shahri",
    type: "Full-time",
    salaryMin: "",
    salaryMax: "",
    description: "",
  });

  const [requirements, setRequirements] = useState<string[]>([""]);
  const [responsibilities, setResponsibilities] = useState<string[]>([""]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic inputlarni boshqarish (Talablar)
  const handleRequirementChange = (index: number, value: string) => {
    const updated = [...requirements];
    updated[index] = value;
    setRequirements(updated);
  };

  const addRequirement = () => setRequirements([...requirements, ""]);
  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  // Dynamic inputlarni boshqarish (Majburiyatlar)
  const handleResponsibilityChange = (index: number, value: string) => {
    const updated = [...responsibilities];
    updated[index] = value;
    setResponsibilities(updated);
  };

  const addResponsibility = () => setResponsibilities([...responsibilities, ""]);
  const removeResponsibility = (index: number) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      // Formani tozalash
      setFormData({
        title: "",
        company: "",
        category: "1",
        location: "Toshkent shahri",
        type: "Full-time",
        salaryMin: "",
        salaryMax: "",
        description: "",
      });
      setRequirements([""]);
      setResponsibilities([""]);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="container mx-auto max-w-3xl px-4">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Bosh sahifaga qaytish
        </Link>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 md:p-10">
          
          <div className="mb-8 border-b border-slate-100 pb-6 dark:border-slate-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400 mb-3">
              <Building2 className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-extrabold md:text-3xl">Yangi vakansiya joylash</h1>
            <p className="mt-1 text-sm text-slate-500">
              Kompaniyangiz uchun eng munosib nomzodlarni topish uchun e'lon ma'lumotlarini kiriting.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500 animate-bounce" />
              <h3 className="mt-4 text-2xl font-bold">Vakansiya e'lon qilindi!</h3>
              <p className="mt-2 text-sm text-slate-500">
                E'loningiz moderatsiyadan so'ng platformada faollashtiriladi.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Vakansiya nomi & Kompaniya */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    Vakansiya nomi *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Masalan: Senior React Developer"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    Kompaniya nomi *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Masalan: UzTech Solutions"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                  />
                </div>
              </div>

              {/* Kategoriya & Hudud */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    Kategoriya *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-medium focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    Hudud *
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-medium focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                  >
                    <option value="Toshkent shahri">Toshkent shahri</option>
                    <option value="Samarqand">Samarqand</option>
                    <option value="Farg'ona">Farg'ona</option>
                    <option value="Andijon">Andijon</option>
                    <option value="Namangan">Namangan</option>
                    <option value="Masofaviy (Remote)">Masofaviy (Remote)</option>
                  </select>
                </div>
              </div>

              {/* Ish turi & Maosh */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    Bandlik turi *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-medium focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                  >
                    <option value="Full-time">To'liq bandlik (Full-time)</option>
                    <option value="Part-time">Yarim stavka (Part-time)</option>
                    <option value="Remote">Masofaviy (Remote)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    Min Maosh ($)
                  </label>
                  <input
                    type="number"
                    value={formData.salaryMin}
                    onChange={(e) => setFormData({ ...formData, salaryMin: e.target.value })}
                    placeholder="1000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    Max Maosh ($)
                  </label>
                  <input
                    type="number"
                    value={formData.salaryMax}
                    onChange={(e) => setFormData({ ...formData, salaryMax: e.target.value })}
                    placeholder="2000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                  />
                </div>
              </div>

              {/* Vakansiya haqida batafsil */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                  Vakansiya haqida batafsil *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Loyiha va ish sharoitlari haqida ma'lumot bering..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                ></textarea>
              </div>

              {/* Talablar (Dynamic) */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                  Nomzodga qo'yiladigan talablar
                </label>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={req}
                        onChange={(e) => handleRequirementChange(index, e.target.value)}
                        placeholder={`Talab ${index + 1}`}
                        className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                      />
                      {requirements.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRequirement(index)}
                          className="rounded-xl p-3 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addRequirement}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline pt-1"
                  >
                    <Plus className="h-4 w-4" /> Yangi talab qo'shish
                  </button>
                </div>
              </div>

              {/* Majburiyatlar (Dynamic) */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                  Ish majburiyatlari
                </label>
                <div className="space-y-3">
                  {responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={resp}
                        onChange={(e) => handleResponsibilityChange(index, e.target.value)}
                        placeholder={`Majburiyat ${index + 1}`}
                        className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                      />
                      {responsibilities.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeResponsibility(index)}
                          className="rounded-xl p-3 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addResponsibility}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline pt-1"
                  >
                    <Plus className="h-4 w-4" /> Yangi majburiyat qo'shish
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-700 active:scale-95"
              >
                <Send className="h-4 w-4" /> E'lonni chop etish
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}