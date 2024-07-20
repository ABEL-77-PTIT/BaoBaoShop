import Footer from './Footer'
import Header from './Header'
import TopBar from './TopBar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* welcome */}
      <section className="top-bar sticky top-0 bg-primary opacity-70">
        <TopBar />
      </section>

      <section>
        <Header />
      </section>

      <section>{children}</section>

      <div className="h-[1000px]">content</div>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Layout
