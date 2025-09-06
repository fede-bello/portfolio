import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import meImage from "@/assets/images/me.png";
import { SocialLinks } from "@/components/SocialLinks";

export function AboutPage() {
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
            I'm a Machine Learning Engineer at Tryolabs, focused on building and
            deploying ML systems in production. I hold a degree in
            Telecommunications Systems Engineering from the University of the
            Republic (UdelaR), where I specialized in signal processing and
            information theory. At the university, I've taught programming
            courses and worked as a research assistant with the Information
            Theory Group, conducting research on DNA storage systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            My main interests are machine learning, applied mathematics with a
            focus on signal processing, and programming. I enjoy building
            practical, reliable ML systems end to end, drawing on my background
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
