import { useState } from "react";
import { Icon } from "@/components/Icon";
import type { ProjectAttachment } from "@/types/projects";

type Props = {
  attachments?: ReadonlyArray<ProjectAttachment>;
  onView: (att: ProjectAttachment) => void;
};

function humanizeFilename(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\.pdf$/i, "")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export function PdfList({ attachments, onView }: Props): JSX.Element | null {
  const files =
    attachments?.filter((a) => a.href.toLowerCase().endsWith(".pdf")) ?? [];
  if (files.length === 0) return null;

  if (files.length === 1) {
    const file = files[0];
    return (
      <div className="mt-3 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
          <Icon
            name="file-text"
            className="size-4 text-slate-500 dark:text-slate-400"
          />
          <span>
            {file.title ||
              humanizeFilename(file.href.split("/").pop() || "PDF")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1 h-8 rounded-md border border-slate-200 dark:border-slate-800 px-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
            onClick={() => onView(file)}
            aria-label={`View ${file.title || humanizeFilename(file.href)}`}
          >
            <Icon name="eye" className="size-4" /> View
          </button>
          <a
            href={file.href}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1 h-8 rounded-md border border-slate-200 dark:border-slate-800 px-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
            aria-label={`Download ${file.title || humanizeFilename(file.href)}`}
          >
            <Icon name="download" className="size-4" /> Download
          </a>
        </div>
      </div>
    );
  }

  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3">
      <button
        type="button"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 px-2 py-1 -mx-1 -my-1 rounded-md hover:underline"
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-controls="reports-list"
      >
        <Icon
          name="file-text"
          className="size-4 text-slate-500 dark:text-slate-400"
        />
        Reports ({files.length})
        <Icon
          name={open ? "chevron-down" : "chevron-right"}
          className="size-4"
        />
      </button>

      <div
        id="reports-list"
        className={`overflow-hidden transition-[max-height,opacity] duration-200 ease-[var(--ease-standard)] ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul className="mt-2 divide-y divide-slate-200 dark:divide-slate-800 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          {files.map((file) => (
            <li
              key={file.href}
              className="flex items-center justify-between gap-2 px-3 py-2"
            >
              <div className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <Icon
                  name="file-text"
                  className="size-4 text-slate-500 dark:text-slate-400"
                />
                <span>
                  {file.title ||
                    humanizeFilename(file.href.split("/").pop() || "PDF")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 h-8 rounded-md border border-slate-200 dark:border-slate-800 px-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
                  onClick={() => onView(file)}
                  aria-label={`View ${
                    file.title || humanizeFilename(file.href)
                  }`}
                >
                  <Icon name="eye" className="size-4" /> View
                </button>
                <a
                  href={file.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-1 h-8 rounded-md border border-slate-200 dark:border-slate-800 px-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
                  aria-label={`Download ${
                    file.title || humanizeFilename(file.href)
                  }`}
                >
                  <Icon name="download" className="size-4" /> Download
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
