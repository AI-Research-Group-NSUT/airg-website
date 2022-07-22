import { useRouter } from "next/router";
import * as styles from "./Navbar.module.css";
import Link from "next/link";
import Logo from "../../components/Logo";
import { capitalizeFirst } from "../../utils/util";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const tabs = ["home", "projects", "publications", "events", "team"];

const Navbar = () => {
  // get current tab
  const router = useRouter();

  // slicing because the route is contains '/', home route is '/' so we have || 'home' incase of ''
  const currentTab = router.asPath.slice(1) || "home";

  return (
    <div className={styles.navbar}>
      <Logo />

      <div className={styles.menuButton}>MENU</div>
      <div className={styles.links}>
        {tabs.map((tab) => {
          return (
            <NavbarItem isCurrTab={tab === currentTab} tab={tab} key={tab} />
          );
        })}
      </div>
    </div>
  );
};

const NavbarItem = ({ tab, isCurrTab }) => {
  return (
    <div>
      <Link href={`/${tab === "home" ? "" : tab}`}>
        <a className={`${isCurrTab ? styles.active : ""} ${styles.link}`}>
          {capitalizeFirst(tab)}
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
