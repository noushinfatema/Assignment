import bannerphoto from '../assets/banner-stack.png'

const HeroSection = () => {
    return (
        <section className="flex justify-between items-center h-150 container mx-auto mt-22 md:mb-7">
            {/* content wrapper */}
            <div>
                <p className="font-inter font-extrabold text-[65px] text-heroSection leading-[0.9]">Build Your Ideal<br/> <span className='bg-gradient-theme bg-clip-text text-transparent -leading-2'>Development Stack</span></p>
                <p className='font-sans text-small mt-4'>Explore frontend, backend, database, and tooling options,<br/> compare them side by side, and put together the stack that fits your <br/>next project.</p>
                <div className='flex gap-4 mt-10'>
                    <button className='bg-gradient-theme font-inter font-semibold text-background py-3 px-5 rounded-[10px] cursor-pointer hover:-translate-y-1'>Explore Technologies</button>
                    <button className='font-inter py-2.5 px-14 rounded-xl text-slate-700 bg-background border border-slate-200 hover:-translate-y-1 transition-colors cursor-pointer text-sm font-medium'>
  Learn More
</button>
                </div>
            </div>
            <div>
                <img src={bannerphoto} alt="Banner Photo" />
            </div>
        </section>
    );
};

export default HeroSection;