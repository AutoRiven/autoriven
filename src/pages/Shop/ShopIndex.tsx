import { useState, useEffect, useMemo } from 'react';
import productImage from '../../assets/images/products.png';
import star from '../../assets/icons/star.svg';
import wishlist from '../../assets/icons/wishlist.svg';
import search from '../../assets/icons/search.svg';
import square from '../../assets/icons/4square.svg';
import arrow_down from '../../assets/icons/arrow_down.svg';
import PageHero from '../../components/pageHeroSection';
import WorldwideShipping from '../../components/WorldwideShipping';
import CTA from '../../components/CTA';
import { Link } from 'react-router-dom';
import close from '../../assets/icons/close.svg';

// Added 'category' and 'tags' to each product for filtering
// Corrected 'isOut0fStock' to 'isOutOfStock'
const allProductsData = [
    { id: 1, name: 'Honda K24A Hood', price: 27.45, rating: 97, condition: 'Used', position: 'Front', category: 'Hood (Bonnet)', tags: ['Honda', 'Body'], quantity: 1, isOutOfStock:false },
    { id: 2, name: 'Chevy V8 Piston Set', price: 19.00, rating: 92, condition: 'Refurbished', position: 'The set', category: 'Pistons', tags: ['Engine', 'Chevy'], quantity: 1, isOutOfStock:true  },
    { id: 3, name: 'Universal Radiator', price: 15.20, rating: 95, condition: 'Used', position: 'Center', category: 'Radiator', tags: ['Cooling', 'Universal'], quantity: 1, isOutOfStock:false },
    { id: 4, name: 'Performance Turbocharger', price: 20.55, rating: 99, condition: 'Refurbished', position: 'Front', category: 'Engine Parts', tags: ['Engine', 'Turbocharger'], quantity: 1, isOutOfStock:true  },
    { id: 5, name: 'Sedan Left Door', price: 15.99, rating: 88, condition: 'Used', position: 'Left', category: 'Doors', tags: ['Body', 'Sedan'], quantity: 1, isOutOfStock:true  },
    { id: 6, name: 'Vintage Alternator', price: 25.00, rating: 91, condition: 'Used', position: 'Center', category: 'Alternator', tags: ['Electrical', 'Vintage'], quantity: 1, isOutOfStock:false  },
    { id: 7, name: 'ECU for German Cars', price: 20.00, rating: 98, condition: 'Refurbished', position: 'All', category: 'ECU / Engine Control Unit', tags: ['ECU', 'Electrical'], quantity: 1, isOutOfStock:true  },
    { id: 8, name: 'Standard Fuel Pump', price: 35.00, rating: 89, condition: 'Used', position: 'Rear', category: 'Fuel Pump', tags: ['Fuel System', 'Standard'], quantity: 1, isOutOfStock:true  },
    { id: 9, name: 'Right Bumper Assembly', price: 80.00, rating: 93, condition: 'Refurbished', position: 'Right', category: 'Bumper', tags: ['Body'], quantity: 1, isOutOfStock:true  },
    { id: 10, name: 'Performance Camshaft', price: 29.00, rating: 96, condition: 'Refurbished', position: 'The set', category: 'Camshaft', tags: ['Engine'], quantity: 1, isOutOfStock:false  },
];

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  condition: string;
  position: string;
  category: string;
  tags: string[];
  quantity: number;
  isOutOfStock: boolean;
}
const ShopIndex = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [products] = useState<Product[]>(allProductsData);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProductsData);

    // Filters State
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('Standard');
    const [condition, setCondition] = useState(null); // Set to null to show all initially
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState(null); // For category filter
    const [selectedTag, setSelectedTag] = useState(null); // For tag filter

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(4);
   const [showFlexBlock32, setShowFlexBlock32] = useState(false);


    const toggleCategoryAccordion = (index:any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handlePositionChange = (position:any) => {
        setSelectedPositions(prev =>
            prev.includes(position) ? prev.filter(p => p !== position) : [...prev, position]
        );
    };

    const handleQuantityChange = (productId:any, amount:any) => {
        // This logic should now apply to the main filtered list to persist quantity changes
        const updatedProducts = filteredProducts.map(p =>
            p.id === productId ? { ...p, quantity: Math.max(1, p.quantity + amount) } : p
        );
        setFilteredProducts(updatedProducts);
    };

    // Filter Handlers
    const handleCategorySelect = (category:any) => {
        setSelectedCategory(prev => (prev === category ? null : category)); // Toggle
    };

    const handleTagSelect = (tag:any) => {
        setSelectedTag(prev => (prev === tag ? null : tag)); // Toggle
    };

    const handleConditionSelect = (selectedCond:any) => {
        setCondition(prev => (prev === selectedCond ? null : selectedCond)); // Toggle
    }


    useEffect(() => {
        let tempProducts = [...products];

        // Apply all filters sequentially
        if (searchTerm) tempProducts = tempProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
        if (condition) tempProducts = tempProducts.filter(p => p.condition === condition);
        if (priceRange.min) tempProducts = tempProducts.filter(p => p.price >= parseFloat(priceRange.min));
        if (priceRange.max) tempProducts = tempProducts.filter(p => p.price <= parseFloat(priceRange.max));
        if (selectedPositions.length > 0) tempProducts = tempProducts.filter(p => selectedPositions.includes(p.position));
        if (selectedCategory) tempProducts = tempProducts.filter(p => p.category === selectedCategory);
        if (selectedTag) tempProducts = tempProducts.filter(p => p.tags.includes(selectedTag));

        // Sorting
        switch (sortOrder) {
            case 'Low to High': tempProducts.sort((a, b) => a.price - b.price); break;
            case 'High to Low': tempProducts.sort((a, b) => b.price - a.price); break;
            case 'Newest': tempProducts.sort((a, b) => b.id - a.id); break;
            default: break;
        }

        setFilteredProducts(tempProducts);
        setCurrentPage(1); // Reset to first page after any filter change

    }, [searchTerm, sortOrder, condition, priceRange, selectedPositions, selectedCategory, selectedTag, products]);

    // Pagination Logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    const categories = [
        { name: 'Body Components', items: ['Hood (Bonnet)', 'Bumper', 'Doors', 'Roof'] },
        { name: 'Engine Parts', items: ['Pistons', 'Camshaft', 'Valves', 'Oil Pan'] },
        { name: 'Cooling System', items: ['Radiator', 'Coolant Hose', 'Fan', 'Water Pump'] },
        { name: 'Electrical', items: ['Alternator', 'Starter', 'Fuses', 'ECU / Engine Control Unit'] },
        { name: 'Fuel System', items: ['Fuel Pump', 'Injector'] }
    ];

    const allTags = ['Alternator', 'Turbocharger', 'ABS Pump', 'Airbag Module', 'Engine', 'ECU / Engine Control Unit', 'Radiator', 'Turbocharger', 'Fuel Pump', 'Injector', 'Steering Rack' ,'Dashboard','Suspension Arm','Clutch Kit'];
    // Calculate product counts for each category
