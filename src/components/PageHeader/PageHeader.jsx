import React from 'react';

const PageHeader = ({ title, breadcrumb }) => (
  <section className="catalog-nav">
    <div className="container header_container">
      <h1 className="catalog-title">{title}</h1>
      {breadcrumb && <nav className="breadcrumb">{breadcrumb}</nav>}
    </div>
  </section>
  );

export default PageHeader;