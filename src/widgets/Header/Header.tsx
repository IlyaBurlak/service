import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from "../../context/ThemeContext.tsx";
import { Avatar, Dropdown, MenuProps, Space, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth.ts';
import {ProfilePanel} from "../../pages/ProfilePage/ProfilePanel.tsx";

const { Text } = Typography;

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const { user } = useAuth();
    const navigate = useNavigate();

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Мой профиль',
            onClick: () => setProfileVisible(true),
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: 'Выйти',
            onClick: () => {
                localStorage.clear();
                navigate('/login');
            },
        },
    ];

    return (
        <>
            <nav className={`nav ${isDark ? 'nav-dark' : ''}`}>
                <div className="container">
                    <div className="nav-row">
                        <Link to="/" className="logo">
                            <strong>My</strong> portfolio
                        </Link>

                        <button
                            className={`dark-mode-btn ${isDark ? 'dark-mode-btn--active' : ''}`}
                            onClick={toggleTheme}
                        >
                            <img
                                src="/img/icons/sun.svg"
                                alt="Light mode"
                                className="dark-mode-btn__icon"
                            />
                            <img
                                src="/img/icons/moon.svg"
                                alt="Dark mode"
                                className="dark-mode-btn__icon"
                            />
                        </button>

                        {user && (
                            <Dropdown menu={{ items }} placement="bottomRight">
                                <Space style={{
                                    cursor: 'pointer',
                                    marginRight: '20px',
                                    color: isDark ? 'var(--white)' : 'var(--black)'
                                }}>
                                    <Avatar
                                        icon={<UserOutlined />}
                                        style={{
                                            backgroundColor: isDark ? 'var(--purple)' : 'var(--accent)'
                                        }}
                                    />
                                    <Text strong style={{ color: 'var(--accent)' }}>
                                        {user.name} {user.surname}
                                    </Text>
                                </Space>

                            </Dropdown>
                        )}

                        <button
                            className={`burger-btn ${isDark ? 'burger-btn-dark' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <ul className={`nav-list ${menuOpen ? 'nav-list--active' : ''} ${isDark ? 'nav-list-dark' : ''}`}>
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
            <ProfilePanel
                visible={profileVisible}
                onClose={() => setProfileVisible(false)}
            />
        </>
    );
}

export default Header;