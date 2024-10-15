import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import icons from '../../../constants/icons';
import images from '../../../constants/images';
import { ReactTyped } from "react-typed";

const variants = {
    container: {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 3,
                staggerChildren: 0.5, // Stagger animations of children
            },
        },
    },
    item: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },

    image: {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    },

    sideSlide: {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
}

const personalLinks = [
    {
        name: 'LinkedIn',
        icon: icons.linkedin,
        link: 'https://www.linkedin.com/in/ramezehab/',
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


const Hero = () => {
    const ref = useRef(null);
    const animationControls = useAnimation();
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) animationControls.start('visible');
    }, [animationControls, isInView]);

    return (
        <motion.section
            ref={ref}
            id="hero"
            className="w-full h-[85vh] sm:h-[90vh] flex flex-col-reverse sm:flex-row justify-end xs:justify-evenly gap-y-8 sm:gap-30 items-center sm:px-10 md:px-10 "
            initial="hidden"
            animate={animationControls}
        >
            <motion.div
                className="h-[40%] sm:h-[50%] md:w-1/2 md:h-screen/2 flex flex-col justify-center items-start gap-y-5 pt-4 sm:pt-0"
                variants={variants.container}
            >
                <div
                    className="flex flex-col justify-center gap-5 w-[270px] md:w-[325px] lg:w-[431px] "

                >
                    <div>
                        <motion.div className="flex flex-row"
                            variants={variants.item}
                        >
                            <motion.h1
                                className="font-rubik uppercase font-medium text-primary text-3xl md:text-4xl lg:text-5xl"
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                Hey, I{"'"}m
                            </motion.h1>
                        </motion.div>
                        <motion.div
                            className="flex flex-row justify-end"
                            variants={variants.sideSlide}
                        >
                            <motion.h1
                                className="font-rubik uppercase font-medium text-secondary text-3xl md:text-4xl lg:text-5xl"
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                Ramez Ehab
                            </motion.h1>
                        </motion.div>
                    </div>

                    <div>
                        <motion.div
                            className="flex flex-row"
                            variants={variants.item}
                        >
                            <motion.h1
                                className="font-robotoMono font-medium text-primary text-lg md:text-xl lg:text-2xl"
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                I{"'"}m a
                            </motion.h1>
                        </motion.div>
                        <motion.div
                            className="flex flex-row justify-end"
                            variants={variants.item}
                        >
                            <motion.h1
                                className="font-robotoMono font-medium text-secondary text-lg md:text-xl lg:text-2xl"
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                <ReactTyped
                                    strings={[
                                        'Mobile | Web Developer',
                                        'Aspiring AI Enthusiast',
                                        'Living in debug mode',
                                        'Guitarist',
                                        'Ultimate Frisbee Player',
                                    ]}
                                    typeSpeed={75}
                                    backSpeed={50}
                                    backDelay={1000}
                                    loop
                                    fadeOut={false} // To erase the last string
                                />
                            </motion.h1>
                        </motion.div>
                    </div>

                    <div>
                        <motion.div
                            className="flex flex-row"
                            variants={variants.item}
                        >
                            <motion.h1
                                className="font-robotoMono font-medium text-primary text-lg"
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                Hope to bring
                            </motion.h1>
                        </motion.div>
                        <motion.div
                            className="flex flex-row justify-end"
                            variants={variants.item}
                        >
                            <motion.h1
                                className="font-robotoMono font-medium text-secondary text-lg"
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                Real Change
                            </motion.h1>
                        </motion.div>
                    </div>


                </div>
                <motion.button
                    className="bg-primary text-bgColor font-robotoMono font-medium text-base md:text-lg py-2 px-4 rounded-md w-fit sm:mt-auto mx-auto sm:mx-0 active:bg-secondary active:scale-110 "
                    variants={variants.sideSlide}
                    whileHover={{ scale: 1.1, backgroundColor: '#51bfff' }}
                    transition={{ duration: 0.3 }}
                    onClick={() => { window.open('/resume.pdf', '_blank'); }}
                >
                    View my Resume
                </motion.button>
            </motion.div>

            <motion.div
                className="h-[40%] sm:h-[50%] flex flex-col justify-evenly sm:justify-between"
                initial="hidden"
                animate="visible"
                variants={variants.image}
            >
                <motion.img
                    src={images.character}
                    alt="Ramez Ehab"
                    className="rounded-full w-[30vw] min-w-40 xs:w-[30vw] xs:h-[30vw] sm:w-auto sm:h-[75%] md:max-h-[45vw] md:h-[80%] lg:h-[83%]  object-contain"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                />
                <motion.div
                    className="flex flex-row justify-center gap-x-5 pt-2 lg:pt-0"
                    variants={variants.item}
                >
                    {personalLinks.map((link, index) => (
                        <a key={index} href={link.link} target="_blank" rel="noreferrer">
                            <motion.img
                                src={link.icon}
                                alt={link.name}
                                className="h-8"
                                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                            />
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
