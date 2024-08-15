import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faRotateRight, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

function UserProfile() {
  return (
    <div className='bg-gray-300 w-screen h-screen flex items-center justify-center '>
      <div className='bg-white w-[28vw] h-[95vh] rounded-[15px] absolute flex items-center justify-center'>
        <div  className='w-[97%] h-[98%] bg-[#B6B3F3] rounded-[10px] relative flex items-center justify-center'>
          <div className=' w-[95%] h-[97%]'>
            <div className=' h-[5%] text-black flex flex-row justify-between mx-2 '>
              <FontAwesomeIcon className='my-auto' icon={faArrowLeft} />
              <h3 className='my-auto font-serif font-normal text-[16px]'>Profile Overview</h3>
              <FontAwesomeIcon className='my-auto' icon={faRotateRight} />
            </div>
            <div className='w-full h-[35vh] flex items-center justify-center flex-col'>
              <p className='text-[8px] text-white rounded-md right-[8rem] top-[4rem] absolute h-3 w-5 text-center bg-black'>Mr</p>
              <img src="https://s3-alpha-sig.figma.com/img/0584/17a5/4f205aba496f239ced6e754fd1ca71f7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJCvuJ9S3S14Dlwj69182PAUTeL0aK8U8Aqf~LznENvZSu4HgEJf5rRF9GWOnLsy2MO0Q7Nm8H86sozUaAzn3kjdOvta5yv0vrqhnlHFsHjjwa20T9YSMNWFliw~3cwT9GyfUmuQFec~zQR-pcGv5qXPyKg-vHA6n8qiJWjs0HrGC6UK1nyx3p9oWKP73-jNvpWV4nnav8GxnP2d~EQTXIGLUUBJUzyewMSLYKlV~JqeVN2jA17vwASfYEVUODpSZaG54YCBqabHv0xL9-HUKg8iYDzubcSd44oY6baeBgWAOOQ7sH3-W~v4RdPeLBdKC1p0Ugl4APwt47g66My9ig__" 
              alt="User Photo" 
              className='rounded-full w-[100px] h-[100px] mb-5' />
              <h1 className='text-[24px] font-serif font-normal tracking-normal'>Tom Garqa</h1>
              <h4 className='text-[12px] font-sans'>beautifullcoel355</h4>
            </div>
            <div className='w-full flex items-center gap-2 justify-center h-10 border-gray-400 border-t border-b'>
              <div>
              <FontAwesomeIcon  icon={faLocationDot} />
              </div>
            
            <FontAwesomeIcon icon={faPhone} />
            </div>
            <div></div>
          </div>
        </div >
      </div>
    </div>
  )
}

export default UserProfile