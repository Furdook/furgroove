import { Outlet, useLocation } from 'react-router'

import Navigation from '@/components/layout/navigation.tsx'
import Footer from '@/components/layout/footer.tsx'
import { useLayoutEffect } from 'react'

export default function DefaultLayout() {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}
