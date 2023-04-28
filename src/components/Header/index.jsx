import { Link } from "react-router-dom";
import styles from "./header.module.css";
import useUserProfile from "@/hooks/useUserProfile";

const Header = () => {
  const [userProfile] = useUserProfile();

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.inner}`}>
        <nav className={`${styles.nav}`}>
          <Link to="/" className={`${styles.logo}`}>
            <img src="/assets/linkbrary-logo.svg" alt="Linkbrary Logo" />
          </Link>
          {!userProfile ? (
            <Link to="/signin" className={`${styles.signin}`}>
              로그인
            </Link>
          ) : (
            <Link className={`${styles.user}`}>
              <div className={`${styles.imgContainer}`}>
                <img
                  src={userProfile.profileImageSource}
                  alt={userProfile.name}
                />
              </div>
              <span>{userProfile.email}</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;