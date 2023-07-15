import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

interface Section {
  id: string;
  name: string;
}

export interface Props {
  sections: Section[]
}

const Nav = ({ sections = [] }: Props) => {
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map(s => {
            return (
              <li key={s.id}>
                <Scroll type="id" element={s.id}>
                  <a href={`#${s.id}`}>{s.name}</a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>
      </ul>
    </nav>
  );
}

export default Nav;
