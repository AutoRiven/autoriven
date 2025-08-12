import PageHero from '../../components/pageHeroSection'
import ProductSection from './productSection'
import Related_products from './related_products'
import WorldwideShipping from '../../components/WorldwideShipping'
import CTA from '../../components/CTA'
import ProductsDetail from './products_Detail'
import ContactUs from './ContactUs'

const ShopDetail_Index = () => {
  return (
    <div className='shopedetails'>
     <PageHero
      title="Shop Detail"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: 'Product Categories', href: '/shop/categories' },
        { label: 'Engines and Engine Components', href: '/shop/categories/engines' },
      ]}
    />
    <ProductSection/>
    <ProductsDetail/>
    <ContactUs/>
    <Related_products/>
    <WorldwideShipping/>
    <CTA/>
    
    </div>
  )
}

export default ShopDetail_Index