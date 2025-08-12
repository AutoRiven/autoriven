import { Link } from 'react-router-dom';

import body from '../../assets/images/body.png';
import filters from '../../assets/images/filter.png';
import lighting from '../../assets/images/lighting.png';
import engines from '../../assets/images/engines.png';
import cooling from '../../assets/images/cooling.png';
import electrical from '../../assets/images/electrical.png';
import brakes from '../../assets/images/brakes.png';
import steering from '../../assets/images/steering.png';
import climate from '../../assets/images/climate.png';
import drivetrain from '../../assets/images/drivetrain.png';
import fuel from '../../assets/images/fuel.png';
import fuel2 from '../../assets/images/fuel2.png';
import ventilation from '../../assets/images/ventilation.png';
import exhaust from '../../assets/images/exhaust.png';
import suspension from '../../assets/images/suspension.png';
import wiper from '../../assets/images/wiper.png';
import interior from '../../assets/images/interior1.png';
import heating from '../../assets/images/heating.png';
import performance from '../../assets/images/performance.png';
import oem from '../../assets/images/oem.png';

const categories = [
  { title: 'Body Components', image: body, slug: 'body-components' },
  { title: 'Filters and Filtration Systems', image: filters, slug: 'filters' },
  { title: 'Lighting and Signaling Devices', image: lighting, slug: 'lighting' },
  { title: 'Engines and Engine Components', image: engines, slug: 'engines' },
  { title: 'Cooling Systems', image: cooling, slug: 'cooling' },
  { title: 'Electrical and Ignition Systems', image: electrical, slug: 'electrical' },
  { title: 'Brake Systems', image: brakes, slug: 'brakes' },
  { title: 'Steering Mechanisms', image: steering, slug: 'steering' },
  { title: 'Climate Control Systems', image: climate, slug: 'climate' },
  { title: 'Drivetrain Components', image: drivetrain, slug: 'drivetrain' },
  { title: 'Fuel Delivery Systems', image: fuel, slug: 'fuel-1' },
  { title: 'Fuel Delivery Systems', image: fuel2, slug: 'fuel-2' },
  { title: 'Ventilation Systems', image: ventilation, slug: 'ventilation' },
  { title: 'Exhaust and Emission Control Systems', image: exhaust, slug: 'exhaust' },
  { title: 'Suspension and Chassis Systems', image: suspension, slug: 'suspension' },
  { title: 'Wiper and Washer Systems', image: wiper, slug: 'wiper' },
  { title: 'Interior Equipment and Trim', image: interior, slug: 'interior' },
  { title: 'Auxiliary Heating and Vehicle Refrigeration', image: heating, slug: 'heating' },
  { title: 'Performance and Mechanical Upgrades', image: performance, slug: 'performance' },
  { title: 'OEM Parts and Automotive Chemicals', image: oem, slug: 'oem' },
];

const OurCategories = () => {
  return (
    <section className="our-categories">
      <div className="w-layout-blockcontainer container w-container w-layout-blockcontainer-tb-mb">
        <h2 className="heading-2 heading-2-tb-mb">
          Our <span className="text-span">categories</span>
        </h2>

        <div className="w-layout-grid grid-3 grid-3-tb-mb">
          {categories.map((item, index) => (
            <div key={index} className="w-layout-vflex flex-block-7">
              <img
                src={item.image}
                loading="lazy"
                alt={item.title}
                className="image-5"
              />

              {/* Clickable title */}
              <Link to={`/category/${item.slug}`} className="category-link">
                <h4 className="heading-4 heading-4-tb-mb">{item.title}</h4>
              </Link>

              <div className="text-block-3 text-block-3-hide-on-mobile">
                Yes, we specialize in high-quality used OEM auto parts. Every part.
              </div>

              {/* Clickable button */}
              <Link to={`/category/${item.slug}`} className="button-2 w-button">
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCategories;
