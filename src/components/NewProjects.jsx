import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'


const NewProjects = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length)
      } else {
        setCardsToShow(1)
      }
    };

    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1.05) % projectsData.length)
  }
  const prevProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
  }

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-30 lg:px-12 my-20 w-full overflow-hidden' id='Homes'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Homes <span className='underline underline-offset-4 decoration-1 under font-light'>for Sale</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies - Explore Our Portfolio</p>

      {/* slider buttons */}

      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* end of slider buttons */}

      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map((project, index) => (



            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4 mb-14 shadow-2xl pl-1 pr-1 pb-1'>
              <a href="#" className='block aspect-square'>
                <img src={project.image} alt={project.title} className='w-full h-full mb-14 object-cover' />
              </a>
              {/* For Sale or sold  */}
              <div className={`${project.status === "available" ? 'bg-[#76c520]' : project.status === "sold" ? 'bg-[#ff5a3d]' : 'bg-[#808080]'} text-white text-xs uppercase absolute top-3 right-3 pr-2 pl-2 pt-1 pb-1`} >{project.Stext}</div>

              {/* location 
              <div className='mr-5 absolute top-82 right-47 flex flex-wrap-reverse items-center'>
                <button className='h-auto flex gap-1'>
                  <img src={assets.pin} className='size-3.5 block m-auto' />
                  <address className='block text-white' >{project.location}</address>
                </button>
              </div>  */}




              {/* Content */}
              < div className='pt-2 pr-1 pb-16 pl-1 ' >
                <div className='text-orange-500 mb-1 ml-1.5  '>{project.price}</div>
                <h3 className='mb-2 font-bold'>{project.title}</h3>
                <p className='h-auto mb-3 text-[#5d737e] text-sm'>{project.Description}</p>

                {/* Content-info */}
                < div className=' flex flex-row ' >
                  {/* Bedroom */}
                  <div div className='border-r-1 border-[#5d737e] mr-3 ' >
                    <strong className='text-[#5d737e]'>{project.BedNumber}</strong>
                    <img src={assets.bed} className='inline-block mb-1 ml-1.5 size-4' />
                    <span className='block mr-2 text-[#5d737e]'>Bedrooms</span>
                  </div>

                  {/* Bathrooms */}
                  <div className='mr-25'>
                    <strong className='text-[#5d737e]'>{project.BathNumber}</strong>
                    <img src={assets.toilet} className='inline-block mb-1 ml-1.5 size-4 ' />
                    <span className='block mr-2 text-[#5d737e]'>Bathrooms</span>
                  </div>

                  {/* Square Ft */}
                  <div className='absolute mt-15'>
                    <strong className='text-[#5d737e]' >{project.SquareFt}</strong>
                    <img src={assets.square} className='inline-block mb-1 ml-1.5 size-3.5' />
                    <span className='block mr-2 text-[#5d737e]'>Square Ft</span>
                  </div>
                </div>
              </div>
            </div >
          ))}
        </div >
      </div >
    </div >
  );
}

export default NewProjects