

const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full flex flex-col-reverse sm:flex-row justify-center gap-10 md:gap-40 items-center p-5 md:p-10 my-2"
        >
            <div className="md:w-1/2">
                <div className="flex flex-col justify-center gap-5 w-[270px] md:w-[431px]">
                    <div>
                        <div className="flex flex-row">
                            <h1 className="font-rubik uppercase font-medium text-primary text-3xl md:text-5xl">Hey, I{"'"}m</h1>
                        </div>
                        <div className="flex flex-row justify-end">
                            <h1 className="font-rubik uppercase font-medium text-secondary text-3xl md:text-5xl">Ramez Ehab</h1>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-row">
                            <h1 className="font-robotoMono font-medium text-primary text-lg md:text-2xl">I{"'"}m a</h1>
                        </div>
                        <div className="flex flex-row justify-end">
                            <h1 className="font-robotoMono font-medium text-secondary text-lg md:text-2xl">Mobile | Web Developer</h1>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-row">
                            <h1 className="font-robotoMono font-medium text-primary text-lg">Passionate about</h1>
                        </div>
                        <div className="flex flex-row justify-end">
                            <h1 className="font-robotoMono font-medium text-secondary text-lg">Programming</h1>
                        </div>
                    </div>

                </div>
            </div>


            <div className="w-3/4 xs:w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/3">
                <img
                    src="https://avatars.githubusercontent.com/u/117018553?v=4"
                    alt="Ramez Ehab"
                    className="rounded-full"
                />
            </div>
        </section>
    )
}

export default Hero