const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    allProductsData.forEach(product => {
        if (product.category) {
            counts[product.category] = (counts[product.category] || 0) + 1;
        }
    });
    return counts;
}, [products]);


     const handleClick = () => {
    setShowFlexBlock32(true);
  };

    return (
        <div className="shop">
            <PageHero title="Shop" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/Shop' }]} />

            <section className="products-section products-section-tb">
                <div className="w-layout-blockcontainer container w-container w-layout-blockcontainer-1">
                    <div className="w-layout-grid grid-12">

                        {/* Search */}
                        <div>
                            <div className="form-block form-block-black w-form-search">
                                <form className="form" onSubmit={(e) => e.preventDefault()}>
                                    <input className="text-field text-field-black w-input" placeholder="Search in this category." type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                    <img src={search} alt="search" style={{ filter: 'invert(50%)' }} className="image" />
                                </form>
                            </div>
                        </div>

                        {/* Inventory Info */}
                        <div className="w-layout-hflex flex-block-16 flex-block-16-mobile" onClick={handleClick} style={{ cursor: 'pointer' }}>
                            <img src={square} alt="square" className="image-11 imge-11-mobile" />
                            <div className='text-mb'>Showing {currentProducts.length} of {filteredProducts.length} parts found</div>
                        </div>

                        {/* Sorting */}
                        <div className="w-layout-hflex flex-block-16 flex-end flex-end-mobile">
                            <div id="dropdown-wrapper">
                                <label className="dropdown-label">Sorting</label>
                                <select className="custom-dropdown" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                    <option>Standard</option>
                                    <option>Newest</option>
                                    <option>Low to High</option>
                                    <option>High to Low</option>
                                </select>
                                <div className="dropdown-arrow"><img src={arrow_down} alt="arrow" /></div>
                            </div>
                        </div>

                        {/* FILTERS SIDEBAR */}
                        <div  className={`flex-block-32 ${showFlexBlock32 ? 'show' : ''} w-layout-vflex `}>
                          <img src={close} alt="" className={`close-image  ${showFlexBlock32 ? 'show' : ''}`} onClick={() => setShowFlexBlock32(false)}
/>
                            {/* Product Categories */}
                            <h3 className="heading-9">Product Categories</h3>
                            {categories.map((category, idx) => {
                                // Calculate the total count for the main category
                                const mainCategoryCount = category.items.reduce((total, item) => total + (categoryCounts[item] || 0), 0);

                                return (
                                    <div key={idx} className="div-block-5">
                                        <div className="w-layout-hflex flex-block-17 category-flex-block-17" style={{ cursor: 'pointer' }} onClick={() => toggleCategoryAccordion(idx)}>
                                            {/* Display the count next to the category name */}
                                            <div><strong>{category.name} </strong></div>
                                            <div><strong>{mainCategoryCount}</strong></div>

                                            <div className='count-1'>{activeIndex === idx ? '-' : '+'}</div>
                                        </div>
                                        <div className={`accordion-content ${activeIndex === idx ? 'open' : ''}`}>
                                            <div className="div-block-6">
                                                {category.items.map((item, i) => (
                                                    <div key={i} className={`w-layout-hflex flex-block-17 category-item-btn ${selectedCategory === item ? 'active' : ''} category-item-btn-flex-block-17`}>
                                                        <button onClick={() => handleCategorySelect(item)}>
                                                            {item}
                                                        </button>
                                                          <button  onClick={() => handleCategorySelect(item)}>
                                                            {categoryCounts[item] || 0}
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}


                            {/* Price */}
                            <h3 className="heading-9">Price</h3>
                            <div className="w-form">
                                <form className="form-4">
                                    <input className="text-field-4 price-input w-input" placeholder="€ Min" type="number" value={priceRange.min} onChange={e => setPriceRange({ ...priceRange, min: e.target.value })} />
                                    <div>to</div>
                                    <input className="w-input price-input" placeholder="€ Max" type="number" value={priceRange.max} onChange={e => setPriceRange({ ...priceRange, max: e.target.value })} />
                                </form>
                            </div>

                            {/* Condition */}
                            <h3 className="heading-9">Condition</h3>
                            <div className="w-layout-hflex used_refurbished">
                                <button className={`condition-btn ${condition === 'Used' ? 'active' : ''}`} onClick={() => handleConditionSelect('Used')}>Used</button>
                                <button className={`condition-btn ${condition === 'Refurbished' ? 'active' : ''}`} onClick={() => handleConditionSelect('Refurbished')}>Refurbished</button>
                            </div>

                            {/* Position */}
                            <h3 className="heading-9">Position</h3>
                            <div className="w-form">
                                <form className="form-4">
                                    <div className="checkbox-main w-layout-vflex">
                                        {['All', 'Left', 'Center', 'Right', 'The set', 'Left rear', 'Left front', 'Right front', 'Front', 'Rear'].map((pos, i) => (
                                            <div key={i} className="checkbox-block w-layout-hflex">
                                                <input type="checkbox" checked={selectedPositions.includes(pos)} onChange={() => handlePositionChange(pos)} />
                                                <label>{pos}</label>
                                            </div>
                                        ))}
                                    </div>
                                </form>
                            </div>

                            {/* Tags */}
                            <h3 className="heading-9">Tags</h3>
                            <div className="tags-block">
                                {allTags.map((tag, i) => (
                                    <button key={i} className={`tag-text ${selectedTag === tag ? 'active' : ''}`} onClick={() => handleTagSelect(tag)}>
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* PRODUCT LIST */}
                       {/* PRODUCT LIST */}
<div className="div-block-8">
    {currentProducts.length > 0 ? (
        currentProducts.map((product) => (
            <div key={product.id} className="w-layout-grid grid-13 grid-13-mobile-shop">
                <img src={productImage} alt="product" className='grid-13-mobile-shop-img' />
                <div className="w-layout-vflex flex-block-19">
                    <h2 className='price'>€{product.price.toFixed(2)}</h2>
                    <div className='text-mobile'>Stan: {product.condition}</div>
                    <Link to={`/shop-detail/${product.id}`} className="heading-10 heading-10-mobile">{product.name}</Link>
                    
                    <div className="w-layout-hflex flex-block-18">
                        <img src={star} className="star star-mobile" alt="star" style={{ height: '12px' }} />
                        <div className="text-block-9 text-block-9-mobile shop-page" >{product.rating}% Supplier Recommended</div>
                    </div>
                    {
                        !product.isOutOfStock ?                     <div className="form-block-4 w-form">
                        <div className="form-3 quantity">
                            <button
                                type="button"
                                className="button-3 w-button"
                                onClick={() => handleQuantityChange(product.id, -1)}
                                disabled={product.isOutOfStock}
                            >-</button>
                            <input
                                className="text-field-3 w-input"
                                value={product.quantity}
                                type="number"
                                readOnly
                            />
                            <button
                                type="button"
                                className="button-3 w-button"
                                onClick={() => handleQuantityChange(product.id, 1)}
                                disabled={product.isOutOfStock}
                            >+</button>
                        </div>
                        <h4>of {product.quantity} unit{product.quantity > 1 ? 's' : ''}</h4>
                    </div> : ""
                    }

                </div>
                <div className="div-block-7">
                    <div className="text-block-10">Product description for {product.name}.</div>
                    {
                        product.isOutOfStock ?
                            <p className='out_of_stock w-button add-to-cart-btn '>Out of Stock</p>
                            :
                            <a href="#" className="add-to-cart-btn w-button">Add to Cart</a>
                    }
                </div>
                <a href="/wishlist"><img src={wishlist} className="wishlist-icon" alt="wishlist" style={{ filter: 'invert(50%)' }} /></a>
            </div>
        ))
    ) : (
        <p>No products found matching your criteria.</p>
    )}

    {/* Pagination */}
    <div className="review-pagination">
        <button className="pagination-nav-btn" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>{'‹'}</button>
        <div className="pagination-center-1">Page {currentPage} of {totalPages}</div>
        <button className="pagination-nav-btn" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>{'›'}</button>
    </div>
</div>

                    </div>
                </div>
            </section>

            <WorldwideShipping />
            <CTA />
        </div>
    );
};

export default ShopIndex;