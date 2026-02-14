import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Offer from '../components/Offer/Offer';
import ProductCard from '../components/ProductCard/ProductCard';
import Feature from '../components/Feature/Feature';
import Subscribe from '../components/Subscribe/Subscribe';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Загружаем товары из public/data/products.json
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Ошибка загрузки товаров:', err));
  }, []);

  return (
    <>
      <Hero />
      <Offer />

      <section className="products">
        <div className="container products_container">
          <h2 className="products_container_title">Fetured Items</h2>
          <p className="products_subtitle">
            Shop for items based on what we featured in this week
          </p>

          <div className="products_list" id="products-list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Link to="/catalog" className="products_show_all">
            Browse All Product
          </Link>
        </div>
      </section>

      <Feature />
      <Subscribe />
    </>
  );
};

export default HomePage;