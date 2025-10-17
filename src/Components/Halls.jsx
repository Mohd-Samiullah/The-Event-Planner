import { Link } from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Halls = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });
    }, []);

    return (<>
        <section className='h-[95vh] my-10 bg-[url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmyeventorganizers.com%2Fwp-content%2Fuploads%2F2019%2F02%2F12340547467e093795.jpg&f=1&nofb=1&ipt=8316990b07399ebf3ba6181b7c4489333676c251ab86e0180e3ae6c504c58adc&ipo=images")] bg-bottom bg-cover bg-fixed  w-screen flex items-center'>


            <div className='text-white bg-[#0d0d0d65] w-full h-full flex flex-col items-center justify-center  gap-10'>
                <h1 className='text-2xl sm:text-[5vw] font-semibold'>Occasion Hubs</h1>
                {/* <h1 className='text-2xl sm:text-[5vw] font-semibold'>...</h1> */}
                <p className='mb-2 sm:mb-4 text-sm sm:text-[1.5vw] font-semibold '>Discover the Perfect Venue for Any Occasion</p>
                <Link to="/browsehalls" className='bg-[#FF5880] hover:no-underline rounded-full px-16 py-2 text-white text-xl hover:bg-[#ec4d72] font-semibold cursor-pointer'>Browse Halls</Link>
            </div>

        </section>
    </>
    )
}

export default Halls