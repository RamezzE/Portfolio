import { Link } from "react-router-dom"

const NotFound = () => {

    return (
        <div className="flex-grow gap-y-8 flex flex-col justify-center items-center bg-bgColor/50 rounded-lg p-16">
            <span className="text-primary font-rubik text-5xl text-center">404: Lost in Space</span>
            <span className="text-primary text-center font-rubik text-3xl mt-4">
                It looks like you{"'"}re floating through uncharted territory
            </span>
            <Link
                to="/"
                className="bg-secondary text-bgColor font-robotoMono font-medium text-base md:text-lg p-2 rounded-md w-fit active:scale-110 hover:scale-110 transition duration-500 ease-in-out text-center"
                >
                Return to Portfolio
            </Link>
        </div>

    )
}

export default NotFound
