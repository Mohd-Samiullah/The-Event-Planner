import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });
    }, []);

    return (
        <section data-aos="fade-up" className="h-[95vh] bg-[url('/assets/hero-section-bg.jpeg')] bg-cover w-screen flex items-center">

            <div className='text-white bg-[#0D0D0D87] ml-14 sm:ml-36 pl-4 sm:pl-8 pr-10 sm:pr-16 py-2 rounded-xl'>
                <h1 className='text-2xl sm:text-5xl font-semibold'>Organizing</h1>
                <h1 className='text-2xl sm:text-5xl font-semibold'>an Event.</h1>
                <p className='mb-2 sm:mb-4 text-sm sm:text-lg font-semibold'>where imagination meets reality.</p>
            </div>

        </section>
    )
}

export default Hero