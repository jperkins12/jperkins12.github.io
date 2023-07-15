import * as React from 'react';

const AcademicWorksSection = () => {
    return (
        <section id="one">
            <div className="container">
                <h2>Academic Works</h2>
                <ul>
                    <li>
                        <a href="https://scholars.unh.edu/thesis/1282/">
                            Measuring, Modeling, and Evaluating the Spatial Properties
                            of Northeast Oregon Forests Using Unmanned Aerial Systems.{' '}
                            <i>(Master's dissertation, University of New Hampshire)</i>.
                            Perkins, J., 2019.
                        </a>
                    </li>
                    <br></br>
                    <li>
                        <a href="https://iopscience.iop.org/article/10.1088/1748-9326/aa9d9e/meta">
                            An empirical, integrated forest biomass monitoring system.{' '}
                            <i>Environmental Research Letters</i>, 13(2), p.025004.
                            Kennedy, R.E. et al, 2018.
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default AcademicWorksSection;
