import * as React from 'react';

import banner from '../../assets/images/banner2.jpg';

const AboutSection = () => {
    return (
        <section id="one">
            <div className="image main" data-position="center">
                <img src={banner} alt="" />
            </div>
            <div className="container">
                <header className="major">
                    <h2>GIS Data Engineer</h2>
                    <p>
                        Knowledgable. Thoughtful. Innovative.
                    </p>
                </header>
                <p>
                    Whether it's getting directions to work, finding a place to eat on
                    your phone, or checking the weather, GIS data powers many of the
                    applications we use on a daily basis.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
