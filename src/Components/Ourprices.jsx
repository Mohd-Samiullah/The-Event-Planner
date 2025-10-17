import { Link } from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Ourprices = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });
    }, []);

    return (
        <section
            data-aos="fade-up" className=' bg-[#FFFBFB] flex flex-col items-center pt-10' >
            <h1 className='text-center font-semibold text-2xl lg:text-4xl uppercase'>Our Prices</h1>
            <h4 className='text-zinc-400 text-lg w-[70%] text-center lg:text-xl my-4 '>Affordable rates for unforgettable events—your dream celebration made real.</h4>
            <div className='w-20 h-1.5 bg-[#FF5880]'></div>

            <div className='w-[70%] my-12 flex  flex-col gap-10 lg:flex-row justify-between '>

                <div className='w-full lg:w-[30%]  rounded-lg border shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transform duration-500'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-zinc-500 font-semibold mt-4 mb-3 uppercase'>For birthdays</h2>
                        <h2 className='text-4xl italic text-center'> 40,000 &#x20B9; </h2>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                    </div>

                    <ul className="fa-ul flex flex-col justify-start px-6 gap-3 text-xl">
                        <li><span className="fa-li"><i className="fa fa-check font-bold"></i></span>Decorations</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Music and Photos</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Food and Drinks</li>
                        <li className="text-zinc-400"><span className="fa-li"><i className="fa fa-times "></i></span>Invitation Cards</li>
                        <li className="text-zinc-400"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                        <li className="text-zinc-400"><span className="fa-li"><i className="fa fa-times"></i></span>Full Services</li>
                    </ul>

                    <div className='flex flex-col items-center mt-2 mb-6'>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                        <Link to="/browsehalls" className='bg-[#FF5880] hover:no-underline rounded-full px-10 py-2 text-white text-lg hover:bg-[#ec4d72] font-semibold'>Buy now</Link>
                    </div>
                </div>

                <div className='w-full lg:w-[30%]   rounded-lg border shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transform duration-500'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-zinc-500 font-semibold mt-4 mb-3 uppercase'>For Weddings</h2>
                        <h2 className='text-4xl italic text-center'> 90,000 &#x20B9; </h2>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                    </div>

                    <ul className="fa-ul flex flex-col justify-start px-6 gap-3 text-xl">
                        <li><span className="fa-li"><i className="fa fa-check font-bold"></i></span>Decorations</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Music and Photos</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Food and Drinks</li>
                        <li><span className="fa-li"><i className="fa fa-check "></i></span>Invitation Cards</li>
                        <li className="text-zinc-400"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                        <li className="text-zinc-400"><span className="fa-li"><i className="fa fa-times"></i></span>Full Services</li>
                    </ul>

                    <div className='flex flex-col items-center mt-2 mb-6'>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                        <Link to='/browsehalls' className='bg-[#FF5880] rounded-full hover:no-underline px-10 py-2 text-white text-lg hover:bg-[#ec4d72] font-semibold'>Buy now</Link>
                    </div>
                </div>

                <div className='w-full lg:w-[30%]   rounded-lg border shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transform duration-500'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-zinc-500 font-semibold mt-4 mb-3 uppercase'>For Others</h2>
                        <h2 className='text-4xl italic text-center'> 1,50,000 &#x20B9; </h2>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                    </div>

                    <ul className="fa-ul flex flex-col justify-start px-6 gap-3 text-xl">
                        <li><span className="fa-li"><i className="fa fa-check font-bold"></i></span>Decorations</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Music and Photos</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Food and Drinks</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Invitation Cards</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>After Party</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Full Services</li>
                    </ul>

                    <div className='flex flex-col items-center mt-2 mb-6'>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                        <Link to="/browsehalls" className='bg-[#FF5880] rounded-full px-10 py-2 hover:no-underline text-white text-lg hover:bg-[#ec4d72] font-semibold'>Buy now</Link>
                    </div>
                </div>

            </div>

        </section>


    )
}

export default Ourprices