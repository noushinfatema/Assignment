
const Navbar = () => {
    return (
        <nav className="h-7 bg-white">
            <div className="container mx-auto flex justify-between items-center">
         <div className="bg-amber-400">
            <img src="./assets/logo-text.png" alt="" />
        </div> 
         <div className="">
            <ul className="flex gap-2.5">
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Conatct</li>
            </ul>
        </div> 
         <div>
            <button>Sign In</button>
            <button>Sign Up</button>
        </div> 
        </div>
        </nav>
    );
};

export default Navbar;