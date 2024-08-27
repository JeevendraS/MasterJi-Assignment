import React from 'react'

function UserInfo({user}) {
    const {data, loading} = user
    console.log(data)
    return !loading?(
        <div className="w-full h-[30vh] flex items-center relative justify-center flex-col">
          <p className="text-[8px] text-white rounded-md right-[12rem] top-[0.5rem] absolute h-3 min-w-5 text-center bg-black">{data?.name?.title}</p>
          <img src={`${data?.picture?.large}`} alt="Image" className="rounded-full w-[100px] h-[100px]" />
          <h1 className="text-[24px] font-serif font-normal tracking-normal">{data?.name?.first + ' ' + data?.name?.last}</h1>
          <h4 className="text-[12px] font-sans">{data?.login?.username}</h4>
        </div>
      ):null;
}

export default UserInfo