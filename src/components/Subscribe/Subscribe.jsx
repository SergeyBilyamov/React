import React from 'react';

const Subscribe = () => {
  return (
    <section 
      className="subscribe" 
      style={{ backgroundImage: 'url(/img/subscribe-bg.png)' }}
    >
      <div className="container subscribe_container">
        <div className="subscribe_info">
          <img className="subscribe_avatar" src="/img/subscribe-avatar.png" alt="Avatar" width="100" height="100" />
          <p className="subscribe_text subscribe_text-italic">
            "Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a."
          </p>
        </div>
        <div className="subscribe_form">
          <h3 className="subscribe_title">SUBSCRIBE</h3>
          <p className="subscribe_subtitle">FOR OUR NEWLETTER AND PROMOTION</p>
          <form action="#">
            <div style={{ display: 'flex' }}>
              <input className="subscribe_input" type="email" placeholder="Enter Your Email" required />
              <button className="subscribe_button" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;