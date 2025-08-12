import HeroSection from './heroSection'
import FindYourPart from './find_your_part'
import WorldwideShipping from '../../components/WorldwideShipping'
import OurCategories from './OurCategories'
import SecurePayment from './SecurePayment'
import PopularBrands from './PopularBrands'
import WhatCustomersSays from './whatCustomersSays'
import CTA from '../../components/CTA'
const Home_Index = () => {
  return (
    <div>
        <HeroSection/>
        <FindYourPart />
        <WorldwideShipping />
        <OurCategories />
        <SecurePayment />
        <PopularBrands />
        <WhatCustomersSays />
        <CTA/>   
        
        {/* Add other components as needed */}
    </div>
  )
}

export default Home_Index
