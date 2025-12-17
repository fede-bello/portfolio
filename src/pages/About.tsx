import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import meImage from "@/assets/images/me.png";
import { SocialLinks } from "@/components/SocialLinks";

export function AboutPage(): JSX.Element {
  return (
    <div>
      <SectionHeader
        title="About Me"
        subtitle="ML Engineer at Tryolabs • ML, Applied Mathematics, Programming"
      />
      <Container className="max-w-5xl pb-16 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <motion.img
              src={meImage}
              alt="That's me!"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
        <div className="md:col-span-2 space-y-4 leading-7 text-slate-700 dark:text-slate-200">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            I currently work as a <strong>Machine Learning Engineer</strong> at{" "}
            <a
              href="https://tryolabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Tryolabs
            </a>
            , where I focus on building and deploying{" "}
            <strong>ML systems</strong> in production. I hold a degree in{" "}
            <strong>Telecommunications Systems Engineering</strong> from the{" "}
            <a
              href="https://www.fing.edu.uy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Faculty of Engineering
            </a>{" "}
            of the University of the Republic (UdelaR), where I specialized in
            signal processing and information theory.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            I also have <strong>academic experience</strong> as a Teaching Assistant at
            the UdelaR, where I <strong>taught programming courses</strong> and
            contributed to <strong>research</strong> in the Information Theory
            Group, focusing on DNA storage systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            My main interests are <strong>machine learning</strong>,{" "}
            <strong>applied mathematics</strong> with a focus on signal
            processing, and <strong>programming</strong>. I enjoy building
            practical, reliable end-to-end ML systems, drawing on my background
            in signal processing, data modeling, and backend development.
          </motion.p>

          <div className="pt-2">
            <h2 className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              Connect with me
            </h2>
            <div className="mt-3">
              <SocialLinks />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
