import bannerphoto from '../assets/banner-stack.png'

const HeroSection = () => {
    return (
        <section className="flex justify-between items-center h-105 container mx-auto mt-22">
            {/* content wrapper */}
            <div>
                <p className="font-extrabold font-[inter] text-[60px] text-heroSection mb-0">Build Your Ideal<br/> <span className='text-heroGradient'>Development Stack</span></p>
                <p className='font-[Plus Jakarta Sans] text-small'>Explore frontend, backend, database, and tooling options,<br/> compare them side by side, and put together the stack that fits your <br/>next project.</p>
                <div className='flex gap-2 mt-10'>
                    <button className='font-inter font-semibold text-background py-4 px-3 bg-amber-500 rounded-2xl'>Explore Technologies</button>
                    <button className='font-inter'>Learn More</button>
                </div>
            </div>
            <div>
                <img src={bannerphoto} alt="" />
            </div>
        </section>
    );
};

export default HeroSection;