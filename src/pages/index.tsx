import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import PageFooter from '../components/pagefooter';

import SideBar from '../components/Sidebar';
import AboutSection from '../components/sections/about';
import QualificationsSection from '../components/sections/qualifications';
import affiliationsSection from '../components/sections/affiliations';
import AcademicWorksSection from '../components/sections/academicWorks';
import PortfolioSection from '../components/sections/portfolio';

const sections = [
    { id: 'one', name: 'About', component: AboutSection },
    { id: 'two', name: 'Things I Can Do', component: QualificationsSection },
    { id: 'three', name: 'Affiliated Projects', component: affiliationsSection },
    { id: 'four', name: 'Academic Works', component: AcademicWorksSection },
    { id: 'five', name: 'Portfolio', component: PortfolioSection },
    // { id: 'five', name: 'Elements', component: Section5 },
];

const sectionsNoComponents = sections.map((x) => (({ id, name }) => ({ id, name }))(x));

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <SideBar sections={sectionsNoComponents} />
            <div id="wrapper">
                <div id="main">
                    {sections.map((x) => (
                        <x.component />
                    ))}
                </div>
            </div>
            <section id="footer">
                <PageFooter />
            </section>
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
