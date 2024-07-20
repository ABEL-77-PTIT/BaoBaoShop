import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useMatches,
  useNavigation,
  useRouteError,
} from '@remix-run/react'
import './styles/tailwind.css'
import './styles/global.css'
import NotFoundPage from './components/NotFoundPage'
import { NotifyProps, Objectable } from './types'
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import Notify from './components/common/Notify'
import { useCallback, useEffect, useState } from 'react'
import getScrollBarWidth from './helper/getScrollBarWidth'
import ScrollToTop from './components/ScrollToTop'
import MoreActions from './components/MoreActions'

export function shouldRevalidate() {
  return false
}

export async function loader() {
  return json({ name: 'abel' })
}

export default function App() {
  const navigation = useNavigation()

  const [notify, setNotify] = useState<NotifyProps>({
    message: '',
    status: 'default',
    onClose: () => {},
  })

  useEffect(() => {
    /**
     * Get scrollbar width for disabled scrolling screen
     */
    getScrollBarWidth()

    /**
     * Scroll Top Func
     */
    const scrollFunc = () => {
      const scrollTopBtn: HTMLElement | null = document.querySelector('.scroll-to-top')

      if (!scrollTopBtn) return
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'flex'
      } else {
        scrollTopBtn.style.display = 'none'
      }
    }
    window.addEventListener('scroll', scrollFunc)
  }, [])

  const outletContext: Objectable = {
    name: 'Abel',
    notify,
    setNotify,
    navigation,
  }

  const onCloseNotify = useCallback(
    () =>
      setNotify({
        message: '',
        status: 'default',
        onClose: () => {},
      }),
    []
  )

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-primary text-secondary">
        <Layout {...outletContext}>
          <Outlet context={outletContext} />
        </Layout>

        <Notify {...notify} onClose={onCloseNotify} />

        <ScrollToTop />
        <MoreActions />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error: any = useRouteError()

  const [root] = useMatches()
  console.log('root ErrorBoundary', root)

  let page = undefined
  switch (error.status) {
    case 500:
      page = <ErrorPage error={error} />
      break

    default:
      page = <NotFoundPage error={error} />
      break
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, user-scalable=1, viewport-fit=cover"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>{page}</Layout>

        <Scripts />
      </body>
    </html>
  )
}
