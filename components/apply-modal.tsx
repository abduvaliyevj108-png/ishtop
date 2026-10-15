// components/apply-modal.tsx
"use client";

import React, { useState } from "react";
import { X, Upload, Send, CheckCircle2 } from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  companyName: string;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  jobTitle,
  companyName,
}) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Rezyume va ma'lumotlarni yuborish simulyatsiyasi
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      // Formani tozalash
      setFullName("");
      setPhone("");
      setTelegram("");
      setResume(null);
      setCoverLetter("");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 dark:text-white md:p-8">
        
        {/* Yopish tugmasi */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500 animate-bounce" />
            <h3 className="mt-4 text-2xl font-bold">Ariza yuborildi!</h3>
            <p className="mt-2 text-sm text-slate-500">
              Arizangiz <b>{companyName}</b> HR jamoasiga muvaffaqiyatli yetkazildi. Tez orada siz bilan bog'lanishadi.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Ariza topshirish
              </span>
              <h2 className="text-xl font-bold md:text-2xl">{jobTitle}</h2>
              <p className="text-sm text-slate-500">{companyName}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Ism va Familiya *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ali Valiyev"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Telefon raqam *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+998 90 123 45 67"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Telegram username
                  </label>
                  <input
                    type="text"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    placeholder="@username"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Rezyume (PDF yoki DOCX) *
                </label>
                <div className="relative flex items-center justify-center rounded-xl border-2 border-dashed border-slate-200 p-4 hover:border-blue-500 dark:border-slate-800">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setResume(e.target.files?.[0] || null)}
                    className="absolute inset-0 cursor-pointer opacity-0"
                  />
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Upload className="h-4 w-4 text-blue-600" />
                    <span>{resume ? resume.name : "Fayl tanlang yoki bering"}</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Qo'shimcha xat (Cover Letter)
                </label>
                <textarea
                  rows={3}
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  placeholder="O'zingiz va tajribangiz haqida qisqacha..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 active:scale-95"
              >
                <Send className="h-4 w-4" /> Arizani yuborish
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};