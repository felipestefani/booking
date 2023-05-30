import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { MainContext } from "../../contexts/MainContext";

const Header = () => {
  const navigate = useNavigate();
  const createAccount = { label: "Criar conta", path: "/register" };
  const login = { label: "Iniciar sessão", path: "/login" };
  const { initials } = useContext(AuthContext)
  const { path } = useContext(MainContext)
  
  const buttons = [
    { label: "Criar conta", path: "/register" },
    { label: "Iniciar sessão", path: "/login" },
  ];

  return (
    <header className={styles.containerHeader}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src="../../images/icon-hotel.png" alt="icon-car" />
        </Link>
        <h2><Link to={'/'} className={styles.slogan}>Sinta-se em casa</Link></h2>
      </div>
      <div>
        <div >
          <HamburgerMenu createAccount={createAccount} login={login} />
        </div>        
        <nav className={`${styles.nav} ${ initials ? styles.hideNav : null}`} >
          <ul>
            {buttons.map((button, index) => (
              <li key={index} className={`${ button.path == path ? styles.buttonHeaderDisplay : styles.buttonHeader}`}>
                <button
                  className={styles.buttonHeader}
                  onClick={() => {navigate(button.path)}}
                >
                  {button.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
