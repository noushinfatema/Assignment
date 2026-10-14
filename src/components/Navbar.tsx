import logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className="container mx-auto h-[72.5px] flex justify-between items-center">
         <div className='flex items-center'>
            <img className='w-33 h-auto' src = {logo} alt="" />
        </div> 
         <div className="">
            <ul className="flex justify-center items-center gap-[28.88px] text-small font-sans">
                <li className="text-magenta"><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div> 
         <div className='flex gap-5'>
            <button className="text-small font-sans cursor-pointer">Sign In</button>
            <button className='flex items-center text-background bg-magenta h-5 w-auto p-5 rounded-4xl font-sans cursor-pointer'>Sign Up</button>
        </div> 
        </div>
        </nav>
    );
};

export default Navbar;