import Footer from './Footer'
import Header from './Header'
import TopBar from './TopBar'

function Layout(props: any) {
  const { children, showNav } = props
  return (
    <div className="relative">
      {/* welcome */}
      <section className="top-bar sticky top-0 bg-primary opacity-80">
        <TopBar />
      </section>

      <section>
        <Header {...props} />
      </section>

      <section className={`${showNav ? '-mt-40' : 'mt-0'} lg:mt-0`}>{children}</section>

      <div className="h-[1000px]">content</div>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Layout
