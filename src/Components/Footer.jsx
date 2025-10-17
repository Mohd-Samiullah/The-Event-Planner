import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {

  const data = [
    { name: "Home" },
    { name: "Services" },
    { name: "Occasion Hubs" },
    { name: "Contact Us" },
    { name: "Register" },
  ];

  return (
    <div className="w-full mt-10 h-70 bg-[#333333] sm:px-14 px-2 py-6 text-white flex flex-col sm:flex-row sm:items-start sm:justify-between">
      <div className="w-full sm:w-[33%] h-full p-4 overflow-hidden">
        {/* <h1 className="text-3xl sm:text-4xl mb-6">TheEvent</h1> */}
        <img src="assets/mainlogowhite-removebg.png" alt="logo" className=" scale-150 mb-4 mx-10 w-31 object-contain" />
        <p className="text-justify leading-5">
          Plan your perfect event effortlessly with our Event Planner application. From booking venues to managing guest lists, we simplify every step, ensuring a seamless experience for all your special occasions. Your dream event, just a few clicks away!
        </p>
      </div>

      <div className="w-full sm:w-[30%] h-full p-4 sm:block hidden">
        <h1>USEFUL LINKS</h1>
        <div className="w-full h-[2px] bg-[#FF5880] my-2"></div>
        {data.map((d, i) => (
          <div className="flex gap-2 items-center py-1.5 sm:py-2 ">
            <IoIosArrowForward /> <Link to={(d.name === "services") ? "/" + d.name : ((d.name === "Contact Us") ? "/contactus" : ((d.name === "Register") ? "/signup" : ((d.name === "Occasion Hubs") ? "/occasionhubs" : "/")))} className="cursor-pointer text-white hover:no-underline">{d.name}</Link>
            <hr className="my-2" />
          </div>
        ))}
      </div>

      <div className="w-full sm:w-[30%] h-full p-4 ">
        <h1>CONTACT US</h1>
        <div className="w-full h-[2px] bg-[#FF5880] my-2"></div>
        <div >
          <h3 className="my-2">
            <p className="my-2 pt-2">New Delhi</p> <p>Delhi 110059</p> <p className="mt-1">India</p>
          </h3>
          <h3 className="flex my-1">
            <p className=" font-semibold">Phone: &nbsp;</p>
            <p>+91 8211001171</p>
          </h3>
          <h3 className="flex my-1">
            <p className=" font-semibold">Email: &nbsp;</p>
            <p>info@email.com</p>
          </h3>
        </div>

        <div className="flex gap-2 my-4">
          <div className="bg-white text-black rounded-full text-2xl sm:text-xl p-1 cursor-pointer"> <FaXTwitter /> </div>
          <div className="bg-white text-black rounded-full text-2xl sm:text-xl p-1 cursor-pointer"> <FaFacebookF /> </div>
          <div className="bg-white text-black rounded-full text-2xl sm:text-xl p-1 cursor-pointer"> <FaInstagram /> </div>
          <div className="bg-white text-black rounded-full text-2xl sm:text-xl p-1 cursor-pointer"> <FaGoogle /> </div>
          <div className="bg-white text-black rounded-full text-2xl sm:text-xl p-1 cursor-pointer"> <FaLinkedin /> </div>

        </div>

      </div>
    </div >
  );
}

export default Footer;
