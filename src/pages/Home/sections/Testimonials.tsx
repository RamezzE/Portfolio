import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import icons from "../../../constants/icons";

interface Testimonial {
  source: "Upwork" | "Client Testimonial";
  project?: string;
  linkedSlug?: string;
  linkedName?: string;
  rating?: number;
  quote: string;
  attribution: string;
  meta?: string;
  tags?: string[];
}

const testimonials: Testimonial[] = [
  {
    source: "Upwork",
    project: "Small Electron (or Tauri) local AI Assistant",
    linkedSlug: "bridge-app",
    linkedName: "Bridge App",
    rating: 5.0,
    quote:
      "Working with Ramez was absolutely amazing from start to finish. He solved some really hard challenges in this project that a previous freelancer was not able to implement. He gave a lot of input and thoughts, and you could see that he cared about a good end result, not just finishing the job. Every task was handled with precision, speed, and a great attitude. He consistently went above and beyond expectations, making the entire process smooth and enjoyable. I can't recommend Ramez enough - an absolute gem on UpWork. Will definitely be working with him again!",
    attribution: "Verified Client",
    tags: ["Endorsed by client", "Collaborative", "Accountable for Outcomes", "Solution Oriented", "Detail Oriented"],
  },
  {
    source: "Upwork",
    project: "Web App Development for Spin the Wheel Game with SMS OTP Integration",
    rating: 5.0,
    quote:
      "I had the pleasure of working with Ramez on a recent project, and I couldn't be more impressed with his skills and professionalism. Ramez is extremely knowledgeable in a wide range of technologies, including React, JavaScript, HTML, Web Development, Firebase, Databases, and OTP integration. His understanding of customer requirements is exceptional, and he always ensures that the final product aligns perfectly with what was asked for. Communication with Ramez was a breeze. He is easy to work with, speaks multiple languages, and is always responsive, which made the whole process smooth and efficient. On top of that, he consistently delivered on time and met all project milestones. If you're looking for a reliable, skilled, and communicative developer, I highly recommend Ramez. He exceeded my expectations, and I look forward to working with him again on future projects!",
    attribution: "Verified Client",
    tags: ["Endorsed by client", "Clear Communicator", "Collaborative", "Committed to Quality", "Professional", "Reliable"],
  },
  {
    source: "Client Testimonial",
    linkedSlug: "hst-risk",
    linkedName: "HST Risk",
    quote:
      "Working with Ramez on our mobile application development was an exceptional experience. From start to finish, Ramez demonstrated a deep understanding of mobile technology and a clear vision for bringing our ideas to life. His attention to detail and commitment to quality were evident in every phase of the project. Not only did he deliver a user-friendly, robust application that exceeded our expectations, but he also provided invaluable insights to enhance functionality and improve user experience. His ability to troubleshoot challenges quickly and his dedication to meeting deadlines made the entire process smooth and efficient. I would highly recommend Ramez to anyone looking for a skilled and reliable mobile app developer.",
    attribution: "Shady T. — Helio Sports Team Leader",
    meta: "Cross Platform Mobile Application · Nov 2024 · Verified",
  },
];

const variants: Record<string, Variants> = {
  container: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, staggerChildren: 0.12 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
};

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 20 20"
        className={`w-3.5 h-3.5 ${i < Math.round(rating) ? "fill-secondary" : "fill-primary/15"}`}
      >
        <path d="M10 1.5l2.5 5.6 6.1.6-4.6 4.1 1.4 6-5.4-3.2-5.4 3.2 1.4-6-4.6-4.1 6.1-.6z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const titleRef = useRef(null);
  const animateControls = useAnimation();
  const isInView = useInView(titleRef, { once: true });

  useEffect(() => {
    if (isInView) animateControls.start("visible");
  }, [animateControls, isInView]);

  return (
    <motion.section
      id="testimonials"
      className="relative flex flex-col justify-center items-center p-5 md:p-10 gap-10 my-16 w-full max-w-5xl mx-auto"
      initial="hidden"
      animate={animateControls}
      variants={variants.container}
    >
      <motion.div ref={titleRef} className="flex flex-col items-center gap-2" variants={variants.item}>
        <span className="font-robotoMono text-secondary/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
          Incoming Transmissions
        </span>
        <h1 className="text-primary font-display font-bold text-3xl sm:text-4xl uppercase tracking-wide text-glow">
          Field Reports
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={variants.item}
            whileHover={{ y: -4 }}
            className="relative flex flex-col gap-3 rounded-md border border-secondary/20 bg-panel/50 backdrop-blur-sm p-5 shadow-[0_0_30px_-18px_rgba(77,216,255,0.6)]"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-secondary/50 pointer-events-none" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-secondary/50 pointer-events-none" />

            <div className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 font-robotoMono text-[10px] uppercase tracking-widest text-secondary/60">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse-glow" />
                {t.source === "Upwork" ? "Received via Upwork" : "Direct Transmission"}
              </span>
              {t.source === "Upwork" && (
                <img src={icons.upwork} alt="Upwork" className="h-4 w-4 opacity-70" />
              )}
            </div>

            {t.rating && <Stars rating={t.rating} />}

            {t.project && (
              <p className="font-robotoMono text-primary text-xs italic truncate">
                “{t.project}”
              </p>
            )}

            <p className="font-rubik text-primary text-base leading-relaxed line-clamp-[10]">
              {t.quote}
            </p>

            <div className="mt-auto pt-3 border-t border-secondary/10 flex flex-col gap-2">
              <span className="font-robotoMono text-secondary text-xs font-medium">
                {t.attribution}
              </span>
              {t.meta && (
                <span className="font-robotoMono text-primary text-xs">{t.meta}</span>
              )}
              {t.tags && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-robotoMono text-[11px] text-primary border border-primary/25 rounded-full px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {t.linkedSlug && (
                <button
                  onClick={() => { window.location.hash = t.linkedSlug as string; }}
                  className="self-start font-robotoMono text-secondary text-[11px] uppercase tracking-widest hover:translate-x-1 transition-transform mt-1"
                >
                  About: {t.linkedName} →
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
