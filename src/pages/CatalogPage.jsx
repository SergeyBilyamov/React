import { useState, useEffect } from 'react';
import productsData from '../data/products.json'; // если импортируем напрямую
import ProductCard from '../components/ProductCard/ProductCard';
import FilterSort from '../components/FilterSort/FilterSort';
import PageHeader from '../components/PageHeader/PageHeader';
import Subscribe from '../components/Subscribe/Subscribe';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  useEffect(() => {
    // Загружаем товары (можно через fetch, но для простоты импорт)
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }

    if (selectedColors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    setFilteredProducts(filtered);
  }, [selectedSizes, selectedColors, products]);

  const handleSizeChange = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  return (
    <>
      <PageHeader 
        title="NEW ARRIVALS" 
        breadcrumb={<>HOME / MEN / <span className="hero_title-pink">NEW ARRIVALS</span></>} 
      />

      <div className="filter-sort center">
        <FilterSort
          selectedSizes={selectedSizes}
          onSizeChange={handleSizeChange}
          selectedColors={selectedColors}
          onColorChange={handleColorChange}
        />
      </div>

      <section className="catalog-products">
        <div className="container products_container">
          <div className="products_list">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Пагинация (можно пока оставить как есть) */}
      <div className="pagination-wrapper">
        <div className="pagination">
          <a href="#" className="pagination__arrow pagination__prev">
            <svg viewBox="0 0 8 14" width="8" height="14" fill="none">
              <path d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z" fill="currentColor" fillRule="nonzero" />
            </svg>
          </a>
          <div className="pagination__numbers">
            <a href="#" className="pagination__number active">1</a>
            <a href="#" className="pagination__number">2</a>
            <a href="#" className="pagination__number">3</a>
            <a href="#" className="pagination__number">4</a>
            <a href="#" className="pagination__number">5</a>
            <a href="#" className="pagination__number">6</a>
            <span className="pagination__ellipsis">...</span>
            <a href="#" className="pagination__number">20</a>
          </div>
          <a href="#" className="pagination__arrow pagination__next">
            <svg viewBox="0 0 8 14" width="8" height="14" fill="none">
              <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="currentColor" fillRule="nonzero" />
            </svg>
          </a>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default CatalogPage;