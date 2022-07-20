import React from 'react'
import './testimonials.css'
import Av1 from '../../Assets/avtar1.jpg'
import Av2 from '../../Assets/avtar2.jpg'
import Av3 from '../../Assets/avtar3.jpg'
import Av4 from '../../Assets/avtar4.png'

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";




const data = [
  {
    avtar:Av1,
    name: 'Allien Solly',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque aliquam assumenda quisquam quis cupiditate, numquam dolores quas mollitia, amet deleniti laudantium neque iste accusamus tenetur, commodi facere voluptatem ipsum?'
  },
  {
    avtar:Av2,
    name: 'Demir Borison',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Tenetur cum eveniet debitis reprehenderit amet aliquid eligendi exercitationem ducimus.Incidunt saepe earum unde explicabo iure expedita blanditiis praesentium? Dolore, dolor in.'
  },
  {
    avtar:Av3,
    name: 'Justin Babe',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vero delectus iure tenetur nisi iusto excepturi. Optio, tempore, sunt consectetur a praesentium laudantium id, excepturi quod alias reprehenderit recusandae accusamus.'
  },
  {
    avtar:Av4,
    name: 'Alan Walker',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci modi possimus ipsa magni quod nulla a earum dolorum natus delectus, voluptatibus necessitatibus minus voluptates repudiandae laboriosam similique mollitia minima.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"  pagination={true} modules={[Pagination]}>
       {
        data.map(({avtar,name,review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonials">
            <div className="clients__avtar">
              <img src={avtar} />
            </div>
            <h5 className='clients__name'>{name}</h5>
            <small className="clients__review">{review}</small>
          </SwiperSlide>
          )
        } )
       } 
      </Swiper>
    </section>
  )
}

export default Testimonials