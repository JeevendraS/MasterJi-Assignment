import React from 'react'

function CatProfile({ CatData }) {
    let CatTemperament = CatData.temperament.split(' ')

    return (
        <div>
            <div className='w-[355px] h-[603px] bg-white rounded-2xl overflow-hidden flex flex-col'>

                <div className='h-1/2 overflow-hidden'>
                    <img src={CatData.image}
                        alt=""
                        className='w-full h-full object-fit' />
                </div>

                <div className='px-4 py-2'>
                    <div className=''>
                        <h2 className='font-sans font-medium text-[25px] text-black'>{CatData.name}</h2>
                        <h3 className='text-[12px]'>{CatData.description}</h3>
                    </div>
                </div>

                <div className='px-4 py-2'>
                    <div className='flex gap-10'>
                        <h2 className='font-sans italic text-[12px]'>Origin</h2>
                        <h2 className='font-sans font-medium text-[12px]'>{CatData.origin}</h2>
                    </div>
                    <div className='gap-10 pt-2'>
                        <h2 className='font-sans italic text-[12px]'>Temperament</h2>
                        <h2 className='font-sans font-normel text-[10px] bg-gray-300 inline-block rounded-xl px-1 mr-2'>{CatTemperament[0]}</h2>
                        <h2 className='font-sans font-normel text-[10px] bg-gray-300 inline-block rounded-xl px-1 mr-2'>{CatTemperament[0]}</h2>
                        <h2 className='font-sans font-normel text-[10px] bg-gray-300 inline-block rounded-xl px-1 mr-2'>{CatTemperament[0]}</h2>
                    </div>
                    <div className='flex gap-10 pt-2'>
                        <h2 className='font-sans italic text-[12px]'>Life Span</h2>
                        <h2 className='font-sans font-medium text-[12px]'>{CatData.life_span} years</h2>
                    </div>
                </div>

                <h3 className='px-4 py-2 font-sans font-normal text-[14px] text-[#7D99E2]'>
                    <a href={CatData.wikipedia_url} target='_blank'>Learn More</a>
                </h3>
            </div>
        </div>
    )
}

export default CatProfile