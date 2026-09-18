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
            I'm a <strong>Machine Learning Engineer</strong> doing the{" "}
            <strong>MVA</strong> at{" "}
            <a
              href="https://www.ens-paris-saclay.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ENS Paris-Saclay
            </a>{" "}
            as a <strong>Sophie Germain Scholar</strong>. Until September 2026 I
            was a Lead ML Engineer at{" "}
            <a
              href="https://tryolabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Tryolabs
            </a>
            , embedded with the{" "}
            <a
              href="https://www.llamaindex.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LlamaIndex
            </a>{" "}
            team as a Forward Deployed Engineer.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            I studied Telecommunications Engineering at{" "}
            <a
              href="https://www.fing.edu.uy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              UdelaR
            </a>
            , graduating <strong>top 3 of my class</strong> with a prize-winning
            thesis on anomaly detection with Graph Neural Networks. There I also
            taught programming and did research on DNA storage.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            I enjoy building reliable end-to-end ML systems grounded in applied
            mathematics. I speak Spanish, English, German and French.
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
