const NavBar = () => {
  return (
    <div className="w-full flex flex-row md:gap-10 px-5 py-5 justify-around lg:justify-end min-h-10 sticky top-0 bg-black/65 z-50">
      <span className="font-robotoMono font-medium text-base md:text-lg text-secondary scale-110 transition transform hover:scale-110 cursor-pointer">Home</span>
      <span className="font-robotoMono font-medium text-base md:text-lg text-primary transition transform hover:scale-110 cursor-pointer">About</span>
      <span className="font-robotoMono font-medium text-base md:text-lg text-primary transition transform hover:scale-110 cursor-pointer">Projects</span>
      <span className="font-robotoMono font-medium text-base md:text-lg text-primary transition transform hover:scale-110 cursor-pointer">Contact</span>
    </div>
  );
}

export default NavBar;
