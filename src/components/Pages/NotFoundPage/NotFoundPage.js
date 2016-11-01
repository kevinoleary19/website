import React from 'react';
import { Link } from 'react-router-component';

import './NotFoundPage.scss';

function NotFoundPage()  {
  const stars = [];
  for (let i = 0; i < 50; i++) {
    stars.push({
      size: Math.ceil(Math.random() * 5),
      x: Math.ceil(Math.random() * 100),
      y: Math.ceil(Math.random() * 50)
    });
  }

  return (
    <section className="NotFoundPage">
      <div className="star-container">
        { stars.map((star, index) =>
            <div
              className="star-container__star"
              style={{
                width: star.size,
                height: star.size,
                borderRadius: star.size,
                transform: `translate(${star.x}vw, ${star.y}vh)`
              }}
              key={index}
            />
        )}
      </div>
      <div className="NFP__box">
        <div className="NFP__404">
          404
        </div>
        <div className="NFP__text">
          Oh no! You've tried looking for something that <br />
          doesn't exist. A true absurdist at heart.
        </div>
        <div className="NFP__button">
          <Link href="/">
            Return to Normalcy
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
