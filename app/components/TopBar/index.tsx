import { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from '@remix-run/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css/free-mode'

const TOP_BAR = [
  { title: 'Tiệm nước nhà Bảo Bảo' },
  { title: 'Tiệm nước nhà làm' },
  { title: 'Khai trương ngày 21/06/2024 âm lịch' },
  { title: 'Địa chỉ là 142 Trần Phú - TT Phù Mỹ' },
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
        <div className="h-full flex justify-center items-center m-auto">
          <p className="text-secondary flex flex-row flex-nowrap py-1 text-lg lg:text-xl">
            {item.title}
          </p>
        </div>
      </Link>
    </SwiperSlide>
  ))

  return (
    <div className="border-b border-third">
      <div className="container font-bold text-base py-1 lg:uppercase lg:text-sm lg:py-1.5">
        <Swiper
          modules={[Autoplay, FreeMode]}
          navigation
          loop={true}
          freeMode={true}
          breakpoints={resp}
          autoplay={{ delay: 2000 }}
        >
          {dataItems}
        </Swiper>
      </div>
    </div>
  )
}

export default TopBar
