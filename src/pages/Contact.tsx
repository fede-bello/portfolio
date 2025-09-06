import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";

export function ContactPage() {
  return (
    <div>
      <SectionHeader
        title="Contact Me"
        subtitle="[Use this form to get in touch]"
      />
      <Container className="max-w-3xl pb-16">
        <form className="grid gap-4">
          <Panel className="p-6 grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your full name"
                className="h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 outline-none focus:ring-2 focus:ring-slate-400/60"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 outline-none focus:ring-2 focus:ring-slate-400/60"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="[Your message here]"
                className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 outline-none focus:ring-2 focus:ring-slate-400/60"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center h-10 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 font-medium hover:opacity-90"
            >
              Send (placeholder)
            </button>
          </Panel>
        </form>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          Form is non-functional. Wire to your backend or a form service.
        </p>
      </Container>
    </div>
  );
}
