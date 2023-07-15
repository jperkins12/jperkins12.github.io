import React from 'react';

import or_camping from '../../assets/images/or_camping.jpg';
import lt_logo from '../../assets/images/lt_logo.svg';

const affiliationsSection = () => {
    const caforUrl = 'https://cafor.weebly.com/';
    const landtrendrUrl = 'https://geotrendr.ceoas.oregonstate.edu/landtrendr/';

    return (
        <section id="three">
            <div className="container">
                <h3>Affiliated Projects</h3>
                <p>
                    Integer eu ante ornare amet commetus vestibulum blandit integer in
                    curae ac faucibus integer non. Adipiscing cubilia elementum integer.
                    Integer eu ante ornare amet commetus.
                </p>
                <div className="features">
                    <article>
                        <a href={caforUrl} className="image">
                            <img src={or_camping} alt="" />
                        </a>
                        <div className="inner">
                            <h4>
                                <a href={caforUrl}>Communities and Forests In Oregon</a>
                            </h4>
                            <p>
                                Understanding the dynamic between forests and their
                                communities in Eastern Oregon.
                            </p>
                        </div>
                    </article>
                    <article>
                        <a href={landtrendrUrl} className="image">
                            <img src={lt_logo} alt="" />
                        </a>
                        <div className="inner">
                            <h4>
                                <a href={landtrendrUrl}>LandTrendr</a>
                            </h4>
                            <p>
                                Using decades worth of Landsat imagery to identify
                                change in the earth's surface.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default affiliationsSection;
