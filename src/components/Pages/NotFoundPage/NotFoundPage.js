// @flow
import React, { Component } from 'react';
import Link from 'react-router/Link';

import './NotFoundPage.scss';
import { isMobile } from '../../../utils/browser';

type ShootingStarLocation = {
  x1: number,
  y1: number,
  x2: number,
  y2: number
}

type Star = {
  size: number,
  x: number,
  y: number
}

export default class NotFoundPage extends Component {
  createStarInterval: number;
  state: {
    shootingStarLocation: ShootingStarLocation,
    showShootingStar: boolean,
    stars: Array<Star>
  }

  constructor() {
    super();
    const stars: Array<Star> = [];
    for (let i = 0; i < 300; i++) {
      stars.push({
        size: Math.ceil(Math.random() * 5),
        x: Math.ceil(Math.random() * 100),
        y: Math.ceil(Math.random() * 40)
      });
    }
    this.state = {
      shootingStarLocation: {x1: 0, y1: 0, x2: 0, y2: 0},
      showShootingStar: false,
      stars: stars
    }
    this.createStarInterval = setInterval(() => this.createStar(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.createStarInterval);
  }

  createStar() {
    const a = Math.ceil(Math.random() * 100);
    this.setState({showShootingStar: true});
  }

  render() {

    const { shootingStarLocation, showShootingStar, stars } = this.state;
    const textBreak = isMobile ? null : (<br />);

    const shootingStar = showShootingStar ? (
        <div
          className="star-container__shooting-star"
          style={{
            transform: `translate(${shootingStarLocation.x1}vw, ${shootingStarLocation.y1}vh)
                        rotate(${45}deg) `
          }}
        />
    ) : null;

    return (
      <section className="NotFoundPage">
        <div className="star-container">
          { shootingStar }
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
            <Link to="/">
              Return to Normalcy
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
