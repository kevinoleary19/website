import React from 'react';

import './AboutPage.css'

const AboutPage = () => (
    <section className="about-page">
      <div className="about-page__circuit">
        <div className="about-page__circuit__resume-button">
          Download Resume
        </div>
        <div className="about-page__circuit__battery--1" />
        <div className="about-page__circuit__battery--2" />
        <div className="about-page__circuit__column">
          <div className="about-page__circuit__column__question">
            Favorite Song?
          </div>
          <div className="about-page__circuit__column__answer">
            Strobe by Deadmau5, with Ocean by John Butler coming in
            a close second
          </div>
          <div className="about-page__circuit__column__question">
            Favorite Coffee?
          </div>
          <div className="about-page__circuit__column__answer">
            Double drip espresso caramel venti grande latte with whipped cream
          </div>
          <div className="about-page__circuit__column__question">
            Favorite Exercise?
          </div>
          <div className="about-page__circuit__column__answer">
            Squats. Ass to the Grass.
          </div>
        </div>
        <div className="about-page__circuit__column">
          <div className="about-page__circuit__column__question">
            Email?
          </div>
          <div className="about-page__circuit__column__answer">
            kevinoleary94@gmail.com
          </div>
          <div className="about-page__circuit__column__question">
            Github Link?
          </div>
          <div className="about-page__circuit__column__answer">
            <a
              className="about-page__circuit__column__answer--link"
              href="https://github.com/koleary94"
              target="blank"
            >
              right here
            </a>
          </div>
          <div className="about-page__circuit__column__question">
            Can I stalk you?
          </div>
          <div className="about-page__circuit__column__answer">
            I mean...you have all the info to now. But please no.
          </div>
        </div>
      </div>
    </section>
);

export default AboutPage;
