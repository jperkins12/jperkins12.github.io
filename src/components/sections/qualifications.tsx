import React from 'react';

const QualificationsSection = () => {
    return (
        <section id="two">
            <div className="container">
                <h3>Things I Can Do</h3>
                <p>
                    My background as a GIS Analyst and Software Developer enables me to
                    deliver solutions that solve complex problems with geospatial data at
                    scale.
                </p>
                <ul className="feature-icons">
                    <li className="fa-code">Software Engineering</li>
                    <li className="fa-database">Big Data</li>
                    <li className="fa-layer-group">Remote Sensing</li>
                    <li className="fa-map">GIS Analysis</li>
                    <li className="fa-chart-simple">Business Insight</li>
                    <li className="fa-list-check">Project Management</li>
                </ul>
            </div>
        </section>
    );
};

export default QualificationsSection;
