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
            className="flex sm:flex-row flex-col-reverse justify-end xs:justify-evenly items-center gap-y-8 sm:gap-30 sm:px-10 md:px-10 w-full h-[85vh] sm:h-[90vh]"
            initial="hidden"
            animate={animationControls}
        >
            <motion.div
                className="flex flex-col justify-center items-start gap-y-5 pt-4 sm:pt-0 md:w-1/2 h-[40%] sm:h-[50%] md:h-screen/2"
                variants={variants.container}
            >
                <div
                    className="flex flex-col justify-center gap-5 w-[270px] md:w-[325px] lg:w-[431px]"

                >
                    <div>
                        <motion.div className="flex flex-row"
                            variants={variants.item}
                        >
                            <motion.h1
                                className="font-rubik font-medium text-primary text-3xl md:text-4xl lg:text-5xl uppercase"
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
                                className="font-rubik font-medium text-secondary text-3xl md:text-4xl lg:text-5xl uppercase"
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
                                I{"'"}m
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
                                        'a React Developer',
                                        'Living in debug mode',
                                        'Your next best hire',
                                        'a Guitarist',
                                        'an Ultimate Frisbee Player',
                                        
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
                                Hope to have
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
                                A Real Impact
                            </motion.h1>
                        </motion.div>
                    </div>


                </div>
                <motion.button
                    className="bg-primary active:bg-secondary mx-auto sm:mx-0 sm:mt-auto px-4 py-2 rounded-md w-fit font-robotoMono font-medium text-bgColor text-base md:text-lg active:scale-110"
                    variants={variants.sideSlide}
                    whileHover={{ scale: 1.1, backgroundColor: '#51bfff' }}
                    transition={{ duration: 0.3 }}
                    onClick={() => { window.open('/resume.pdf', '_blank'); }}
                >
                    View my Resume
                </motion.button>
            </motion.div>

            <motion.div
                className="flex flex-col justify-evenly sm:justify-between h-[40%] sm:h-[50%]"
                initial="hidden"
                animate={animationControls}
                // animate="visible"
                variants={variants.image}
            >
                <motion.img
                    src={images.character}
                    alt="Ramez Ehab"
                    className="rounded-full w-[30vw] xs:w-[30vw] sm:w-auto min-w-40 xs:h-[30vw] sm:h-[75%] md:h-[80%] lg:h-[83%] md:max-h-[45vw] object-contain"
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
