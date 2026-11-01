import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";
import { Icon } from "@/components/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { SocialLinks } from "@/components/SocialLinks";
import { useI18n } from "@/hooks/useI18n";

export function ContactPage(): JSX.Element {
  const { t } = useI18n();
  const c = t.contact;
  const endpoint = import.meta.env.VITE_FORMSUBMIT_ENDPOINT as
    | string
    | undefined;

  type FieldErrors = {
    name?: string;
    email?: string;
    message?: string;
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    text: string;
  }>({ type: "idle", text: "" });
  const statusRef = useRef<HTMLParagraphElement | null>(null);
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaExpected, setCaptchaExpected] = useState<number | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const captchaInputRef = useRef<HTMLInputElement | null>(null);
  const [isSent, setIsSent] = useState(false);

  const onCooldown = useMemo(() => {
    if (cooldownUntil == null) return false;
    return Date.now() < cooldownUntil;
  }, [cooldownUntil]);

  useEffect(() => {
    if (status.type !== "idle" && statusRef.current) {
      statusRef.current.focus();
    }
  }, [status]);

  useEffect(() => {
    if (cooldownUntil == null) return;
    const remaining = cooldownUntil - Date.now();
    if (remaining <= 0) {
      setCooldownUntil(null);
      return;
    }
    const t = window.setTimeout(() => setCooldownUntil(null), remaining);
    return () => window.clearTimeout(t);
  }, [cooldownUntil]);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) next.name = c.errors.nameRequired;
    if (!email.trim()) next.email = c.errors.emailRequired;
    else if (!emailPattern.test(email))
      next.email = c.errors.emailInvalid;
    const len = message.trim().length;
    if (!len) next.message = c.errors.messageRequired;
    else if (len < 10) next.message = c.errors.messageTooShort;
    else if (len > 5000)
      next.message = c.errors.messageTooLong;
    return next;
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    if (isSubmitting || onCooldown) return;
    const v = validate();
    setErrors(v);
    setStatus({ type: "idle", text: "" });
    if (Object.keys(v).length > 0) return;
    if (honey.trim()) {
      // Honeypot filled: silently ignore
      setStatus({
        type: "success",
        text: c.status.received,
      });
      setName("");
      setEmail("");
      setMessage("");
      setCooldownUntil(Date.now() + 10_000);
      return;
    }
    if (!endpoint) {
      setStatus({
        type: "error",
        text: c.status.notConfigured,
      });
      return;
    }
    openCaptcha();
  }

  function openCaptcha(): void {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    setCaptchaQuestion(`${a} + ${b} = ?`);
    setCaptchaExpected(a + b);
    setCaptchaAnswer("");
    setCaptchaError("");
    setIsCaptchaOpen(true);
    setTimeout(() => captchaInputRef.current?.focus(), 0);
  }

  async function sendForm(): Promise<void> {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.set("name", name);
      formData.set("email", email);
      formData.set("message", message);
      formData.set("_subject", "New portfolio contact");
      formData.set("_template", "table");
      formData.set("_captcha", "false");
      if (honey) formData.set("_honey", honey);

      const res = await fetch(endpoint!, {
        method: "POST",
        body: formData,
        headers: {},
      });

      if (!res.ok) throw new Error("Network error");

      setStatus({
        type: "success",
        text: c.status.success,
      });
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setCooldownUntil(Date.now() + 10_000);
      setIsSent(true);
    } catch {
      setStatus({
        type: "error",
        text: c.status.failure,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function onConfirmCaptcha(): void {
    if (captchaExpected == null) return;
    const answer = Number(captchaAnswer.trim());
    if (Number.isNaN(answer) || answer !== captchaExpected) {
      setCaptchaError(c.captchaError);
      setTimeout(() => captchaInputRef.current?.focus(), 0);
      return;
    }
    setIsCaptchaOpen(false);
    void sendForm();
  }

  const contentKey = isSent ? "success" : isSubmitting ? "sending" : "form";

  return (
    <div>
      <SectionHeader title={c.title} />
      <Container className="max-w-5xl pb-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
          {contentKey === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="p-6 grid gap-4 place-items-center text-center"
            >
              <div className="rounded-full bg-blue-50 dark:bg-blue-900/20 p-6">
                <Icon
                  name="check-circle"
                  className="w-16 h-16 text-blue-600 dark:text-blue-400"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-xl font-semibold">
                  {c.thanksTitle}
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {c.thanksBody}
                </p>
              </div>
            </motion.div>
          ) : contentKey === "sending" ? (
            <motion.div
              key="sending"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="p-6 grid gap-4 place-items-center text-center"
            >
              <div className="rounded-full bg-blue-50 dark:bg-blue-900/20 p-6">
                <div className="w-16 h-16 rounded-full border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 animate-spin" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-xl font-semibold">{c.sending}</h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {c.pleaseWait}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="grid gap-4"
              noValidate
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Panel className="p-6 grid gap-4">
                <input
                  type="hidden"
                  name="_subject"
                  value="New portfolio contact"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="text"
                  name="_honey"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {c.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder={c.namePlaceholder}
                    className="h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 outline-none focus:ring-2 focus:ring-slate-400/60"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={Boolean(errors.name) || undefined}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                    disabled={isSent}
                  />
                  {errors.name ? (
                    <p
                      id="name-error"
                      className="text-sm text-red-600 dark:text-red-400"
                    >
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {c.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={c.emailPlaceholder}
                    className="h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 outline-none focus:ring-2 focus:ring-slate-400/60"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(errors.email) || undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                    disabled={isSent}
                  />
                  {errors.email ? (
                    <p
                      id="email-error"
                      className="text-sm text-red-600 dark:text-red-400"
                    >
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {c.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={c.messagePlaceholder}
                    className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 outline-none focus:ring-2 focus:ring-slate-400/60"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-invalid={Boolean(errors.message) || undefined}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    required
                    disabled={isSent}
                  />
                  {errors.message ? (
                    <p
                      id="message-error"
                      className="text-sm text-red-600 dark:text-red-400"
                    >
                      {errors.message}
                    </p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-10 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 font-medium hover:opacity-90"
                  disabled={isSubmitting || onCooldown || isSent}
                >
                  {isSent
                    ? c.sent
                    : isSubmitting
                    ? c.sending
                    : onCooldown
                    ? c.wait
                    : c.send}
                </button>
              </Panel>
            </motion.form>
          )}
        </AnimatePresence>
        {isCaptchaOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="captcha-title"
              className="relative z-10 w-full max-w-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-lg"
            >
              <h2 id="captcha-title" className="text-base font-semibold mb-2">
                {c.captchaTitle}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                {c.captchaPrompt} {captchaQuestion}
              </p>
              <div className="grid gap-2 mb-4">
                <label htmlFor="captcha-input" className="text-sm font-medium">
                  {c.captchaAnswer}
                </label>
                <input
                  id="captcha-input"
                  ref={captchaInputRef}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 outline-none focus:ring-2 focus:ring-slate-400/60"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  aria-invalid={Boolean(captchaError) || undefined}
                  aria-describedby={captchaError ? "captcha-error" : undefined}
                />
                {captchaError ? (
                  <p
                    id="captcha-error"
                    className="text-sm text-red-600 dark:text-red-400"
                  >
                    {captchaError}
                  </p>
                ) : null}
              </div>
              <div className="flex items-center gap-2 justify-end">
                <button
                  type="button"
                  className="h-9 px-3 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                  onClick={() => setIsCaptchaOpen(false)}
                >
                  {c.cancel}
                </button>
                <button
                  type="button"
                  className="h-9 px-3 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90"
                  onClick={onConfirmCaptcha}
                >
                  {c.confirm}
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <p
          className="text-xs text-slate-500 dark:text-slate-400 mt-2"
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={statusRef}
        ></p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 mb-4">
            {c.otherWays}
          </h2>
          <SocialLinks className="!grid-cols-1" />
        </section>

        <section>
          <h2 className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 mb-4">
            {c.email}
          </h2>
          <a
            href="mailto:fedebello13@gmail.com"
            className="text-slate-900 dark:text-white font-medium hover:underline"
          >
            fedebello13@gmail.com
          </a>
        </section>
      </div>
    </div>
  </Container>
</div>
);
}
