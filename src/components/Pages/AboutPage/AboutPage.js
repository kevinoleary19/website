import React from 'react';

import './AboutPage.scss'

const AboutPage = () => (
    <section className="AboutPage">
      <div className="AboutPage__circuit">
        <div className="AboutPage__circuit__resume-button">
          Download Resume
        </div>
        <div className="AboutPage__circuit__battery AboutPage__circuit__battery--1" />
        <div className="AboutPage__circuit__battery AboutPage__circuit__battery--2" />
        <div className="AboutPage__circuit__column">
          <div className="AboutPage__circuit__column__question">
            Favorite Song?
          </div>
          <div className="AboutPage__circuit__column__answer">
            Strobe by Deadmau5, with Ocean by John Butler coming in
            a close second
          </div>
          <div className="AboutPage__circuit__column__question">
            Favorite Coffee?
          </div>
          <div className="AboutPage__circuit__column__answer">
            Double drip espresso caramel venti grande latte with whipped cream
          </div>
          <div className="AboutPage__circuit__column__question">
            Favorite Exercise?
          </div>
          <div className="AboutPage__circuit__column__answer">
            Squats. Ass to the Grass.
          </div>
        </div>
        <div className="AboutPage__circuit__column">
          <div className="AboutPage__circuit__column__question">
            Email?
          </div>
          <div className="AboutPage__circuit__column__answer">
            kevinoleary94@gmail.com
          </div>
          <div className="AboutPage__circuit__column__question">
            Github Link?
          </div>
          <div className="AboutPage__circuit__column__answer">
            <a
              className="AboutPage__circuit__column__answer--link"
              href="https://github.com/koleary94"
              target="blank"
            >
              right here
            </a>
          </div>
          <div className="AboutPage__circuit__column__question">
            Can I stalk you?
          </div>
          <div className="AboutPage__circuit__column__answer">
            I mean...you have all the info to now. But please no.
          </div>
        </div>
      </div>
    </section>
);

export default AboutPage;
