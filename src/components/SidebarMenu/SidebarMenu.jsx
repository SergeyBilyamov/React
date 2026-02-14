import React from 'react';

const SidebarMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`sidebar-menu ${isOpen ? 'show' : ''}`}>
        <p className="menu-title">MENU</p>
        <ul className="menu-list">
          <li>
            <a href="#">MAN</a>
            <ul className="submenu">
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Denim</a></li>
              <li><a href="#">T-Shirts</a></li>
            </ul>
          </li>
          <li>
            <a href="#">WOMAN</a>
            <ul className="submenu">
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Jackets & Coats</a></li>
              <li><a href="#">Polos</a></li>
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Shirts</a></li>
            </ul>
          </li>
          <li>
            <a href="#">KIDS</a>
            <ul className="submenu">
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Jackets & Coats</a></li>
              <li><a href="#">Polos</a></li>
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Shirts</a></li>
              <li><a href="#">Bags</a></li>
            </ul>
          </li>
        </ul>
      </div>
      {/* Опционально: затемнение фона для закрытия по клику вне меню */}
      {isOpen && <div className="overlay" onClick={onClose}></div>}
    </>
  );
};

export default SidebarMenu;