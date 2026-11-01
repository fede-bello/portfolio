import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SocialLinks } from "@/components/SocialLinks";
import { useI18n } from "@/hooks/useI18n";

export function AboutPage(): JSX.Element {
  const { t } = useI18n();

  return (
    <div>
      <SectionHeader title={t.about.title} subtitle={t.about.subtitle} />
      <Container className="max-w-5xl pb-16 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <motion.img
              src="/me.png"
              alt={t.about.photoAlt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
        <div className="md:col-span-2 space-y-4 leading-7 text-slate-700 dark:text-slate-200">
          {t.about.paragraphs.map((html, i) => (
            <motion.p
              key={html}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i === 0 ? 0 : 0.05 }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}

          <div className="pt-2">
            <h2 className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              {t.about.connect}
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
