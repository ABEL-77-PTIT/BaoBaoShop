import { Link } from '@remix-run/react'
import Hamburger from '../common/Icon/hamburger'
import { useState } from 'react'
import Close from '../common/Icon/Close'

function Header() {
  const [showNav, setShowNav] = useState(true)

  return (
    <header className="border-b border-third">
      <div className="container w-full h-full text-center z-[1] my-3">
        <div className="h-full flex justify-between items-center">
          <h1 className="bb__logo text-secondary">
            <Link to="/">APT2</Link>
          </h1>
          <nav className="bb__menu hidden lg:flex relative align-middle h-full w-auto">
            <ul className="flex justify-center items-center gap-10 flex-nowrap">
              <Link to="/">
                <span className="font__heading font-bold uppercase my-5 mx-10">Trang chủ</span>
              </Link>
              <Link to="/menu">
                <span className="font__heading font-bold uppercase my-5 mx-10">Thực đơn</span>
              </Link>
              <Link to="/contact-us">
                <span className="font__heading font-bold uppercase my-5 mx-10">Liên hệ</span>
              </Link>
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
              {showNav ? <Hamburger /> : <Close />}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
