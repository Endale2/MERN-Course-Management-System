import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/components/Header.module.css";
import AuthContext from "../../context/AuthContext.jsx"; // Import your AuthContext

const Header = () => {
  const { user } = useContext(AuthContext); 
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Udemy Clone</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          {user ? (
            <>
              <li>
                <button>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
