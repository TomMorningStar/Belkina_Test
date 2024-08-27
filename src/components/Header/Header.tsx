import React from 'react';
import { Logo } from '../../assets/Logo';
import { User } from '../../assets/User';

import s from './s.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Logo />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <User />
    </header>
  );
};
