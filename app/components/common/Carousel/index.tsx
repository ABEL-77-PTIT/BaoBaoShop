import React, { useRef } from 'react'
import { Swiper } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { Navigation, Thumbs, A11y, EffectFade, Autoplay } from 'swiper/modules'
import { Objectable } from '~/types'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

const Carousel = React.memo((props: Objectable) => {
  const { data, className, widelayout, arrows } = props
  const swiperRef = useRef<SwiperType>()

  return (
    <div className={`relative ${className} `}>
      <Swiper
        {...props}
        modules={[Navigation, Thumbs, EffectFade, A11y, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className={`${widelayout == 'true' ? '!overflow-visible' : ''} w-full`}
      >
        {arrows ? (
          <div role="button" className="swiper-navigation slider-controls" tabIndex={0}>
            <button
              type="button"
              className="slider-prev-button js-prev-button swiper-button-prev"
              aria-label="Previous"
              tabIndex={-1}
              data-controls="prev"
              disabled={false}
            >
              <span className="">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M16.5312 10L3.46875 10"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.8125 15.3438L3.46875 10L8.8125 4.65625"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </span>
            </button>
            <button
              type="button"
              className="slider-next-button swiper-button-next"
              aria-label="Next"
              tabIndex={-1}
              data-controls="next"
            >
              <span className="">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M3.46875 10H16.5312"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.1875 4.65625L16.5312 10L11.1875 15.3438"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </span>
            </button>
          </div>
        ) : null}
        {data ? data : ''}
      </Swiper>
    </div>
  )
})

Carousel.displayName = 'Carousel'

export default Carousel
