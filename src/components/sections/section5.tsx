import { Link } from 'gatsby';
import React from 'react';

const Section5 = () => {
    return (
        <section id="five">
            <div className="container">
                <h3>Elements</h3>
                <h4>Text</h4>
                <p>
                    This is <b>bold</b> and this is <strong>strong</strong>. This is{' '}
                    <i>italic</i> and this is <em>emphasized</em>. This is{' '}
                    <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                    This is <u>underlined</u> and this is code:{' '}
                    <code>for (;;) ... </code>. Finally, <a href="/#">this is a link</a>
                    .
                </p>
                <hr />
                <header>
                    <h4>Heading with a Subtitle</h4>
                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                </header>
                <br />
                <h5>
                    This started contains all HTML elements
                    <br />
                    Checkout available styling
                    <Link to="/Element"> here</Link>
                </h5>
            </div>
        </section>
    );
};

export default Section5;
