import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import PageHeader from '../components/PageHeader/PageHeader';
import Subscribe from '../components/Subscribe/Subscribe';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useContext(CartContext);
  const total = getCartTotal();

  return (
    <>
      <PageHeader title="SHOPPING CART" />

      <section className="cart">
        <div className="cart__container">
          <div className="cart__columns">
            {/* Левая колонка */}
            <div className="cart__items-wrapper">
              <div className="cart__items">
                {cartItems.length === 0 ? (
                  <p>Корзина пуста</p>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
                        </svg>
                      </button>
                      <div className="cart-item__image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="cart-item__details">
                        <h3 className="product-title">{item.title}</h3>
                        <p className="product-price">Price: <span className="price-amount">${parseFloat(item.price.replace('$', '')).toFixed(2)}</span></p>
                        <p className="product-info">Color: {item.selectedColor || "Red"}</p>
                        <p className="product-info">Size: {item.selectedSize || "XL"}</p>
                        <div className="product-quantity">
                          <span>Quantity:</span>
                          <input
                            type="number"
                            className="quantity-input"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Кнопки */}
              <div className="cart-actions">
                <button className="btn-clear" onClick={clearCart}>CLEAR SHOPPING CART</button>
                <Link to="/catalog" className="btn-continue">CONTINUE SHOPPING</Link>
              </div>
            </div>

            {/* Правая колонка */}
            <div className="cart__summary">
              <h3 className="shipping-title">SHIPPING ADDRESS</h3>

              <div className="input-group">
                <input type="text" className="input-field" placeholder="Country" />
              </div>
              <div className="input-group">
                <input type="text" className="input-field" placeholder="State" />
              </div>
              <div className="input-group">
                <input type="text" className="input-field" placeholder="Postcode / Zip" />
              </div>

              <button className="quote-btn">GET A QUOTE</button>

              <div className="price-block">
                <p className="subtotal">SUB TOTAL <span className="amount">${total.toFixed(2)}</span></p>
                <p className="grand-total">GRAND TOTAL <span className="amount">${total.toFixed(2)}</span></p>
                <hr className="divider" />
                <button className="checkout-btn">PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  );
};

export default CartPage;