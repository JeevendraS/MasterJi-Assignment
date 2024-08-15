import React from 'react'

function CatsListing() {
  return (
    <div className='bg-gray-300 w-screen h-screen flex items-center justify-center bg-cover bg-[url(https://s3-alpha-sig.figma.com/img/1d1e/0e8b/7e82484ac4b8cc3764a92f4a77daf7f7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ao31WNqHhl38uqgP9vwW-QMwYvcsLlzPg5in~A3PG5q8Zvq1aOI~SFT1cEMB9J7odwy5OPG9ysiJtw9A9yDlO14V1BDdPxXXIzpjCAbjEM8bFl71pB3JJgG6QCK9BnN7jaCaI-WdvkoTFXPy3~jiVp7sDHlH7u0ZztOgN6PEmjOnP9d1BILYvCe2Gv9XC0ACSr~7n-Srry5FQhFPxJMgpR5qepKBJCH~zkG1VC8GWu213XgBDuhRteJF1Ier941xYmDll5XuLp8UtNewCotBgcayUlie0oUhXjFbdw2oaFJuAnSwBHgXguPyJ4Z7GCxzwh2XptvOj40xTbXB7LDJOw__)] '>
      <div className='w-[355px] h-[603px] bg-white rounded-2xl overflow-hidden flex flex-col'>

        <div className='h-1/2 overflow-hidden'>
          <img src="https://s3-alpha-sig.figma.com/img/648e/ccbe/30d4d47b14265a42fe19fd1d06f39969?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G35bNYgkuLsKkbkw-7A~TKUGjnx-~wHAdNUKdeOz2jY85wqXdTMItBNNKduKsOTd1Pg92YoHxHCzyJ~bcpIxqpkuNDZ-B6-mvN42YjjnppYE3TaL5fFxU~y~~rl7NhytsPX81vbVf~Dz0b4L1Bj-UCkPj8kfYe0OtW5CvoKID486w0mbZpEhOWZH-4hE2Hq-5juCsZB6WT41bUGS6BuUgcqPzlktzdSZ8nNGZklbW6L33~j7ELDRhaWEmJmGQRfqLS6GuEZOOlgKT7CMmM4WvJh6xo1rK8fSS7Ryb21nw~SMFpyGqFWbAuW~AT0s4qbFgEQGbYYKy1Yy2zLlbIio5Q__" 
          alt=""
          className='w-full h-full object-fit' />
        </div>

        <div className='px-4 py-2'>
          <div className=''>
            <h2 className='font-sans font-medium text-[25px] text-black'>Siamese</h2>
            <h3 className='text-[12px]'>While Siamese cats are extremely fond of their people, they will follow you around and supervise your every move, being talkative and opinionated. They are a demanding and social cat, that do not like being left alone for long periods.</h3>
          </div>
        </div>

        <div className='px-4 py-2'>
          <div className='flex gap-10'>
            <h2 className='font-sans italic text-[12px]'>Origin</h2>
            <h2 className='font-sans font-medium text-[12px]'>Thailand</h2>
          </div>
          <div className='gap-10 pt-2'>
            <h2 className='font-sans italic text-[12px]'>Temperament</h2>
            <h2 className='font-sans font-normel text-[10px] bg-gray-300 inline-block rounded-xl px-1 mr-2'>Active</h2>
            <h2 className='font-sans font-normel text-[10px] bg-gray-300 inline-block rounded-xl px-1 mr-2'>Agile</h2>
            <h2 className='font-sans font-normel text-[10px] bg-gray-300 inline-block rounded-xl px-1 mr-2'>cleaver</h2>
          </div>
          <div className='flex gap-10 pt-2'>
            <h2 className='font-sans italic text-[12px]'>Life Span</h2>
            <h2 className='font-sans font-medium text-[12px]'>14-15 years</h2>
          </div>
        </div>

        <h3 className='px-4 py-2 font-sans font-normal text-[14px] text-[#7D99E2]'>
          Learn More
        </h3>
      </div>
      <img src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~hENpWCNY3kb~sXvHQg7uae8G-s~6A9TGLruWNZKOzNvUzveOIGAiFJGEx8Jly2kp1ReBZPy6IZcDu1JYHsrVMvKqaUlUZKlKDp92kjG8BD8Q4nYY9Y9jB6qXSgnP-HHKnn-d8KMx0AtTjTKalRKfcXZL-5b6vfHNpbhP7g-IHOo6tOMm7xxOg5QSfWxhP7QjegE2ROXUso618crIUeaPa5naFHSgRTaa3fGO5VW7x--RvX7EO7guhQa3UrZZcKnQTJnSk4iwUr8YG3nMFBvwu4~dEVjj~hu-e0Kal8oIcbHpIbiXzFHloOyQFn8QVdjx5jgI1T9X9weXWt~csZww__" 
      alt="" 
      className='w-[60px] h-[62px] rounded-xl absolute right-5 top-5 '
      srcset="" />
    </div>
  )
}

export default CatsListing