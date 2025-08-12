import { Link } from 'react-router-dom';

import toyota from '../../assets/images/toyota.svg';
import Volkswagen from '../../assets/images/Volkswagen.svg';
import Ford from '../../assets/images/Ford.svg';
import Honda from '../../assets/images/Honda.svg';
import Chevrolet from '../../assets/images/Chevrolet.svg';
import BMW from '../../assets/images/BMW.svg';
import Kia from '../../assets/images/Kia.svg';
import Nissan from '../../assets/images/Nissan.svg';
import MercedesBenz from '../../assets/images/MercedesBenz.svg';
import Hyundai from '../../assets/images/Hyundai.svg';
import audi from '../../assets/images/Audi.svg';
import tesla from '../../assets/images/Tesla.svg';
import Peugeo from '../../assets/images/Peugeot.svg';
import Renault from '../../assets/images/Renault.svg';
import Mazda from '../../assets/images/Mazda.svg';
import Subaru from '../../assets/images/Subaru.svg';
import Lexus from '../../assets/images/Lexus.svg';
import Volvo from '../../assets/images/Volvo.svg';
import Fiat from '../../assets/images/Fiat.png';
import Skoda from '../../assets/images/Skoda.svg';

const brands = [
  { name: 'Toyota', logo: toyota },
  { name: 'Volkswagen', logo: Volkswagen },
  { name: 'Ford', logo: Ford },
  { name: 'Honda', logo: Honda },
  { name: 'Hyundai', logo: Hyundai },
  { name: 'Chevrolet', logo: Chevrolet },
  { name: 'BMW', logo: BMW },
  { name: 'Kia', logo: Kia },
  { name: 'Mercedes-Benz', logo: MercedesBenz },
  { name: 'Nissan', logo: Nissan },
  { name: 'Audi', logo: audi },
  { name: 'Tesla', logo: tesla },
  { name: 'Peugeot', logo: Peugeo },
  { name: 'Renault', logo: Renault },
  { name: 'Mazda', logo: Mazda },
  { name: 'Subaru', logo: Subaru },
  { name: 'Lexus', logo: Lexus },
  { name: 'Volvo', logo: Volvo },
  { name: 'Fiat', logo: Fiat },
  { name: 'Skoda', logo: Skoda },
];

const PopularBrands = () => {
  return (
    <section className="popular-brands">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="heading-2 heading-2-tb-mb">
          Popular <span className="text-span">brands</span>
        </h2>

        <div className="w-layout-grid grid-3 grid-3-tb-mb-1">
          {brands.map((brand, index) => (
            <Link
              key={index}
              to={`/listing?string=${brand.name.toLowerCase()}`}
              className="w-layout-vflex flex-block-7 brand_block brand_block-tb-mb"
            >
              <img
                src={brand.logo}
                loading="lazy"
                alt={`${brand.name} logo`}
                className="brand_images brand_images-tb-mb"
              />
              <div className="text-block-4 text-block-4-tb-mb">
                {brand.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
