import React from 'react';

const ThemeSwitcher = ({ darkTheme, onThemeChange }) => {
  const icon = darkTheme ? 'sun' : 'moon';

  return (
    <div
      className="theme-switcher"
      style={{
        background: `transparent url(/images/icon-${icon}.svg) no-repeat center / contain`
      }}
      onClick={onThemeChange}
    ></div>
  );
};

export default ThemeSwitcher;
