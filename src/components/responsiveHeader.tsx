import { useEffect, useState } from 'react'
import HeaderMobile from './header_mobile'
import Header from './header'


const ResponsiveHeader = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    // Function to check window width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 991)
    }

    checkScreenSize() // Run on first load

    // Attach resize listener
    window.addEventListener('resize', checkScreenSize)

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  return isMobile ? <HeaderMobile /> : <Header />
}

export default ResponsiveHeader
