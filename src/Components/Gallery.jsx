import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };

  const data = [
    "https://www.hedgethink.com/wp-content/uploads/2020/01/corporate-events.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbb%2F2e%2Fa4%2Fbb2ea43d65e00039d3d915551d4db308.jpg&f=1&nofb=1&ipt=f98ff3770315043a7b8241d34aa7cbfd66b9528a48b79b5d501eb93ba7bc9b5e&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.alivenetwork.com%2Fmedia%2Fmake-anniversary-party-decorations-centerpieces_85277559dc600be0.jpg&f=1&nofb=1&ipt=c008b7488d8a399ccf3d1f11a636a4622a24b768df891042115662d4fa94d88e&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A800%2F1*RbhDxmKO4GRcdqdsYfJnxg.jpeg&f=1&nofb=1&ipt=4a79c5fc76431f874967913a4f7e3b9bd1b520befff8b8f62a056d56e7b37e05&ipo=images"
  ];
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div data-aos="fade-up" className="w-full pb-16 py-12 bg-[#FFFBFB] ">
      <h1 className="text-center text-2xl sm:text-4xl">Past Events</h1>
      <div className="mx-10 mt-12">
        <Slider {...settings}>
          {data.map((e, i) => (
            <div key={i} className="">
              <img
                className="w-full sm:w-96 h-12 sm:h-60 px-2 object-cover overflow-hidden"
                src={e}
                alt=""
              />
            </div>
          ))}
        </Slider>



      </div>
    </div>
  );
}

export default Gallery;
