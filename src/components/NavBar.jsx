const NavBar = () => {
  return (
    <div className="w-full flex flex-row md:gap-10 px-5 py-5 justify-around md:justify-end min-h-10">
        <span className="font-robotoMono font-medium text-base md:text-lg text-secondary">Home</span>
        <span className="font-robotoMono font-medium text-base md:text-lg text-primary">About</span>
        <span className="font-robotoMono font-medium text-base md:text-lg text-primary">Projects</span>
        <span className="font-robotoMono font-medium text-base md:text-lg text-primary">Contact</span>
    </div>
  )
}

export default NavBar
