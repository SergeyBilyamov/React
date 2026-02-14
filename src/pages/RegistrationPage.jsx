import React from 'react';
import Subscribe from '../components/Subscribe/Subscribe';
import PageHeader from '../components/PageHeader/PageHeader';

const RegistrationPage = () => {
  return (
    <>
      <PageHeader title="REGISTRATION" />

      <section className="registration">
        <div className="registration__container">
          <div className="registration__columns">
            {/* Левая колонка: форма */}
            <div className="registration__form">
              <p className="registration-label">Your Name</p>

              <input
                type="text"
                className="registration-input"
                placeholder="First Name"
                aria-label="First Name"
              />

              <input
                type="text"
                className="registration-input"
                placeholder="Last Name"
                aria-label="Last Name"
              />

              {/* Gender */}
              <div className="gender">
                <div className="gender-option">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label htmlFor="male" className="gender-label">
                    <span className="gender-dot"></span> Male
                  </label>
                </div>
                <div className="gender-option">
                  <input type="radio" name="gender" id="female" value="female" />
                  <label htmlFor="female" className="gender-label">
                    <span className="gender-dot"></span> Female
                  </label>
                </div>
              </div>

              <p className="registration-label">Login details</p>

              <input
                type="email"
                className="registration-input"
                placeholder="Email"
                aria-label="Email"
              />

              <input
                type="password"
                className="registration-input"
                placeholder="Password"
                aria-label="Password"
              />

              <p className="registration-hint">
                Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
              </p>

              <button className="join-now-btn">
                JOIN NOW
                <svg
                  className="arrow"
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H15M15 5L8.5 1M15 5L8.5 9"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Правая колонка: перки */}
            <div className="registration__perks">
              <h2 className="perks-title">LOYALTY HAS ITS PERKS</h2>
              <p className="perks-text">
                Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:
              </p>
              <ul className="perks-list">
                {[
                  '15% off welcome offer',
                  'Free shipping, returns and exchanges on all orders.',
                  '$10 off a purchase on your birthday.',
                  'Early access to products.',
                  'Exclusive offers & rewards.',
                ].map((text, index) => (
                  <li className="perks-item" key={index}>
                    <svg
                      className="perks-check"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8035 0L18.0904 0C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437L0.196467 6.75437C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                        fill="#000"
                      />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Секция подписки (можно вынести в компонент, но пока оставим) */}
      <Subscribe />
    </>
  );
};


export default RegistrationPage;