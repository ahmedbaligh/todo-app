import React from 'react';

const Header = ({ darkTheme }) => {
  const theme = darkTheme ? 'dark' : 'light';

  return (
    <header role="banner">
      <picture>
        <source
          media="(min-width: 800px)"
          srcSet={`./images/bg-desktop-${theme}.jpg`}
        />
        <img
          style={{ width: '100%' }}
          src={`./images/bg-mobile-${theme}.jpg`}
          alt=""
        />
      </picture>
    </header>
  );
};

export default Header;
