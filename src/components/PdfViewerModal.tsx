import { useEffect, useRef } from "react";
import { Icon } from "@/components/Icon";

type Props = {
  open: boolean;
  title: string;
  src: string;
  onClose: () => void;
};

export function PdfViewerModal({
  open,
  title,
  src,
  onClose,
}: Props): JSX.Element | null {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      const prev = document.activeElement as HTMLElement | null;
      closeButtonRef.current?.focus();
      return () => prev?.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`PDF Viewer: ${title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-5xl max-h-[85vh] rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 min-w-0">
            <Icon
              name="file-text"
              className="size-4 text-slate-500 dark:text-slate-400"
            />
            <h3 className="text-sm font-medium line-clamp-1">{title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              <Icon name="arrow-up-right" className="size-4" /> Open
            </a>
            <a
              href={src}
              download
              className="inline-flex items-center gap-1 text-sm px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              <Icon name="download" className="size-4" /> Download
            </a>
            <button
              ref={closeButtonRef}
              className="inline-flex items-center gap-1 text-sm px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
              onClick={onClose}
            >
              <Icon name="close" className="size-4" />
              Close
            </button>
          </div>
        </header>
        <div className="bg-slate-50 dark:bg-slate-900">
          <object
            data={src}
            type="application/pdf"
            className="w-full h-[75vh]"
            aria-label={title}
          >
            <embed
              src={src}
              type="application/pdf"
              className="w-full h-[75vh]"
            />
          </object>
        </div>
      </div>
    </div>
  );
}
