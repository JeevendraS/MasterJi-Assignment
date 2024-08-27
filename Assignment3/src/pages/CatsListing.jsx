import React, { useState, useEffect } from 'react'
import ReactApiQuery from '../utils/ReactApiQuery'
import CatProfile from '../components/CatProfile'


function CatsListing() {
  const [page, setPage] = useState(1)
  const [cat, setCat] = useState([])
  
  const url = `https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=4`
  const { data, loading, error} = ReactApiQuery(url, [page])

  const newData = {
    "weight": {
      "imperial": "8 - 15",
      "metric": "4 - 7"
    },
    "id": 5,
    "name": "American Shorthair",
    "cfa_url": "http://cfa.org/Breeds/BreedsAB/AmericanShorthair.aspx",
    "vetstreet_url": "http://www.vetstreet.com/cats/american-shorthair",
    "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/american-shorthair",
    "temperament": "Active, Curious, Easy Going, Playful, Calm",
    "origin": "United States",
    "country_codes": "US",
    "country_code": "US",
    "description": "The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.",
    "life_span": "15 - 17",
    "indoor": 0,
    "lap": 1,
    "alt_names": "Domestic Shorthair",
    "adaptability": 5,
    "affection_level": 5,
    "child_friendly": 4,
    "dog_friendly": 5,
    "energy_level": 3,
    "grooming": 1,
    "health_issues": 3,
    "intelligence": 3,
    "shedding_level": 3,
    "social_needs": 4,
    "stranger_friendly": 3,
    "vocalisation": 3,
    "experimental": 0,
    "hairless": 0,
    "natural": 1,
    "rare": 0,
    "rex": 0,
    "suppressed_tail": 0,
    "short_legs": 0,
    "wikipedia_url": "https://en.wikipedia.org/wiki/American_Shorthair",
    "hypoallergenic": 0,
    "image": "https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg"
  }

  const handleClick = ()=>{
    setPage(prev=> prev+1)
    console.log(data);
    
  }
  



  return (
    <div className='bg-gray-300 w-screen h-screen flex items-center justify-center bg-cover bg-[url(https://s3-alpha-sig.figma.com/img/1d1e/0e8b/7e82484ac4b8cc3764a92f4a77daf7f7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ao31WNqHhl38uqgP9vwW-QMwYvcsLlzPg5in~A3PG5q8Zvq1aOI~SFT1cEMB9J7odwy5OPG9ysiJtw9A9yDlO14V1BDdPxXXIzpjCAbjEM8bFl71pB3JJgG6QCK9BnN7jaCaI-WdvkoTFXPy3~jiVp7sDHlH7u0ZztOgN6PEmjOnP9d1BILYvCe2Gv9XC0ACSr~7n-Srry5FQhFPxJMgpR5qepKBJCH~zkG1VC8GWu213XgBDuhRteJF1Ier941xYmDll5XuLp8UtNewCotBgcayUlie0oUhXjFbdw2oaFJuAnSwBHgXguPyJ4Z7GCxzwh2XptvOj40xTbXB7LDJOw__)] '>
      <div className='flex gap-3 w-4/5 overflow-hidden overflow-x-auto' id='cat-container' onScroll={handleScroll} >
        {cat?.data?.map((cat)=>(          
          <CatProfile key={cat.id} CatData={cat}/>
        ))}
      </div>
      <img src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~hENpWCNY3kb~sXvHQg7uae8G-s~6A9TGLruWNZKOzNvUzveOIGAiFJGEx8Jly2kp1ReBZPy6IZcDu1JYHsrVMvKqaUlUZKlKDp92kjG8BD8Q4nYY9Y9jB6qXSgnP-HHKnn-d8KMx0AtTjTKalRKfcXZL-5b6vfHNpbhP7g-IHOo6tOMm7xxOg5QSfWxhP7QjegE2ROXUso618crIUeaPa5naFHSgRTaa3fGO5VW7x--RvX7EO7guhQa3UrZZcKnQTJnSk4iwUr8YG3nMFBvwu4~dEVjj~hu-e0Kal8oIcbHpIbiXzFHloOyQFn8QVdjx5jgI1T9X9weXWt~csZww__"
        alt=""
        className='w-[60px] h-[62px] rounded-xl absolute right-5 top-5 '
        onClick={handleClick} />
    </div>
  )
}

export default CatsListing