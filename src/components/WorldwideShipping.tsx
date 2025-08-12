// WorldwideShipping.jsx
import fedEx from '../assets/images/fedEx.png';
import dhl from '../assets/images/dhl.png';
import ups from '../assets/images/ups.png';
import dpd from '../assets/images/dpd.png';

const WorldwideShipping = () => {
  return (
    <section className="worldwide-shipping">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="heading-2 heading-2-tb-mb">
          Worldwide <span className="text-span">shipping</span>
        </h2>
        <div className="w-layout-grid grid-2 grid-2-tb-mb">
          <img src={fedEx} loading="lazy" alt="FedEx logo" />
          <img src={dhl} loading="lazy" alt="DHL logo" />
          <img src={ups} loading="lazy" alt="UPS logo" className='grid-2-tb-mb-img-3'/>
          <img src={dpd} loading="lazy" alt="DPD logo"  />
        </div>
      </div>
    </section>
  );
};

export default WorldwideShipping;
