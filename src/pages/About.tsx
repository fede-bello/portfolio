import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SocialLinks } from "@/components/SocialLinks";

export function AboutPage(): JSX.Element {
  return (
    <div>
      <SectionHeader
        title="About Me"
        subtitle="Machine Learning Engineer • MVA @ ENS Paris-Saclay • Sophie Germain Scholar"
      />
      <Container className="max-w-5xl pb-16 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <motion.img
              src="/me.png"
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
            I'm a <strong>Machine Learning Engineer</strong> based in Paris, where
            I'm pursuing the{" "}
            <strong>M.Sc. Mathematics, Vision, Learning (MVA)</strong> at{" "}
            <a
              href="https://www.ens-paris-saclay.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ENS Paris-Saclay
            </a>{" "}
            as a <strong>Sophie Germain Excellence Scholar</strong> of the
            Fondation Mathématique Jacques Hadamard.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            Until September 2026 I was a{" "}
            <strong>Lead Machine Learning Engineer</strong> at{" "}
            <a
              href="https://tryolabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Tryolabs
            </a>
            , embedded as a{" "}
            <strong>Forward Deployed Engineer</strong> with the{" "}
            <a
              href="https://www.llamaindex.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LlamaIndex
            </a>{" "}
            team, where I took AI document-processing systems to production for
            enterprise clients, led AI system architecture, and mentored
            engineers. I hold a degree in{" "}
            <strong>Telecommunications Systems Engineering</strong>{" "}
            from the{" "}
            <a
              href="https://www.fing.edu.uy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Faculty of Engineering
            </a>{" "}
            of the University of the Republic (UdelaR), where I graduated{" "}
            <strong>top 3 of my class</strong>. My thesis on anomaly detection
            with Graph Neural Networks received the{" "}
            <strong>Best Engineering Project and First Place Thesis Prize</strong>{" "}
            from Uruguay's National Academy of Engineering.
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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            I speak <strong>Spanish</strong> (native),{" "}
            <strong>English</strong> (C2 Proficiency, CPE),{" "}
            <strong>German</strong> (B1, Goethe) and <strong>French</strong> (A2).
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
