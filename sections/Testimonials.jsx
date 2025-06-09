import React from 'react'
import TitleHeader from '../src/components/TitleHeader'
import { testimonials } from '../src/constants'
import { GlowCard } from '../src/components/HeroModels/GlowCard';

const Testimonials = () => {
  return (
    <section id="testimonials" className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title="What People say about me" sub="Client FeedBack Highlights"/>
        <div className='lg:columns-3 md:columns-2 columns-1 mt-16'> 
          {testimonials.map(( { imgPath, name, mentions, review }) => (
            <GlowCard card= { { review }}>
              <div className='flex items-center gap-3'>
                <img src={imgPath} alt={name}/>
              </div>
              <div>
                <p className='font-bold'> {name} </p>
                <p className='text-white-50'> {mentions} </p>
              </div>
            </GlowCard>

          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
