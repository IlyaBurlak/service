import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <Link to="/" className="logo">
                        <strong>My</strong> portfolio
                    </Link>

                    <button className="dark-mode-btn">
                        <img src="/img/icons/sun.svg" alt="Light mode" className="dark-mode-btn__icon" />
                        <img src="/img/icons/moon.svg" alt="Dark mode" className="dark-mode-btn__icon" />
                    </button>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({isActive}) =>
                                    `nav-list__link ${isActive ? 'nav-list__link--active' : ''}`
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/skills"
                                className={({isActive}) =>
                                    `nav-list__link ${isActive ? 'nav-list__link--active' : ''}`
                                }
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/contacts"
                                className={({isActive}) =>
                                    `nav-list__link ${isActive ? 'nav-list__link--active' : ''}`
                                }
                            >
                                Contacts
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/comments"
                                className={({isActive}) =>
                                    `nav-list__link ${isActive ? 'nav-list__link--active' : ''}`
                                }
                            >
                                Comments
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;