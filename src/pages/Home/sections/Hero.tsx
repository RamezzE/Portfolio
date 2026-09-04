import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import icons from '../../../constants/icons';

const variants: Record<string, Variants> = {
    container: {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                staggerChildren: 0.15,
            },
        },
    },
    item: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    sideSlide: {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    ring: {
        hidden: { opacity: 0, scale: 0.7, rotate: -30 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.4, ease: 'easeOut' } },
    },
    manifest: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    },
    row: {
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    },
}

const personalLinks = [
    {
        name: 'LinkedIn',
        icon: icons.linkedin,
        link: 'https://www.linkedin.com/in/ramezehab/',
    },
    {
        name: 'Upwork',
        icon: icons.upwork,
        link: 'https://www.upwork.com/freelancers/~01f9a101dc510f1112'
    },
    {
        name: 'GitHub',
        icon: icons.github,
        link: 'https://www.github.com/RamezzE/',
    },
    {
        name: 'Email',
        icon: icons.email,
        link: 'mailto:ramezehab2@gmail.com',
    },
]

const statusReadouts = [
    { label: 'Status', value: 'Online' },
    { label: 'Origin', value: 'Earth' },
    { label: 'Class', value: 'React Dev' },
]

const CodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M8.5 6.5 3.5 12l5 5.5M15.5 6.5l5 5.5-5 5.5M13.5 4.5l-3 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const GuitarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="9" cy="15" r="4.3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="15" r="1.3" stroke="currentColor" strokeWidth="1.1" />
        <path d="M12 12 18 5M18 5l2 .3M18 5l-.3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const DiscIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <ellipse cx="12" cy="12" rx="9" ry="9" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
);

interface Aspect {
    Icon: () => JSX.Element;
    title: string;
    detail?: string;
}

const aspects: Aspect[] = [
    { Icon: CodeIcon, title: 'React Developer' },
    { Icon: GuitarIcon, title: 'Guitarist' },
    { Icon: DiscIcon, title: 'Ultimate Frisbee Captain', detail: 'Flicking Pharaohs' },
];

const Hero = () => {
    const ref = useRef(null);
    const animationControls = useAnimation();
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isInView) animationControls.start('visible');
        }, 200);

        return () => clearTimeout(timeout);
    }, [animationControls, isInView]);


    return (
        <motion.section
            ref={ref}
            id="hero"
            className="relative flex flex-col justify-center items-center gap-y-10 px-5 sm:px-10 w-full min-h-[85vh] sm:min-h-[90vh] py-16"
            initial="hidden"
            animate={animationControls}
        >
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                variants={variants.ring}
            >
                <div className="relative w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] md:w-[560px] md:h-[560px]">
                    <div className="absolute inset-0 rounded-full border border-secondary/15" />
                    <div className="absolute inset-[12%] rounded-full border border-secondary/10" />
                    <div className="absolute inset-[28%] rounded-full border border-dashed border-accent/15 animate-[spin_60s_linear_infinite]" />
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/15 to-transparent" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/15 to-transparent" />
                </div>
            </motion.div>

            <motion.div
                className="relative z-10 flex flex-col items-center gap-y-6 max-w-3xl text-center"
                variants={variants.container}
            >
                <motion.span
                    variants={variants.item}
                    className="font-robotoMono text-secondary/70 text-xs sm:text-sm tracking-[0.35em] uppercase border border-secondary/20 rounded-full px-4 py-1.5 bg-secondary/5"
                >
                    Transmission Incoming
                </motion.span>

                <div className="flex flex-col gap-1">
                    <motion.h1
                        variants={variants.item}
                        className="font-display font-black text-primary text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-glow"
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        Ramez Ehab
                    </motion.h1>
                    <motion.h2
                        variants={variants.item}
                        className="font-robotoMono font-medium text-secondary text-lg sm:text-2xl md:text-3xl"
                    >
                        Multi-role Operative
                    </motion.h2>
                </div>

                <motion.p
                    variants={variants.item}
                    className="font-rubik text-primary text-base sm:text-lg max-w-xl"
                >
                    Charting a course through code — building interfaces that feel like they belong on the bridge of something bigger. Hope to have a real impact, one launch at a time.
                </motion.p>

                <motion.div
                    variants={variants.item}
                    className="flex flex-row flex-wrap justify-center gap-3 sm:gap-4 font-robotoMono"
                >
                    {statusReadouts.map((s) => (
                        <div key={s.label} className="hud-corners text-secondary/60 flex flex-col items-center border border-primary/10 bg-panel/40 rounded px-4 py-2 min-w-[100px]">
                            <span className="text-[10px] uppercase tracking-widest text-primary/70">{s.label}</span>
                            <span className="text-sm text-primary flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse-glow" />
                                {s.value}
                            </span>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    variants={variants.manifest}
                    className="flex flex-col gap-y-2 w-full max-w-md pt-2"
                >
                    <span className="font-robotoMono text-[10px] sm:text-xs text-secondary/50 uppercase tracking-[0.25em] text-left">
                        {'// Crew Manifest'}
                    </span>
                    {aspects.map((aspect, index) => (
                        <motion.div
                            key={index}
                            variants={variants.row}
                            whileHover={{ x: 4 }}
                            className="relative flex items-center gap-3 sm:gap-4 rounded-md border border-secondary/15 bg-panel/40 backdrop-blur-sm px-3 sm:px-4 py-2.5 hover:border-secondary/45 hover:bg-panel/60 transition-colors text-left"
                        >
                            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-secondary/40 pointer-events-none" />
                            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-secondary/40 pointer-events-none" />

                            <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-md border border-secondary/30 bg-black/40 text-secondary p-1.5 sm:p-2">
                                <aspect.Icon />
                            </div>

                            <div className="flex flex-col min-w-0">
                                <span className="font-robotoMono font-medium text-primary text-sm sm:text-base truncate">
                                    {aspect.title}
                                </span>
                                {aspect.detail && (
                                    <span className="font-robotoMono text-secondary/70 text-[11px] sm:text-xs truncate">
                                        {aspect.detail}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.button
                    className="relative bg-secondary text-bgColor mt-2 px-6 py-3 rounded font-robotoMono font-semibold text-sm sm:text-base uppercase tracking-wider overflow-hidden"
                    variants={variants.sideSlide}
                    whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(77,216,255,0.5)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => { window.open('/resume.pdf', '_blank'); }}
                >
                    View my Resume
                </motion.button>

                <motion.div
                    className="flex flex-row justify-center gap-x-5 pt-2"
                    variants={variants.item}
                >
                    {personalLinks.map((link, index) => (
                        <a key={index} href={link.link} target="_blank" rel="noreferrer">
                            <motion.img
                                src={link.icon}
                                alt={link.name}
                                className="h-7 sm:h-8 opacity-80"
                                whileHover={{ scale: 1.15, opacity: 1, transition: { duration: 0.2 } }}
                            />
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
