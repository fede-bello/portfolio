import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="container max-w-3xl py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        We couldn't find what you were looking for.
      </p>
      <Link
        to="/"
        className="inline-flex mt-6 h-10 items-center justify-center rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 font-medium hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}
