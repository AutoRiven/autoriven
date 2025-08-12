import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

const PageHero = ({ title, breadcrumbs }: PageHeroProps) => {
  return (
    <section className="page-section-hero">
      <div className="w-layout-vflex flex-block-11">
        <h1 className="heading">{title}</h1>
        <div className="w-layout-hflex flex-block-12">
          {breadcrumbs.map((item, index) => (
            <span key={index}>
              <Link to={item.href} className="link-2">
                {item.label}
              </Link>
              {index < breadcrumbs.length - 1 && <span> / </span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
