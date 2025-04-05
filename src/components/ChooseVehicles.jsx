import React from 'react';
import scootybg from "../../assets/scootybg.png";
import bike1bg from "../../assets/bike1bg.png";
import bike3bg from "../../assets/bike3bg.png";

const ChooseVehiclesData = [
    {
        name: "Vespa",
        price: 100,
        image: scootybg, 
        aosDelay: '0',
    },
    {
        name: "Bike",
        price: 140,
        image: bike1bg,
        aosDelay: '500',
    },
    {
        name: "Premier Bike",
        price: 100,
        image: bike3bg,
        aosDelay: '1000',
    },
]

const ChooseVehicles = () => {
    return (
      <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white'>
        <div className='container'>
          {/* heading */}
          <h1 data-aos='fade-up' 
          className='text-3xl sm:text-4xl font-bold mb-3'
          style={{fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}>
            Choose your ride
          </h1>
          <p data-aos='fade-up' className='text-sm pb-10'>
            Have a look at our selection and choose the one that best fits your needs!
          </p>
          
          {/* vehicle listing cards */}
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                {ChooseVehiclesData.map((data, index) => {
                    return (
                    <div
                    data-aos='fade-up'
                    data-aos-delay={data.aosDelay}
                    className="space-y-2 border-2 border-gray-300 hover:border-[#FF3D3D] p-4 rounded-xl relative group overflow-hidden"
                    key={index}
                    >
                        <div className='w-full h-[120px] px-4 flex justify-center'>
                            <img 
                            className={`w-full h-[120px] object-contain ${
                                index === 0 
                                    ? 'sm:translate-x-0 group-hover:-translate-x-8' 
                                    : 'sm:translate-x-0 group-hover:translate-x-8'
                            } duration-700`}
                            src={data.image}
                            alt="" 
                            />
                        </div>
                        <div className='space-y-1'> 
                            <h1 className='text-[#FF1B1B] font-semibold text-lg'>{data.name}</h1>
                            <div className='flex justify-between items-center'>
                                <p className='text-xl font-semibold'>₹{data.price}/Day</p>
                                <a href='#' className='text-base hover:text-[#FF6060]'>Details</a>
                            </div>
                        </div>
                        <p className='text-xl font-semibold absolute top-3 left-4'>
                            15 km
                        </p>
                    </div>
                    );
                })}
            </div>
          </div>
          
          {/* Let's Ride button */}
          <div className="flex justify-center mt-8">
            <button 
            data-aos='fade-up'
            data-aos-delay='1000'
            className="
              bg-transparent
              hover:bg-[#FF3D3D]
              text-[#FF3D3D]
              hover:text-white
              font-medium
              py-2 px-6
              rounded-[.375rem]
              border-2
              border-[#FF3D3D]
              tracking-wide
              transition-colors duration-500"
            >
              Let's Ride
            </button>
          </div>
        </div>
      </div>
    );
};
  
export default ChooseVehicles;