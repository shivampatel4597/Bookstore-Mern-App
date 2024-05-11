import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json'
import Card from './Card';
const Freebook = () => {

    const filterData = list.filter((data)=> data.category === 'free')
    console.log(filterData)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
     <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
        
        <div>
        <h1 className=' text-2xl font-bold mb-2'>Free offered courses</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quos perspiciatis non aperiam odio. Veritatis repellat, exercitationem expedita reprehenderit autem sunt neque unde inventore nulla vitae perspiciatis est quisquam quis.</p>
        </div>
       <div className=''>
       <Slider {...settings} >
       {filterData.map((item)=>{
     return   <Card item={item} key={item.id}/>
})}
      </Slider>
       </div>
      
     
     
      
      </div>
      
    </>
   
  )
}

export default Freebook
