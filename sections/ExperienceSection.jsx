'use client';

import React from 'react';
import TitleHeader from '../src/components/TitleHeader';
import { expCards } from '../src/constants';
import GlowCard from '../src/components/HeroModels/GlowCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(() => {

    gsap.utils.toArray('.timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });


    gsap.to('.timeline', {
      scaleY: 0,
      transformOrigin: 'bottom bottom',
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        scrub: true,
      },
    });

    gsap.utils.toArray('.expText').forEach((text) => {
        gsap.from(text, {
            opacity:0,
            xPercent: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: text,
                start: "top 60%",
            }
        })
    }, "<")
  }, []);

  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader title="Professional Work Experience" sub="My career Overview" />
        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>
            {expCards.map((card, index) => (
              <div key={card.title} className='exp-card-wrapper flex flex-col xl:flex-row gap-8'>
                <div className='xl:w-2/6'>
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt={card.title} className="w-full h-auto object-contain" />
                    </div>
                  </GlowCard>
                </div>
                <div className='xl:w-4/6'>
                  <div className='flex items-start'>
                    <div className='timeline-wrapper'>
                      <div className='timeline' />
                      <div className='gradient-line w-1 h-full' />
                    </div>
                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                      <div className='timeline-logo'>
                        <img src={card.logoPath} alt={`${card.title} logo`} />
                      </div>
                      <div>
                        <h1 className='font-semibold text-3xl'>{card.title}</h1>
                        <p className="text-lg text-white font-medium tracking-tight">{card.companyTitle}</p>
                        <p className='my-5 text-white-50'>{card.date}</p>
                        <p className='text-[#839cb5] italic'>Responsibilities</p>
                        <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                          {card.responsibilities.map((responsibility, i) => (
                            <li key={i} className='text-lg'>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
