import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "@/assets/logo2.png";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // следим за сменой маршрута

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Закрываем меню при смене маршрута
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={styles.header}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Image */}
        <NavLink to="/" end>
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: 150,
              height: "auto",
            }}
          />
        </NavLink>

        {/* Burger Menu Button */}
        <button className={styles.burger_menu} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`${styles.menu} ${isOpen ? styles.menu_open : ""}`}>
          <div className={styles.menu_header}>
            {/* Burger menu logo */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${styles.menu_logo} ${isActive ? styles.active : ""}`
              }
            >
              <img
                src={Logo}
                alt="Logo"
                style={{
                  width: 150,
                  height: "auto",
                }}
              />
            </NavLink>

            {/* Burger menu close button */}
            <button className={styles.close_btn} onClick={toggleMenu}>
              ✕
            </button>
          </div>

          {/* Menu elements */}
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${styles.menu_link} ${isActive ? styles.active : ""}`
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${styles.menu_link} ${isActive ? styles.active : ""}`
              }
            >
              Проекты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${styles.menu_link} ${isActive ? styles.active : ""}`
              }
            >
              Услуги
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `${styles.menu_link} ${isActive ? styles.active : ""}`
              }
            >
              Контакты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.menu_link} ${isActive ? styles.active : ""}`
              }
            >
              О нас
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
