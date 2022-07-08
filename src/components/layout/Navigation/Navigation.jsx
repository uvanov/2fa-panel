import React from 'react';

import {
  StyledNavigation,
  Link
} from './Navigation.styles';
import { LINKS } from './Navigation.constants';

const Navigation = () => {
  return (
    <nav>
      <StyledNavigation>
        {
          LINKS.map(link => (
            <li>
              <Link href={ link.url }>
                { link.label }
              </Link>
            </li>
          ))
        }
      </StyledNavigation>
    </nav>
  );
};

export default Navigation;