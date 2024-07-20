import { useMemo } from 'react'
import Carousel from '../common/Carousel'
import { SwiperSlide } from 'swiper/react'
import { Link } from '@remix-run/react'

const TOP_BAR = [
  { title: 'Tiệm nước nhà Bảo Bảo' },
  { title: 'Tiệm nước nhà làm' },
  { title: 'Khai trương ngày 30/07/2024' },
  { title: 'Địa chỉ là ...' },
]

function TopBar() {
  const resp = useMemo(
    () => ({
      0: {
        spaceBetween: 12,
        slidesPerView: 1,
      },
    }),
    []
  )

  const dataItems = TOP_BAR.map((item: { title: string }, index: number) => (
    <SwiperSlide key={index} className="flex justify-center items-center">
      <Link to="/contact-us">
        <div className="h-full flex justify-center items-center w-[80%] m-auto">
          <h2 className="text-secondary flex flex-row">{item.title}</h2>
        </div>
      </Link>
    </SwiperSlide>
  ))

  return (
    <div className="border-b border-third">
      <div className="container font-bold text-base py-1 lg:uppercase lg:text-sm lg:py-1.5">
        <Carousel
          data={dataItems}
          breakpoints={resp}
          onAutoplayStart={true}
          navigation
          autoplay={{ delay: 2000 }}
          className="h-auto"
        />
      </div>
    </div>
  )
}

export default TopBar
