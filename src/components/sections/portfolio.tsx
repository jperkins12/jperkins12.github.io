import * as React from 'react';

const PortfolioSection = () => {
    return (
        <section id="one">
            <div className="container">
                <h2>Portfolio</h2>
                <ul>
                    <li>
                        <a href="https://github.com/jperkins12/padus-land-interactions">
                            PADUS-Land-Interactions
                        </a>{' '}
                        - Example API that allows a user to query the national protected
                        areas database against an area of interest.
                    </li>
                    <br></br>
                    <li>
                        <a href="https://github.com/jperkins12/data-ingest-demo">
                            Data-Ingest-Demo
                        </a>{' '}
                        - Sample data ingest workflow that imports data from Kaggle into
                        a containerized Postgres instance.
                    </li>
                    <br></br>
                    <li>
                        <a href="https://github.com/jperkins12/TreeFindr">TreeFindr</a>{' '}
                        - QGIS processing chain in python for isolating tree crowns from
                        DSM raster images.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default PortfolioSection;
