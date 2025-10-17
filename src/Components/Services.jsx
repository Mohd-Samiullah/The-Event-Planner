import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (

    <section data-aos="fade-up" className='bg-[#FFFBFB] py-4' >
      <h1 className='py-10 text-center text-2xl sm:text-4xl'>Our Services</h1>
      <div className=' px-2 sm:px-10 pb-10 sm:pb-0 flex flex-wrap justify-around '>

        <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
          {/* <img src="https://youmeandtrends.com/wp-content/uploads/2015/11/wedding-stage-decoration-with-flowers.jpg" alt="service-1" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4 ' /> */}
          <img src="assets/decoration-service.jpeg" alt="service-1" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4 ' />
          <h3 className='font-semibold mb-2  text-md sm:text-xl'>Decoration</h3>
          <p className='pl-3 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
        </div>

        <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
          {/* <img src="https://www.adorama.com/alc/wp-content/uploads/2018/03/wedding-videography-1-1024x683.jpg" alt="service-2" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4' /> */}
          <img src="assets/videography-service.jpg" alt="service-2" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4' />
          <h3 className='font-semibold mb-2 text-md sm:text-xl'>Videography</h3>
          <p className='pl-3 sm:pl-10 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
        </div>

        <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
          {/* <img src="https://academy-cdn.wedio.com/2021/12/wedding-photographer-groomsmen.jpg" alt="service-1" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4 ' /> */}
          <img src="assets/photography-service.jpeg" alt="service-1" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4 ' />
          <h3 className='font-semibold mb-2  text-md sm:text-xl'>Photography</h3>
          <p className='pl-3 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
        </div>

        <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
          {/* <img src="https://handheldcatering.com/wp-content/uploads/2019/01/HandHeld-Catering_4-Awesome-Ideas-for-Organizing-a-Perfect-Private-Event_IMAGE1.jpeg" alt="service-2" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4' /> */}
          <img src="assets/foodcatering-service.jpeg" alt="service-2" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4' />
          <h3 className='font-semibold mb-2 text-md sm:text-xl'>Food Catering</h3>
          <p className='pl-3 sm:pl-10 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
        </div>

        <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
          {/* <img src="https://hox.ae/wp-content/uploads/2018/01/Corporate-Event-Planners-and-Wedding-Stage-Designers.jpg" alt="service-1" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4 ' /> */}
          <img src="assets/lighting-service.jpeg" alt="service-1" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4 ' />
          <h3 className='font-semibold mb-2  text-md sm:text-xl'>Lighting</h3>
          <p className='pl-3 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
        </div>

        <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
          {/* <img src="https://d1zpvjny0s6omk.cloudfront.net/media/fileupload/2015/12/31/23_duarte-heidt_kortnee-kate1.jpg" alt="service-2" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4' /> */}
          <img src="assets/entertainment-service.jpg" alt="service-2" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4' />
          <h3 className='font-semibold mb-2 text-md sm:text-xl'>Entertainment</h3>
          <p className='pl-3 sm:pl-10 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
        </div>

      </div>
    </section>
  )
}

export default Services