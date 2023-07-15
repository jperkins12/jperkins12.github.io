import React from 'react';

interface Props {
    title: string;
    heading: string;
    avatar: string;
}

const Header = ({ title, heading, avatar }: Props) => {
    return (
        <header>
            <span className="image avatar">
                <img src={avatar} alt="" />
            </span>
            <h1 id="logo">
                <a href="/#">{title}</a>
            </h1>
            <p>{heading}</p>
        </header>
    );
};

export default Header;
