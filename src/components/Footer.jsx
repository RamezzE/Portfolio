const Footer = () => {
    return (
      <footer className="bg-black/65 text-primary font-rubik py-16 w-full">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Icons by <a href="https://icons8.com" target="_blank" rel="noreferrer" className="text-blue-400">Icons8</a>
          </p>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} Ramez Ehab. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  