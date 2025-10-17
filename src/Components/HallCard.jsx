import React from 'react'
import { useNavigate } from 'react-router-dom';

const HallCard = ({ imageUrl, name, location, type, rating, numberOfRooms, capacity }) => {

    const navigate = useNavigate();
    const handleClick = (name) => {
        navigate(`/booking/${name}`)
    }

    return (
        <div onClick={() => handleClick(name)} className=' w-full sm:w-[31%] p-2 border border-black hover:bg-white cursor-pointer rounded-md hover:shadow-lg transition duration-300 ease-in-out transform  flex flex-col items-center '>
            <img src={imageUrl} alt="hotel-image" className='w-full h-[50vw] sm:h-[13vw] rounded-md object-cover object-center' />
            <div className='px-2 py-2 flex flex-col w-[99%]'>
                <div className='flex justify-between my-2'>
                    <h1 className=' w-[70%] font-semibold text-xl text-black'>{name}</h1>
                    <h4 className='text-md w-[30%] font-semibold text-zinc-700 flex gap-2 items-center justify-end'> <i className="fa-solid fa-star text-green-600"></i>{rating} / 5.0 </h4>
                </div>
                <div className='flex gap-2 justify-between items-start'>
                    <h3 className='w-[60%] font-semibold text-sm sm:text-md text-zinc-500 flex items-start tracking-tight '> <i class="fa-solid fa-location-dot mr-2"></i> {location} </h3>
                    <h3 className='w-[50%]  font-semibold text-md text-zinc-500 flex justify-end items-center '> <i class="fa-solid fa-hotel mr-2"></i> {type}</h3>
                </div>
                <div className='flex gap-2 items-start'>
                    <h3 className=' mr-2 font-semibold text-sm mt-3 text-black bg-zinc-200 px-3'> {capacity} pax </h3>
                    <h3 className=' mx-2 font-semibold text-sm mt-3 text-black bg-zinc-200 px-3  '> {numberOfRooms} Rooms</h3>
                </div>
            </div>
        </div>
    )
}

export default HallCard;