import { useTheme } from '../hooks/useTheme';

import sunIcon from '../assets/icon-sun.svg';
import moonIcon from '../assets/icon-moon.svg';

const THEME = {
  dark: {
    title: 'Light mode',
    icon: sunIcon,
  },
  light: {
    title: 'Dark mode',
    icon: moonIcon,
  },
};

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1 className="title">TODO</h1>
      <button
        title={THEME[theme].title}
        className="toggle-theme-button"
        onClick={toggleTheme}
      >
        <img src={THEME[theme].icon} alt="Icon" width={26} height={26} />
      </button>
    </header>
  );
};

export default Header;
