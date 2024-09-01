import React, { useState, useEffect } from 'react'
import ReactApiQuery from '../utils/ReactApiQuery'
import CatProfile from '../components/CatProfile'


function CatsListing() {
  const [page, setPage] = useState(1)
  const [cat, setCat] = useState([])
  
  const url = `https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=4`
  const { data, loading, error} = ReactApiQuery(url, [page])

  useEffect(() => {
    if(page>1){
      setCat(prev => [...prev, ...data.data]);
      
    }else{
      setCat(data.data)
    }
  },[data])
  
  const gallary = document.querySelector('#cat-container')
  
  const handleScroll = ()=>{
    const scrollLeft = gallary?.scrollLeft
    const scrollWidth = gallary?.scrollWidth
    const clientWidth = gallary?.clientWidth

    if(scrollWidth < clientWidth + scrollLeft + 10 && !loading){
      setPage(prev=>prev+1)
    }
  }

 
  return (
    <div className='bg-gray-300 w-screen h-screen flex items-center justify-center bg-cover bg-[url(https://tinyurl.com/35jvdcvm)] '>
      <div className='flex gap-3 w-4/5 overflow-hidden overflow-x-auto' id='cat-container' onScroll={handleScroll}>
        {cat?.map((cat)=>(          
          <CatProfile key={cat.id} CatData={cat}/>
        ))}
      </div>
      <img src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~hENpWCNY3kb~sXvHQg7uae8G-s~6A9TGLruWNZKOzNvUzveOIGAiFJGEx8Jly2kp1ReBZPy6IZcDu1JYHsrVMvKqaUlUZKlKDp92kjG8BD8Q4nYY9Y9jB6qXSgnP-HHKnn-d8KMx0AtTjTKalRKfcXZL-5b6vfHNpbhP7g-IHOo6tOMm7xxOg5QSfWxhP7QjegE2ROXUso618crIUeaPa5naFHSgRTaa3fGO5VW7x--RvX7EO7guhQa3UrZZcKnQTJnSk4iwUr8YG3nMFBvwu4~dEVjj~hu-e0Kal8oIcbHpIbiXzFHloOyQFn8QVdjx5jgI1T9X9weXWt~csZww__"
        alt=""
        className='w-[60px] h-[62px] rounded-xl absolute right-5 top-5 '
        />
    </div>
  )
}

export default CatsListing