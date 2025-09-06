import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/Skeleton";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";

export function AboutPage() {
  return (
    <div>
      <SectionHeader title="About Me" subtitle="[Your Bio Here]" />
      <Container className="max-w-5xl pb-16 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Panel className="p-0 aspect-square w-full overflow-hidden">
            <Skeleton className="w-full h-full" />
          </Panel>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Photo placeholder. Use the normalphoto option if you prefer.
          </p>
        </div>
        <div className="md:col-span-2 space-y-4 leading-7 text-slate-700 dark:text-slate-200">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Brief introduction: [Add a concise summary of who you are and what
            you do].
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            Interests: [Machine Learning, Signal Processing, Backend
            Development, etc.]
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Currently: [What you are working on right now].
          </motion.p>
        </div>
      </Container>
    </div>
  );
}
