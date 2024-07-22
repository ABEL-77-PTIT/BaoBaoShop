import { Link } from '@remix-run/react'
import { Image } from '@unpic/react'
import { useMemo } from 'react'
import { SwiperSlide } from 'swiper/react'
import { heroBanner, heroBannerMobile } from '~/assets/images'
import Carousel from '~/components/common/Carousel'
import Heart from '~/components/common/Icon/Heart'

const TESTIMONIALS = [
  {
    name: 'Chị Bốn',
    content: `Nấu ăn là một nghệ thuật, thì người nấu ra những món này chắc chắn phải là một người nghệ sĩ. Phải nói thật là quá ngon, tôi chưa bao giờ thấy ai có thể tạo ra được hương vị như thế này`,
    desc: 'Nhà đánh giá ẩm thực đội 13',
  },
  {
    name: 'Má An',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.`,
    desc: 'Nhà đánh giá ẩm thực đội 13',
  },
  {
    name: 'Abel',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.`,
    desc: 'Nhà đánh giá ẩm thực đến từ Sài Gòn',
  },
]

function HomePage() {
  const dataItems = TESTIMONIALS.map((item: any, index: number) => (
    <SwiperSlide key={index} className="flex justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Heart />
        <p className="text-sm max-w-[400px] leading-8 text-center">{item.content}</p>
        <h4>{item.name}</h4>
        <p>{item.desc}</p>
      </div>
    </SwiperSlide>
  ))

  const resp = useMemo(
    () => ({
      768: {
        spaceBetween: 12,
        slidesPerView: 1,
      },
    }),
    []
  )

  return (
    <section>
      <div className="section-hero-banner layout-boxed relative">
        <Link prefetch="intent" to="/menu" className="wrapper">
          <picture className="bg-gray-100 relative pt-[93.33%] md:pt-[39.27%] block">
            <source media="(max-width: 767px)" srcSet={heroBannerMobile} />
            <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={heroBanner} />
            <source media="(min-width: 1024px)" srcSet={heroBanner} />
            <Image
              className="banner-desktop object-cover absolute w-full h-full top-0"
              src={heroBanner}
              alt="Banner"
              layout="fullWidth"
              priority
              unstyled
              background="auto"
              decoding="async"
            />
          </picture>
        </Link>
        <div className="cursor-pointer absolute flex justify-center items-center min-w-[300px] lg:min-w-[450px] min-h-12 lg:min-h-[65px] left-[50%] -translate-x-[50%] bottom-[8%] border-2 border-[#FFF] rounded-full">
          <Link prefetch="intent" to="/menu">
            <p className="flex-nowrap w-full font-heading text-[22px] lg:text-[28px] font-bold text-[#FFF] py-0 lg:py-2 px-5">
              Thực đơn hôm nay có gì
            </p>
          </Link>
        </div>
      </div>

      {/* About us */}
      <div className="container bb__about pt-20 flex flex-col gap-4 lg:gap-6 items-center">
        <p className="text-lg lg:text-xl text-secondary">Một câu chuyện</p>
        <h1 className="">Về chúng tôi</h1>
        <p className="text-sm max-w-[500px] leading-8 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-[5%] mt-4">
          <div className="">
            <img src="https://anatolia.vn/wp-content/uploads/2024/04/doner.webp" alt="about us" />
          </div>
          <div className="">
            <img src="https://anatolia.vn/wp-content/uploads/2024/04/doner.webp" alt="about us" />
          </div>
          <div className="">
            <img src="https://anatolia.vn/wp-content/uploads/2024/04/doner.webp" alt="about us" />
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bb_testimonial pl-0 lg:pl-16 xxl:pl-24 xxxxl:pl-40 pt-20 flex flex-col gap-4 lg:gap-6 justify-between">
        <p className="text-lg lg:text-xl text-secondary text-center">Lời chứng thực</p>
        <h1 className="text-center">Mọi người đã nói gì</h1>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 justify-center lg:justify-between">
          <div className="w-auto px-4 lg:px-0 lg:max-w-[500px] xxl:max-w-[600px] xxxl:max-w-[700px]">
            <Carousel data={dataItems} breakpoints={resp} navigation />
          </div>
          <div className="px-4 lg:px-0 mx-auto">
            <img
              width="auto"
              src="https://anatolia.vn/wp-content/uploads/2024/04/coffee.webp"
              alt="Lời chứng thực"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
