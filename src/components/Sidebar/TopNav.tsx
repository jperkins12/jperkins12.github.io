import React from 'react';

interface Props {
  title: string
  onMenuClick: any
}

const TopNav = ({ title, onMenuClick = () => {} }: Props) => {
    return (
        <div id="titleBar">
            <a
                href="/#"
                className="toggle"
                onClick={(e) => {
                    e.preventDefault();
                    onMenuClick();
                }}
            >
                {' '}
            </a>
            <span className="title">
                <a href="/#">{title}</a>
            </span>
        </div>
    );
};

export default TopNav;
