import React, { useState, useEffect } from 'react'
import HallCard from './HallCard';
import data from '../utils/data'

const Browsehalls = () => {

  // useEffect( async ()=>{
  //   const webdata = await fetch("https://www.wedmegood.com/api/v2/vendor/filter?version=2.0&filter=0&seo=0&offset=40&random=4170&category_slug=wedding-venues&venue_type=banquet-hall&token=66433d76ac9e93.65258069&source=1&filter_slug=all%2Fwedding-venues%2Fall%2Fbanquet-hall")

  //   const jsondata = await webdata.json();

  //   console.log( jsondata.data );

  // } )


  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCityClick = (city) => {
    setSearchQuery(city);
  };



  return (
    <div className='flex flex-col  items-center py-4 bg-[#FFFBFB]'>

      <div className='flex flex-col sm:flex-row  justify-between items-start sm:items-center w-[80%] mb-10'>
        <h1 className='text-2xl sm:text-3xl ml-3'>Browse Halls</h1>
        <input type="text" placeholder='Search...' onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} className='border rounded-sm w-[90%] sm:w-[20vw] mt-6 sm:mt-0 px-3 py-2 focus:outline-none placeholder-zinc-500' />
      </div>
      <div className='flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 sm:gap-8 w-[80%] mb-10'>
        {[
          { city: "Delhi", img: "https://image.wedmegood.com/resized/100X/uploads/city_image/1/delhi.png" },
          { city: "Mumbai", img: "https://image.wedmegood.com/resized/100X/uploads/city_image/6/bombay.png" },
          { city: "Bangalore", img: "https://image.wedmegood.com/resized/100X/uploads/city_image/9/banglore.png" },
          { city: "Hyderabad", img: "https://image.wedmegood.com/resized/100X/uploads/city_image/11/hyderabad.png" },
          { city: "Chennai", img: "https://image.wedmegood.com/resized/100X/uploads/city_image/10/chennai.png" },
          { city: "Goa", img: "https://image.wedmegood.com/resized/100X/uploads/city_image/16/goa.png" },
          { city: "Jaipur", img: "https://image.wedmegood.com/resized/100X/uploads/city_image/17/jaipur.png" },
          { city: "Pune", img: "https://image.wedmegood.com/resized/100X/uploads/city_image/7/pune.jpg" },
          { city: "Kolkata", img: "https://image.wedmegood.com/resized/100X/uploads/city_image/12/kolkata.png" },
          { city: "Lucknow", img: "https://image.wedmegood.com/resized/100X/uploads/city_image/22/lucknow.png" },
        ].map(({ city, img }, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handleCityClick(city)}>
            <img className="rounded-full h-16 w-16 sm:h-20 sm:w-20 object-cover object-center" src={img} alt={city.toLowerCase()} />
            <p className="mt-2 text-sm">{city || 'Clear Filters'}</p>
          </div>
        ))}
      </div>

      <div className='w-[95%] flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-10 '>
        {(filteredData.length > 0) ?
          filteredData.map((item) => {
            return <HallCard imageUrl={item.imageUrl} name={item.name} location={item.location} type={item.type} rating={item.rating} numberOfRooms={item.numberOfRooms} capacity={item.capacity} />
          }) :
          <h1 className='ml-3'>No Items Found..</h1>}

      </div>

    </div>
  )
}

export default Browsehalls