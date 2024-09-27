const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full flex flex-col-reverse sm:flex-row justify-center gap-10 md:gap-30 items-center p-5 md:p-10 my-2 animate-fade-in"
        >
            <div className="md:w-1/2">
                <div className="flex flex-col justify-center gap-5 w-[270px] md:w-[431px]">
                    <div className="animate-slide-up">
                        <div className="flex flex-row">
                            <h1 className="font-rubik uppercase font-medium text-primary text-3xl md:text-5xl transition duration-500 ease-in-out transform hover:scale-105">Hey, I{"'"}m</h1>
                        </div>
                        <div className="flex flex-row justify-end">
                            <h1 className="font-rubik uppercase font-medium text-secondary text-3xl md:text-5xl transition duration-500 ease-in-out transform hover:scale-105">Ramez Ehab</h1>
                        </div>
                    </div>

                    <div className="animate-slide-up delay-150">
                        <div className="flex flex-row">
                            <h1 className="font-robotoMono font-medium text-primary text-lg md:text-2xl transition duration-500 ease-in-out transform hover:scale-105">I{"'"}m a</h1>
                        </div>
                        <div className="flex flex-row justify-end">
                            <h1 className="font-robotoMono font-medium text-secondary text-lg md:text-2xl transition duration-500 ease-in-out transform hover:scale-105">Mobile | Web Developer</h1>
                        </div>
                    </div>

                    <div className="animate-slide-up delay-300">
                        <div className="flex flex-row">
                            <h1 className="font-robotoMono font-medium text-primary text-lg transition duration-500 ease-in-out transform hover:scale-105">Passionate about</h1>
                        </div>
                        <div className="flex flex-row justify-end">
                            <h1 className="font-robotoMono font-medium text-secondary text-lg transition duration-500 ease-in-out transform hover:scale-105">Programming</h1>
                        </div>
                    </div>

                    <button
                        className="bg-primary text-bgColor font-robotoMono font-medium text-base md:text-lg py-2 px-4 rounded-md w-fit transition duration-500 ease-in-out transform hover:scale-110 hover:bg-secondary"
                    >
                        View my Resume
                    </button>
                </div>

            </div>

            <div className="w-3/4 xs:w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/3 animate-slide-in">
                <img
                    src="https://avatars.githubusercontent.com/u/117018553?v=4"
                    alt="Ramez Ehab"
                    className="rounded-full transition duration-500 ease-in-out transform hover:scale-110"
                />
            </div>

        </section>
    )
}

export default Hero;
