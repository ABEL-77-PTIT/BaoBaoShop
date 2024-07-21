import { Link } from '@remix-run/react'
import { Image } from '@unpic/react'
import { heroBanner, heroBannerMobile } from '~/assets/images'

function HomePage() {
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
        <div className="absolute flex justify-center items-center min-w-[300px] lg:min-w-[450px] min-h-12 lg:min-h-[65px] left-[50%] -translate-x-[50%] bottom-[8%] border-2 border-[#FFF] rounded-full">
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
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-5 mt-4">
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
      <div className="bb_testimonial pt-20 flex flex-col gap-4 lg:gap-6 items-center">
        testimonial
      </div>
    </section>
  )
}

export default HomePage
