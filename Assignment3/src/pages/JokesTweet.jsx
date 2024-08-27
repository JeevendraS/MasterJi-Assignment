import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faCircleCheck,
  faEllipsis,
  faComment,
  faRetweet,
  faHeart,
  faUpload
} from '@fortawesome/free-solid-svg-icons'
import ReactApiQuery from '../utils/ReactApiQuery'


function JokesTweet() {
  const [randomN, setRandomN] = useState([])

  const url = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
  const { data, loading, error } = ReactApiQuery(url)

  useEffect(()=>{
    let arr = []
    for (let i = 0; i < 3; i++) {
      const randomNum = Math.random()*10+1
      arr.push(randomNum.toPrecision(2))
    }
    setRandomN(arr)
  },[])

  return (
    <div className='bg-gray-300 w-screen h-screen flex items-center justify-center bg-[url(https://s3-alpha-sig.figma.com/img/6e29/6ae3/d5d0ebf14e82fb156e1ec74006d413d8?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Us7I4nDPdL-ESKZVxGa9FTHsWJXqHGPaiLWBgsSjyUB7JZYxbIpqcPfSuM2gtoIA03bUfozRbW7EQrlp2oOaK1seSiGxO2TnpTp-v6uPdZUkLf92DB6elCU3bEMylO2aNGUP8Bu4ijG~AAfU-F-wXmU4HUM97ITj8EqMcNaxfNmpman0-MOPceKjCRTZwKnkzdMnPfZI0~d3GDBURe-yHYnRZAj3-keWhYUBWWNV2Anpd~OS8mCfjmtadspPsdxw~EhIWcnb-a61mD7Yoh~TcN5RdZJh0wZr8whibqGsP2KVEU~YFyw8iXuyKBrcfH7gDzRROzj22bsdp8M3hPQ4nA__)] '>
      <div className='bg-black w-[524px] h-[273px] rounded-xl flex items-center justify-center'>
        <div className='w-[90%] h-[92%]'>

          <div className='flex gap-4 items-center'>
            <div>
              <FontAwesomeIcon className='my-auto text-white' icon={faArrowLeft} />
            </div>
            <h3 className='text-white font-bold text-[18px]'>Post</h3>
          </div>

          <div className='mt-4'>
            <div className='flex'>
              <div>
                <img src="https://s3-alpha-sig.figma.com/img/8f9a/a88a/f84c0b0523188e60955912d822eb8566?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TflSxcOuYvBBhd7DP5-EEvfmStahk1UXCrBXsBa2yreh5N31fFUYFU6mfPu4dW9SRJ8dQbWTekDymGUruTPembAFDp2sQB0MODjP3Ow26cCMcKrMSE1kv8JTJ56ARUW338d5b3LglPHXxa9t8Sj4GDSFcuh4q0~lQE94yPtD3~e7OlcDaKQ9DJnh7jiF5~hKbpY57zhMZjBevAKNKA7D8ndmCbgdirYz~HdH3lPCY6o0yCGCJqgD5OperbezopeI5TawIP1jgAYQ0Rc0bachZslA1cbjAfHFKpc1f0cuHBWKbjNpYdi6i1cRhX2UchW9eK00JtPMV-e79nc3-hSKGA__"
                  alt=""
                  className='w-[45px] h-[45px] rounded-full' />
              </div>
              <div className='pl-1 leading-4'>
                <h2 className='font-sans text-[14px] font-bold text-white'>Elon Musk  <FontAwesomeIcon className='text-blue-500' icon={faCircleCheck} /></h2>
                <h4 className='font-sans text-[12px] font-normal text-[#A0A0A0]'>@elonmusk</h4>
              </div>
              <div>
                <FontAwesomeIcon className='pl-80 pb-8 text-[#A0A0A0]' icon={faEllipsis} />
              </div>
            </div>
            <div>
              <p className='font-sans text-[14px] font-normal text-white leading-4'>{data?.content}</p>
            </div>
            <div>
              <p className='font-sans font-normal text-[10px] mt-4 text-[#A0A0A0]'>11:18 PM · Jul 30, 2024 · 20.5M Views</p>
            </div>
          </div>

          <div className='w-full h-10 mt-3 border-t border-b border-[#71767B] flex items-center px-3 justify-between'>
            <div className='flex gap-1'>
              <FontAwesomeIcon className='text-[#71767B] text-[15px]' icon={faComment} />
              <p className='text-[#71767B] font-sans font-normal text-[10px]'>{`${randomN[0]}k`}</p>
            </div>
            <div className='flex gap-1'>
              <FontAwesomeIcon className='text-[#71767B] text-[15px]' icon={faRetweet} />
              <p className='text-[#71767B] font-sans font-normal text-[10px]'>{`${randomN[1]}k`}</p>
            </div>
            <div className='flex gap-1'>
              <FontAwesomeIcon className='text-[#71767B] text-[15px]' icon={faHeart} />
              <p className='text-[#71767B] font-sans font-normal text-[10px]'>{`${randomN[2]}k`}</p>
            </div>
            <div className='flex gap-1'>
              <FontAwesomeIcon className='text-[#71767B] text-[12px]' icon={faUpload} />
            </div>
          </div>

          <p className='font-sans font-semibold text-[10px] text-gray-500 mt-3 text-center'>© chai aur code</p>
        </div>
      </div>
      <img src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~hENpWCNY3kb~sXvHQg7uae8G-s~6A9TGLruWNZKOzNvUzveOIGAiFJGEx8Jly2kp1ReBZPy6IZcDu1JYHsrVMvKqaUlUZKlKDp92kjG8BD8Q4nYY9Y9jB6qXSgnP-HHKnn-d8KMx0AtTjTKalRKfcXZL-5b6vfHNpbhP7g-IHOo6tOMm7xxOg5QSfWxhP7QjegE2ROXUso618crIUeaPa5naFHSgRTaa3fGO5VW7x--RvX7EO7guhQa3UrZZcKnQTJnSk4iwUr8YG3nMFBvwu4~dEVjj~hu-e0Kal8oIcbHpIbiXzFHloOyQFn8QVdjx5jgI1T9X9weXWt~csZww__"
        alt=""
        className='w-[60px] h-[62px] rounded-xl absolute right-5 top-5 ' />
    </div>
  )
}

export default JokesTweet