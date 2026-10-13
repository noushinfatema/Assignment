import bannerphoto from '../assets/banner-stack.png'

const HeroSection = () => {
    return (
        <section className="flex justify-between items-center h-105 container mx-auto mt-22">
            {/* content wrapper */}
            <div>
                <p className="font-inter font-extrabold text-[60px] text-heroSection leading-tight">Build Your Ideal<br/> <span className='bg-gradient-to-r from-[rgba(255,87,34,1)] via-[rgba(216,27,126,1)] to-[rgba(124,58,237,1)] bg-clip-text text-transparent'>Development Stack</span></p>
                <p className='font-sans text-small mt-4'>Explore frontend, backend, database, and tooling options,<br/> compare them side by side, and put together the stack that fits your <br/>next project.</p>
                <div className='flex gap-4 mt-10'>
                    <button className='bg-linear-to-r from-[rgba(255,87,34,1)] via-[rgba(216,27,126,1)] to-[rgba(124,58,237,1)] font-inter font-semibold text-background py-3 px-5 rounded-[10px] cursor-pointer'>Explore Technologies</button>
                    <button className='font-inter py-2 px-12 rounded-[10px] text-herobtnfont border cursor-pointer'>Learn More</button>
                </div>
            </div>
            <div>
                <img src={bannerphoto} alt="" />
            </div>
        </section>
    );
};

export default HeroSection;