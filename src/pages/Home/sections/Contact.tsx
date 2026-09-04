import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M4 6.5 12 13l8-6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="8" cy="8.2" r="1.1" fill="currentColor" />
    <path d="M8 11v6M12 11v6M12 13.6c0-1.6 1.2-2.6 2.6-2.6S17 12 17 13.6V17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path
      d="M8 6.8c2.6-.9 5.4-.9 8 0M6.2 8.6C4 12 3.5 15.2 4 17.8c1.6 1.3 3.2 2 4.7 2.4l1-1.7M17.8 8.6c2.2 3.4 2.7 6.6 2.2 9.2-1.6 1.3-3.2 2-4.7 2.4l-1-1.7"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
    />
    <ellipse cx="9" cy="14" rx="1.4" ry="1.7" fill="currentColor" />
    <ellipse cx="15" cy="14" rx="1.4" ry="1.7" fill="currentColor" />
  </svg>
);

const CopyIcon = ({ copied }: { copied: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
    {copied ? (
      <path d="M5 12.5 10 17.5 19.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <>
        <rect x="9" y="9" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 15V6a1.5 1.5 0 0 1 1.5-1.5H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    )}
  </svg>
);

interface Channel {
  id: string;
  Icon: () => JSX.Element;
  label: string;
  value: string;
  href?: string;
  copyValue?: string;
}

const channels: Channel[] = [
  {
    id: "email",
    Icon: EmailIcon,
    label: "Email",
    value: "ramezehab2@gmail.com",
    href: "mailto:ramezehab2@gmail.com",
  },
  {
    id: "linkedin",
    Icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/ramezehab",
    href: "https://www.linkedin.com/in/ramezehab/",
  },
  {
    id: "discord",
    Icon: DiscordIcon,
    label: "Discord",
    value: "ralayz",
    href: "https://discord.com/users/ralayz",
    copyValue: "ralayz",
  },
];

const ContactForm = () => {
  const titleRef = useRef(null);
  const animateControls = useAnimation();
  const isInView = useInView(titleRef, { once: true });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) {
      animateControls.start("visible");
    }
  }, [animateControls, isInView]);

  const handleCopy = (channel: Channel) => {
    if (!channel.copyValue) return;
    navigator.clipboard?.writeText(channel.copyValue).then(() => {
      setCopiedId(channel.id);
      setTimeout(() => setCopiedId((prev) => (prev === channel.id ? null : prev)), 1800);
    });
  };

  return (
    <motion.section
      id="contact"
      className="flex flex-col justify-center items-center gap-10 mt-32 mb-24 p-5 md:p-10"
      initial="hidden"
      animate={animateControls}
      variants={containerVariants}
    >
      <motion.div
        ref={titleRef}
        className="flex flex-col items-center gap-2"
        variants={itemVariants}
      >
        <span className="font-robotoMono text-secondary/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
          Open Channel
        </span>
        <h1 className="font-display font-bold text-primary text-3xl sm:text-4xl uppercase tracking-wide text-glow">
          Reach Out
        </h1>
        <p className="font-robotoMono text-primary/70 text-sm text-center max-w-md">
          Pick a frequency — all channels monitored.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl"
      >
        {channels.map((channel) => {
          const isCopyable = Boolean(channel.copyValue);
          const isCopied = copiedId === channel.id;

          const content = (
            <>
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-secondary/40 pointer-events-none" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-secondary/40 pointer-events-none" />

              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-md border border-secondary/30 bg-black/40 text-secondary p-2 mb-3">
                <channel.Icon />
              </div>

              <span className="font-robotoMono text-[10px] text-secondary/60 uppercase tracking-[0.25em]">
                {channel.label}
              </span>
              <span className="font-robotoMono font-medium text-primary text-sm sm:text-base mt-1 flex items-center gap-2 truncate w-full">
                {channel.value}
                {isCopyable && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy(channel);
                    }}
                    className="text-secondary hover:text-primary transition-colors"
                    aria-label={`Copy ${channel.label} username`}
                  >
                    <CopyIcon copied={isCopied} />
                  </button>
                )}
              </span>
              {isCopyable && (
                <span className="font-robotoMono text-[10px] text-secondary/50 uppercase tracking-widest mt-1">
                  {isCopied ? "Copied" : channel.href ? "Open profile · copy username" : "Click to copy"}
                </span>
              )}
            </>
          );

          const className =
            "hud-corners relative flex flex-1 flex-col items-start px-5 py-5 border border-secondary/30 bg-panel/50 backdrop-blur-sm rounded-md text-left transition-colors hover:border-secondary/60 hover:bg-panel/70";

          if (channel.href) {
            return (
              <motion.a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={className}
              >
                {content}
              </motion.a>
            );
          }

          return (
            <motion.button
              key={channel.id}
              type="button"
              onClick={() => handleCopy(channel)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={className}
            >
              {content}
            </motion.button>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
