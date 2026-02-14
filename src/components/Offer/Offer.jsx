import React from 'react';

const Offer = () => {
  return (
    <section className="offer">
      <div className="container offer_container">
        <div 
          className="offer_item offer_item_1" 
          style={{ backgroundImage: 'url(/img/offer-women.jpg)' }}
        >
          <p className="offer_subtitle">30% OFF</p>
          <h3 className="offer_title">FOR WOMEN</h3>
        </div>
        <div 
          className="offer_item offer_item_2" 
          style={{ backgroundImage: 'url(/img/offer-men.jpg)' }}
        >
          <p className="offer_subtitle">HOT DEAL</p>
          <h3 className="offer_title">FOR MEN</h3>
        </div>
        <div 
          className="offer_item offer_item_3" 
          style={{ backgroundImage: 'url(/img/offer-kids.jpg)' }}
        >
          <p className="offer_subtitle">NEW ARRIVALS</p>
          <h3 className="offer_title">FOR KIDS</h3>
        </div>
        <div 
          className="offer_item offer_item_4" 
          style={{ backgroundImage: 'url(/img/offer-accesories.jpg)' }}
        >
          <p className="offer_subtitle">LUXIROUS &amp;&nbsp;TRENDY</p>
          <h3 className="offer_title">ACCESORIES</h3>
        </div>
      </div>
    </section>
  );
};

export default Offer;