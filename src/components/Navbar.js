import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="DDTM-logo"></div>
      <input type="checkbox" name="navbar-toggle" id="navbar-toggle" />
      <label htmlFor="navbar-toggle" className="navbar-toggle-label"></label>
      <nav>
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink className="nav-list__item__link" to="/public">
              公開聊天室
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav-list__item__link" to="/message">
              私人聊天室
            </NavLink>
          </li>
          <li className="nav-list__item">設定</li>
          <li className="nav-list__item">登出</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
