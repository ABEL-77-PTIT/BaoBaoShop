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
        <div className="absolute flex justify-center items-center w-fit min-h-[65px] left-[50%] -translate-x-[50%] bottom-[8%] border-2 border-[#FFF] rounded-full">
          <Link prefetch="intent" to="/menu">
            <span className="flex-nowrap font-heading text-[22px] font-bold text-[#FFF] py-2 px-5">
              Thực đơn hôm nay có gì
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomePage
