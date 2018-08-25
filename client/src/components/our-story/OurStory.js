import React, { Component, Fragment } from 'react';

import Cta from '../Cta/Cta';
import './backgroundImage.css';

export default class OurStory extends Component {
  render() {
    return (
      <Fragment>
        <header id="hero-ourStory" className="Hero-OurStory">
          <h1 className="Hero-OurStory-title">This is our story.</h1>
          <h2 className="Hero-OurStory-heading">
            The best times are found when friends &amp; family
            gather&nbsp;round.
          </h2>
        </header>
        <article id="our-story" className="OurStory">
          <div className="OurStory-container">
            <div className="OurStory-image" />
            <div className="OurStory-content">
              <h1 className="OurStory-title">This is our story.</h1>
              <h2 className="OurStory-heading">
                The best times are found when friends &amp; family
                gather&nbsp;round.
              </h2>
              <p className="OurStory-copy">
                ​In late 2016, Jake and Janie Burkett welcomed twin girls,
                Brycee Jo and Blake, into their family and began planning their
                lives as new parents. Their joy quickly turned to sorrow with
                the unexpected passing of Brycee Jo due to a severe infection.
                Needless to say, their world came crashing down around them.<br />
                <br />
                Throughout the following weeks, family and friends gathered
                around the Burketts to help them navigate their grief. As is
                often the case, food played a pivotal role in their journey
                towards healing. Though simple comfort foods were a staple, one
                item kept recurring on the menu: Biscuits.<br />
                <br />
                On New Year’s Eve 2016, side-by-side with Janie’s brother,{' '}
                <a href="mailto:jedijake@me.com">Jacob Allen</a>, an entire
                spread was created around the idea of custom-made,
                do-it-yourself biscuit sandwiches. They whipped up a “biscuit
                bar” in their kitchen, featuring fluffy, scratch-made biscuits
                with mouth-watering toppings like scrambled eggs, bacon, fried
                chicken, sausage gravy, and maple syrup. The success of this
                singular meal gave birth to a great new passion for the
                Burketts.<br />
                <br />Over the past 2 years, Jake and Janie have seen their new
                passion take flight from a creative concept to brick-and-mortar
                construction. They have lovingly developed every recipe on the
                menu in their home kitchen, and find great joy in sharing some
                family love with all who pass through the doors of The Biscuit
                Bar.<br />
                <br />The Biscuit Bar’s first location opened in Spring 2018 at
                The Boardwalk @ Granite Park in Plano, with plans for expanding
                to multiple locations in the near future. In addition to opening
                the restaurant, the Burketts welcomed a beautiful baby boy into
                their family in June of 2018.<br />
                <br />
                We look forward to hearing your family’s story over a fresh
                batch of biscuits.<br />
                <br />
                <strong>
                  &ndash;&nbsp;Jake, Janie, Blake, and Banner Burkett
                </strong>
              </p>
            </div>
          </div>
        </article>
        <Cta
          header="Join our team &amp; be a part of our&nbsp;story."
          copy={`Text <strong>LevelUp</strong> to <strong>33222</strong> to&nbsp;apply.`}
        />
      </Fragment>
    );
  }
}
