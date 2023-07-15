import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import TopNav from './TopNav';
import { config } from '../../../config';
import { Props } from './Nav';

import Pic from '../../assets/images/perkins.jpg';

const SideBar = ({ sections = [] }: Props) => {
    const [headerOpen, toggleHeader] = useState(false);
    return (
        <div className={`${headerOpen ? 'header-visible' : ' '}`}>
            <TopNav
                title={config.authorName}
                onMenuClick={() => toggleHeader(!headerOpen)}
            />
            <section id="header">
                <Header
                    avatar={Pic}
                    title={config.authorName}
                    heading={config.heading}
                />
                <Nav sections={sections} />
                <Footer socialLinks={config.socialLinks} />
            </section>
        </div>
    );
};

export default SideBar;
