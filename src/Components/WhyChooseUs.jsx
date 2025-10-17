
// import wcuimage from 'assets/wcu-bgremoved.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhyChooseUs = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });
    }, []);
    return (
        <div data-aos="fade-up">
            <h1 className='pb-10 bg-[#FFFBFB] text-center text-2xl sm:text-4xl'>Why Choose Us</h1>
            <section className='flex justify-center bg-[#FFFBFB] pb-16 '>
                <img src="assets/wcu-bgremoved.png" alt="why choose us image" className='h-[80vh] drop-shadow-2xl ' />
            </section>
        </div>

    )
}

export default WhyChooseUs