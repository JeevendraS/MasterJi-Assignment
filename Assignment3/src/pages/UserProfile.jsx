import React from 'react'
import UserFooter from '../components/UserFooter'
import UserHeader from '../components/UserHeader'
import UserInfo from '../components/UserInfo'
import ReactApiQuery from '../utils/ReactApiQuery'
import UserInfo2 from '../components/UserInfo2'


function UserProfile() {
  const url = "https://api.freeapi.app/api/v1/public/randomusers/user/random"

  const { data, loading, error } = ReactApiQuery(url)

  return  (
    <div className="bg-gray-300 h-fit flex items-center justify-center">
      <div className="bg-white md:w-[28vw] lg:w-[35vw] xl:w-[40vw]  rounded-lg absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center">
        <div className="w-full h-full bg-[#B6B3F3] rounded-lg relative flex items-center justify-center">
          <div className="w-full h-full p-2">
            <UserHeader />
            {loading && (
              <div className="w-full h-[69vh] flex items-center justify-center flex-col">
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                  <div className="bar1 animate-pulse bg-gray-500 m-2 w-4 h-20 rounded-full"></div>
                  <div className="bar2 animate-pulse bg-gray-500 m-2 w-4 h-20 rounded-full"></div>
                  <div className="bar3 animate-pulse bg-gray-500 m-2 w-4 h-20 rounded-full"></div>
                </div>
              </div>
            )}
            {!loading && (
              <div>
                <UserInfo user={{data,loading,error}}/>
                <UserInfo2 userData={{data,loading,error}} />
              </div>
            )}
            <UserFooter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile


































// import React, { useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft, faRotateRight, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

// function UserProfile() {
//   const [user, setUser] = React.useState({})
//   const [userDob, setUserDob] = React.useState({})

//   const randomUser = async()=> {
//     await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random")
//                         .then(res => res.json())
//                         .then(data=> {
//                           setUser(data)
//                           console.log(data.data.name.title)
//                           const dob = data.data.dob.date
//                           const dateObj = new Date(dob)
//                           const options = {day: 'numeric', month: 'long', year: 'numeric'}
//                           const formatDate = dateObj.toLocaleString('en-US',options)
//                           setUserDob({dateOfB: formatDate})
//                         })

//   }
//   const redirectToCAC = ()=>{
//     window.open("https://chaicode.com", "_blank")
//   }
//   const handleClick = ()=>{
//     randomUser()
//   }
//   useEffect(()=>{
//     randomUser()
//   },[])

//   console.log(userDob)


//   if(user.data) return (
//     <div className='bg-gray-300 w-screen h-screen flex items-center justify-center '>
//       <div className='bg-white w-[28vw] h-[95vh] rounded-[15px] absolute flex items-center justify-center'>
//         <div  className='w-[97%] h-[98%] bg-[#B6B3F3] rounded-[10px] relative flex items-center justify-center'>
//           <div className=' w-[95%] h-[97%]'>
//             <div className=' h-[5%] text-black flex flex-row justify-between mx-2 '>
//               <FontAwesomeIcon className='my-auto active:translate-x-1' icon={faArrowLeft} />
//               <h3 className='my-auto font-serif font-normal text-[16px]'>Profile Overview</h3>
//               <FontAwesomeIcon className='my-auto active:rotate-45' onClick={handleClick} icon={faRotateRight} />
//             </div>
//             <div className='w-full h-[35vh] flex items-center justify-center flex-col'>
//               <p className='text-[8px] text-white rounded-md right-[8rem] top-[4rem] absolute h-3 w-5 text-center bg-black'>{user.data.name.title}</p>
//               <img src={`${user.data.picture.large}`}
//               alt="User Photo"
//               className='rounded-full w-[100px] h-[100px] mb-5' />
//               <h1 className='text-[24px] font-serif font-normal tracking-normal'>{user.data.name.first+" "+user.data.name.last}</h1>
//               <h4 className='text-[12px] font-sans'>{user.data.login.username}</h4>
//             </div>
//             <div className='w-full flex items-center gap-2 justify-center h-10 border-gray-400 border-t border-b'>
//               <div className='w-1/2 flex items-center gap-1 justify-center pl-24'>
//                 <div className='bg-black w-6 rounded-full flex justify-center items-center h-6'><FontAwesomeIcon className='text-white text-[13px]'  icon={faLocationDot} /></div>
//                 <h4 className='text-[9px] font-sans'>location</h4>
//               </div>
//               <div className='w-1/2 flex items-center gap-1 justify-center pr-20'>
//                 <div className='bg-black w-6 rounded-full flex justify-center items-center h-6'><FontAwesomeIcon className='text-white text-[13px]' icon={faPhone} /></div>
//                 <h4 className='text-[9px] font-sans'>Call me</h4>
//               </div>
//             </div>
//             <div className='w-full flex gap-10 mt-4'>
//               <div>
//                 <div>
//                   <h4 className='font-sans font-normal text-[10px]'>City</h4>
//                   <h2 className='font-serif text-[20px] font-normal'>{user.data.location.city}</h2>
//                 </div>
//                 <div>
//                   <h4 className='font-sans font-normal text-[10px]'>Date of birth</h4>
//                   <h2 className='font-serif text-[20px] font-normal'>{userDob.dateOfB}</h2>
//                 </div>
//                 <div>
//                   <h4 className='font-sans font-normal text-[10px]'>Time zone</h4>
//                   <h2 className='font-serif text-[20px] font-normal'>{`${user.data.location.timezone.offset}`}</h2>
//                 </div>
//               </div>
//               <div>
//                 <div>
//                   <h4 className='font-sans font-normal text-[10px]'>Nationality</h4>
//                   <h2 className='font-serif text-[20px] font-normal'>{user.data.location.country}</h2>
//                 </div>
//                 <div>
//                   <h4 className='font-sans font-normal text-[10px]'>Phone No.</h4>
//                   <h2 className='font-serif text-[20px] font-normal '>{user.data.phone}</h2>
//                 </div>
//                 <div>
//                   <h4 className='font-sans font-normal text-[10px]'>Regestered since</h4>
//                   <h2 className='font-serif text-[20px] font-normal'>11 november, 2012</h2>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className=' flex justify-end items-end mt-5 gap-20'>
//                 <p className='text-white font-semibold font-serif text-[8px]'>	&#169; chai aur code</p>
//                 <img src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~hENpWCNY3kb~sXvHQg7uae8G-s~6A9TGLruWNZKOzNvUzveOIGAiFJGEx8Jly2kp1ReBZPy6IZcDu1JYHsrVMvKqaUlUZKlKDp92kjG8BD8Q4nYY9Y9jB6qXSgnP-HHKnn-d8KMx0AtTjTKalRKfcXZL-5b6vfHNpbhP7g-IHOo6tOMm7xxOg5QSfWxhP7QjegE2ROXUso618crIUeaPa5naFHSgRTaa3fGO5VW7x--RvX7EO7guhQa3UrZZcKnQTJnSk4iwUr8YG3nMFBvwu4~dEVjj~hu-e0Kal8oIcbHpIbiXzFHloOyQFn8QVdjx5jgI1T9X9weXWt~csZww__"
//                 alt=""
//                 onClick={redirectToCAC}
//                 className='w-[60px] h-[62px] mr-2 rounded-xl' />
//               </div>
//             </div>
//           </div>
//         </div >
//       </div>
//     </div>
//   )
// }

// export default UserProfile