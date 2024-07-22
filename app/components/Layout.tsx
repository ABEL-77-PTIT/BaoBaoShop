import Footer from './Footer'
import Header from './Header'
import TopBar from './TopBar'

function Layout(props: any) {
  const { children, showNav } = props
  return (
    <div className="wrapper relative">
      {/* welcome */}
      <section className="top-bar sticky top-0 left-0 z-10 bg-primary opacity-80">
        <TopBar />
      </section>

      <section>
        <Header {...props} />
      </section>

      <section className={`main__content ${showNav ? '-mt-[245px]' : 'mt-0'} lg:mt-0`}>
        {children}
      </section>

      <div className="h-[1000px]">content</div>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Layout
