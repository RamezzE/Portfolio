

const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full flex flex-row justify-center gap-40 items-center"
        >
            <div className="flex flex-col gap-6 justify-center items-center">
                <h1 className="font-rubik uppercase font-bold text-center text-gray-900 text-5xl">Ramez<br />Ehab</h1>
                <h1 className="font-rubik uppercase font-medium text-gray-900 text-xl">Mobile | Web Developer</h1>
                <span className="font-robotoMono max-w-44 text-center">Bla Bla Bla Bla BlaBla Bla Bla Bla BlaBla Bla Bla Bla BlaBla Bla Bla Bla Bla</span>
            </div>

            <div>
                <img
                    src="https://avatars.githubusercontent.com/u/117018553?v=4"
                    alt="Ramez Ehab"
                    className="w-52 h-52 rounded-full"
                />
            </div>
        </section>
    )
}

export default Hero
