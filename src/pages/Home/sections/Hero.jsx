import { motion } from 'framer-motion';

const Hero = () => {
    // Define animation variants for reusability
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 3,
                staggerChildren: 0.5, // Stagger animations of children
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    };

    const sideSlideVariants = {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    }

    return (
        <motion.section
            id="hero"
            className="w-full flex flex-col-reverse sm:flex-row justify-center gap-10 md:gap-30 items-center p-00 md:p-10 my-12 sm:my-16"
            initial="hidden"
            animate="visible"
        >
            <div className="md:w-1/2">
                <motion.div
                    className="flex flex-col justify-center gap-5 w-[270px] md:w-[325px] lg:w-[431px]"
                    variants={containerVariants}
                >
                    <div>
                        <motion.div className="flex flex-row"
                            variants={itemVariants}
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
                            variants={sideSlideVariants}
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
                            variants={itemVariants}
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
                            variants={itemVariants}
                        >
                            <motion.h1
                                className="font-robotoMono font-medium text-secondary text-lg md:text-xl lg:text-2xl"
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                Mobile | Web Developer
                            </motion.h1>
                        </motion.div>
                    </div>

                    <div>
                        <motion.div
                            className="flex flex-row"
                            variants={itemVariants}
                        >
                            <motion.h1
                                className="font-robotoMono font-medium text-primary text-lg"
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                Passionate about
                            </motion.h1>
                        </motion.div>
                        <motion.div
                            className="flex flex-row justify-end"
                            variants={itemVariants}
                        >
                            <motion.h1
                                className="font-robotoMono font-medium text-secondary text-lg"
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                Programming
                            </motion.h1>
                        </motion.div>
                    </div>

                    <motion.button
                        className="bg-primary text-bgColor font-robotoMono font-medium text-base md:text-lg py-2 px-4 rounded-md w-fit mt-6 md:mt-0 mx-auto md:mx-0"
                        variants={sideSlideVariants}
                        whileHover={{ scale: 1.1, backgroundColor: '#51bfff' }}
                        transition={{ duration: 0.3 }}
                    >
                        View my Resume
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                className="w-3/4 xs:w-1/2 sm:w-1/3"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
            >
                <motion.img
                    src="https://avatars.githubusercontent.com/u/117018553?v=4"
                    alt="Ramez Ehab"
                    className="rounded-full"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                />
            </motion.div>
        </motion.section>
    );
};

export default Hero;
