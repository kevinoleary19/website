// @flow
import React from 'react';
import { Link } from 'react-router-component';

import './NotFoundPage.scss';
import { isMobile } from '../../../utils/browser';

type Star = {
  size: number,
  x: number,
  y: number
}

function NotFoundPage()  {
  const stars: Array<Star> = [];
  for (let i = 0; i < 300; i++) {
    stars.push({
      size: Math.ceil(Math.random() * 5),
      x: Math.ceil(Math.random() * 100),
      y: Math.ceil(Math.random() * 40)
    });
  }

  const textBreak = isMobile ? null : <br />;

  return (
    <section className="NotFoundPage">
      <div className="star-container">
        {stars.map((star: Star, index: number) =>
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
          Oh no! You've tried looking for something that { textBreak }
          doesn't exist. A true absurdist at heart
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
