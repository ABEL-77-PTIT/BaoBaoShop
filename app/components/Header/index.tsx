import { Link } from '@remix-run/react'
import Close from '../common/Icon/Close'
import Hamburger from '../common/Icon/Hamburger'

const MENU: { title: string; url: string }[] = [
  {
    title: 'Trang chủ',
    url: '/',
  },
  {
    title: 'Thực đơn',
    url: '/menu',
  },
  {
    title: 'Hình ảnh',
    url: '/bb-images',
  },
  {
    title: 'Liên hệ',
    url: '/contact-us',
  },
]

function Header(props: any) {
  const { showNav, setShowNav } = props

  return (
    <header
      className={`relative inline-block align-middle w-full z-[2] h-full ${showNav ? 'border-none' : 'border-b border-third'}`}
    >
      <div className="container w-full h-full text-center z-[1] my-3">
        <div className="h-full flex justify-between items-center">
          <h1 className="bb__logo text-secondary">
            <Link to="/">BaoBaopm</Link>
          </h1>
          <nav className="bb__nav__menu hidden lg:flex align-middle h-full w-auto">
            <ul className="flex justify-center items-center gap-10 flex-nowrap">
              {MENU.map((item: { title: string; url: string }, index: number) => (
                <Link key={index} to={item.url}>
                  <span
                    className={`font__heading font-bold uppercase my-5 mx-10 pb-1 ${typeof window !== 'undefined' && window.location.pathname === item.url ? 'border-b-2 border-secondary' : 'link__hover'}`}
                  >
                    {item.title}
                  </span>
                </Link>
              ))}
            </ul>
          </nav>
          <div
            role="button"
            onClick={() => setShowNav(!showNav)}
            tabIndex={0}
            onKeyDown={(e: any) => {
              if (e.keyCode == 13) {
                setShowNav(!showNav)
              }
            }}
            className="lg:hidden flex justify-center items-center p-1"
          >
            <span className="svg-element open-menu text-left">
              {!showNav ? <Hamburger /> : <Close />}
            </span>
          </div>
        </div>
      </div>
      <nav
        id="bb__nav__mobile"
        className={`bb__nav__mobile bg-primary block lg:hidden animate-fadeIn ${showNav ? 'block ' : 'hidden overflow-hidden '}`}
      >
        <ul className="h-[245px] flex flex-col justify-between items-center gap-4 flex-nowrap">
          {MENU.map((item: { title: string; url: string }, index: number) => (
            <Link key={index} to={item.url} className="">
              <div
                role="link"
                onClick={() => setShowNav(false)}
                onKeyDown={(e: any) => {
                  if (e.keyCode == 13) setShowNav(false)
                }}
                tabIndex={0}
              >
                <p
                  className={`font__heading font-bold uppercase my-5 mx-10 pb-1 ${typeof window !== 'undefined' && window.location.pathname === item.url ? 'border-b-2 border-secondary' : ''}`}
                >
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
