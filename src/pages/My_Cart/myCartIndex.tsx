import PageHero from '../../components/pageHeroSection'
import CartDetails from './cartDetails'
import WorldwideShipping from '../../components/WorldwideShipping'
import CTA from '../../components/CTA'

const MyCartIndex = () => {
  return (
    <div>
      <PageHero
        title="My Cart"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'My Cart', href: '/MyCart' }
        ]}
      />
      <CartDetails />
      <WorldwideShipping />
      <CTA />
    </div>
  )
}

export default MyCartIndex
