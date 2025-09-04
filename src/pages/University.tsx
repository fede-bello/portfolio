import { SectionHeader } from "@/components/SectionHeader";

export function UniversityPage() {
  return (
    <div>
      <SectionHeader
        title="University"
        subtitle="[Your academic background and achievements]"
      />
      <div className="container max-w-5xl pb-16 space-y-4">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
          <h3 className="text-lg font-semibold">
            Telecommunication Systems Engineering · UdelaR
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            Mar 2019 - Jun 2025 · Montevideo, Uruguay
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700 dark:text-slate-200">
            <li>Specialization in Signal Processing and Machine Learning.</li>
            <li>
              Thesis: Time Series Anomaly Detection with Graph Neural Networks.
              [Link Placeholder]
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
