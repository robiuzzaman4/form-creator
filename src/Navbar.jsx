const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-2xl z-10 border border-gray-200">
            <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 flex items-center justify-between gap-4">
                <a href="/">
                    <span className="font-bold text-xl">Form Creator</span>
                </a>
                <a href="https://github.com/robiuzzaman4/form-creator" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/github.svg"
                        alt="github svg icon"
                        className="w-5 h-5" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;