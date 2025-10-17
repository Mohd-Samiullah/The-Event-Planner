import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MyBookings = () => {

    const { id } = useParams()
    const [bookings, setbookings] = useState([])

    useEffect(() => {
        axios.get(`https://event-planner-app-backend-y35i.onrender.com/order/search/${id}`)
            .then((res) => setbookings(res.data.Bookings))
    }, [])


    // const handleViewInfo = () => {
    //     alert("Payment Successfull! \n Total Paid: 50000 Rs.");
    // }

    return (
        <div className='w-full flex justify-center py-10'>
            <div className='w-[80%] '>
                <h1 className='text-3xl font-semibold'>My Bookings</h1>

                {bookings.length > 0 ? (
                    bookings.map((item, index) => (
                        <div key={index} className='flex flex-col justify-center items-center my-10'>
                            <div className='w-full flex flex-col sm:flex-row justify-around bg-pink-50 hover:bg-white border py-2 hover:shadow-md rounded-lg'>
                                <div className='sm:w-[25vw] sm:h-[15vw] w-[90%] h-[40vw] mx-auto rounded-lg bg-zinc-200'>
                                    <img src={item.razorpayDetails.notes.image} alt="" className='w-full h-full object-cover object-center rounded-md' />
                                </div>
                                <div className='w-[50.5vw] py-2 px-3 sm:px-0 flex flex-col justify-around'>
                                    <div>
                                        <h2 className='font-semibold text-2xl text-zinc-700'>{item.razorpayDetails.notes.hallName}</h2>
                                        <div className='flex gap-10 mt-2 justify-start text-lg'>
                                            <h3 className='font-semibold text-sm sm:text-md text-zinc-500 flex items-center'> <i className="fa-solid fa-location-dot mr-2"></i> {item.razorpayDetails.notes.hallAddress} </h3>
                                            <h3 className='font-semibold text-sm sm:text-md text-zinc-500 flex justify-end items-center'> <i className="fa-solid fa-hotel mr-2"></i> {item.razorpayDetails.notes.hallType}</h3>
                                            <h3 className='font-semibold text-sm sm:text-md text-zinc-500 flex justify-end items-center'> <i className="fa-solid fa-people-group mr-2"></i> {item.razorpayDetails.notes.capacity} pax</h3>
                                        </div>
                                    </div>
                                    <div className='flex items-end'>
                                        <div className=' w-full sm:w-[70%] mt-2 flex flex-col gap-1 pb-2 '>
                                            <h2 className='text-sm sm:text-base'> <span className='font-semibold'> Event Name: </span> {item.razorpayDetails.notes.eventCategory}</h2>
                                            <h2 className='text-sm sm:text-base'> <span className='font-semibold'> Event Date: </span> {item.razorpayDetails.notes.eventDate}</h2>
                                            <h2 className='text-sm sm:text-base'> <span className='font-semibold'> Event Time: </span> {item.razorpayDetails.notes.startTime} - {item.razorpayDetails.notes.endTime}</h2>
                                            <h2 className='text-sm sm:text-base'><span className='font-semibold'>Services Added: </span>
                                                {Object.entries(item.razorpayDetails.notes.services).map(([service, value], index, arr) => (
                                                    value && (
                                                        <span className='capitalize' key={service}>
                                                            {index !== 0 && ', '} {service}
                                                        </span>
                                                    )
                                                ))}
                                            </h2>
                                        </div>
                                        {/* <div className=' w-[30%] flex justify-end pr-2'>
                                            <button className='bg-[#FF5880] px-10 py-2 rounded-md text-white font-semibold my-2 focus:outline-none hover:bg-[#ec4d72]'>View Info</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='text-center my-10'>
                        <h1 className=' font-semibold text-lg text-zinc-500'>No Bookings Done</h1>
                        <div className='my-10 '>

                            <Link to="/browsehalls" className='bg-[#FF5880] hover:no-underline rounded-full px-16 py-2 text-white text-xl hover:bg-[#ec4d72] font-semibold cursor-pointer'>Browse Halls</Link>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}

export default MyBookings;
