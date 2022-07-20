import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/first.jpg'
import IMG2 from '../../Assets/second.jpg'
import IMG3 from '../../Assets/third.jpg'
import IMG4 from '../../Assets/fourth.jpg'
import IMG5 from '../../Assets/fifth.jpg'
import IMG6 from '../../Assets/six.jpg'

const Data =[
  {
    id:1,
    title:'Marketing Website Visuals and Motion Design',
    image: IMG1,
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18605729-Marketing-Website-Visuals-and-Motion-Design'
  },
  {
    id:2,
    title:'Message Mobile App   ',
    image: IMG2, 
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18612399-Message-Mobile-App '
  },
  {
    id:3,
    title:'Crypto currency - App Design',
    image: IMG3,
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18606525-Crypto-currency-App-Design '
  },
  {
    id:4,
    title:'Brand guidelines',
    image: IMG4,
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18605734-Brand-guidelines '
  },
  {
    id:5,
    title:'InstaCam - Ecommerce product page',
    image: IMG5,
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18607012-InstaCam-Ecommerce-product-page '
  },
  {
    id:6,
    title:'Beauty Product Website',
    image: IMG6,
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18592601-Beauty-Product-Website '
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
         Data.map(({id,image,title,github,demo}) => {
          return (
            <article key={id} className='portfolio__item'> 
            <div className="portfolio__item-image">
                <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
            </article>
          )
        }
        )
        }
      </div>
    </section>
  )
}

export default Portfolio