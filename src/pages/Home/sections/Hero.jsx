

const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-40 items-center py-10 px-5 md:px-10"
        >
            <div>
                <div className="flex flex-col justify-center gap-5 w-[270px] md:w-[325px]">
                    <div>
                        <div className="flex flex-row ">
                            <h1 className="font-rubik uppercase font-medium text-primary text-3xl md:text-4xl">Hey, I{"'"}m</h1>
                        </div>
                        <div className="flex flex-row justify-end">
                            <h1 className="font-rubik uppercase font-medium text-secondary text-3xl md:text-4xl">Ramez Ehab</h1>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-row">
                            <h1 className="font-robotoMono font-medium text-primary text-lg md:text-xl">I{"'"}m a</h1>
                        </div>
                        <div className="flex flex-row justify-end">
                            <h1 className="font-robotoMono font-medium text-secondary text-lg md:text-xl">Mobile | Web Developer</h1>
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


            <div className="">
                <img
                    src="https://avatars.githubusercontent.com/u/117018553?v=4"
                    alt="Ramez Ehab"
                    className="w-60 md:w-72 rounded-full"
                />
            </div>
        </section>
    )
}

export default Hero
