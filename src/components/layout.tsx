import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';

interface Props {
    children?: any;
}

const Layout = ({ children }: Props) => {
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={(data) => (
                <>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            { name: 'description', content: 'Eventually' },
                            { name: 'keywords', content: 'site, web' },
                        ]}
                    >
                        <html lang="en" />
                    </Helmet>
                    <div className="main-body">{children}</div>
                </>
            )}
        />
    );
};

export default Layout;
