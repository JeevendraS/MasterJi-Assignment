import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


function UserInfo2({userData}) {

      const {data, loading} = userData
      const [dates, setDates] = useState({})
    
      function RedirectToMap(){
        const googleMapsUrl = `https://www.google.com/maps/?q=${data?.location?.coordinates.latitude},${data?.location?.coordinates.longitude}`;
        window.open(googleMapsUrl, '_blank');
      }
      useEffect(()=>{
        const dob = new Date(data?.dob?.date)
        const registerDate = new Date(data?.registered?.date)

        const formateDob = dob.toLocaleDateString("In", {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      })
        const formateRegisterDate = registerDate.toLocaleDateString("In", {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      })
      setDates({formateDob, formateRegisterDate})

      },[])

      return (
        <div className="w-full flex gap-4 flex-col md:justify-center">
          <div className='w-full'>
            <div className="w-full flex items-center gap-2 justify-center h-10 border-gray-400 border-t border-b">
                <div className="w-1/2 flex items-center gap-1 justify-center pl-24 md:pl-0">
                <div className="bg-black w-6 rounded-full flex justify-center items-center h-6">
                    <FontAwesomeIcon className="text-white text-[13px]" icon={faLocationDot}
                    onClick={RedirectToMap}/>
                </div>
                <h4 className="text-[9px] font-sans">location</h4>
                </div>
                <div className="w-1/2 flex items-center gap-1 justify-center pr-20 md:pr-0">
                <div className="bg-black w-6 rounded-full flex justify-center items-center h-6">
                    <FontAwesomeIcon className="text-white text-[13px]" icon={faPhone} />
                </div>
                <h4 className="text-[9px] font-sans">Call me</h4>
                </div>
            </div>
          </div>
          <div className='w-full flex'>
            <div className="w-full md:w-1/2 flex flex-col gap-4 mt-4 md:mt-0">
                <div className="flex flex-col gap-2">
                <h4 className="font-sans font-normal text-[10px]">City</h4>
                <h2 className="font-serif text-[20px] font-normal">{data?.location?.city}</h2>
                </div>
                <div className="flex flex-col gap-2">
                <h4 className="font-sans font-normal text-[10px]">Date of birth</h4>
                <h2 className="font-serif text-[20px] font-normal">{dates.formateDob}</h2>
                </div>
                <div className="flex flex-col gap-2">
                <h4 className="font-sans font-normal text-[10px]">Time zone</h4>
                <h2 className="font-serif text-[20px] font-normal">{data?.location?.timezone.offset},{data?.location?.timezone.description}</h2>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4 mt-4 md:mt-0">
                <div className="flex flex-col gap-2">
                <h4 className="font-sans font-normal text-[10px]">Nationality</h4>
                <h2 className="font-serif text-[20px] font-normal">{data?.location?.country}</h2>
                </div>
                <div className="flex flex-col gap-2">
                <h4 className="font-sans font-normal text-[10px]">Phone No.</h4>
                <h2 className="font-serif text-[20px] font-normal">{data?.phone}</h2>
                </div>
                <div className="flex flex-col gap-2">
                <h4 className="font-sans font-normal text-[10px]">Regestered since</h4>
                <h2 className="font-serif text-[20px] font-normal">{dates.formateRegisterDate}</h2>
                </div>
            </div>
          </div>
        </div>
      );
    };
    

export default UserInfo2