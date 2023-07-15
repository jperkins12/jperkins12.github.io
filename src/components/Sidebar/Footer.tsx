import React from 'react';

interface Props {
    socialLinks: SocialLink[];
}

interface SocialLink {
    icon: string;
    name: string;
    url: string;
}

const Footer = ({ socialLinks = [] }: Props) => {
    return (
        <footer>
            <ul className="icons">
                {socialLinks.map((social) => {
                    const { icon, name, url } = social;
                    return (
                        <li key={url}>
                            <a href={url} className={`icon ${icon}`}>
                                <span className="label">{name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};

export default Footer;
