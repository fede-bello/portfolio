import { ReactNode, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  routeKey: string;
};

function focusMainHeading(element: HTMLElement | null) {
  if (!element) return;
  const mainHeading = element.querySelector<HTMLElement>(
    "h1, [data-page-title=true]"
  );
  (mainHeading ?? element).focus({ preventScroll: true });
}

export function PageTransition({ children, routeKey }: Props): JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    let handle: number | undefined;
    handle = window.requestAnimationFrame(() => focusMainHeading(element));
    return () => {
      if (handle) window.cancelAnimationFrame(handle);
    };
  }, [routeKey]);

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 12 };
  const animate = { opacity: 1, y: 0 };
  const exit = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: -8, scale: 0.98 };
  const transition = {
    duration: shouldReduceMotion ? 0.08 : 0.2,
    ease: [0.2, 0, 0, 1],
  };

  return (
    <motion.div
      ref={containerRef}
      key={routeKey}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      onAnimationComplete={() => focusMainHeading(containerRef.current)}
      tabIndex={-1}
    >
      {children}
    </motion.div>
  );
}
