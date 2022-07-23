import { useRouter } from "next/router";
import * as styles from "./Navbar.module.css";
import Link from "next/link";
import Logo from "../../components/Logo";
import { capitalizeFirst } from "../../utils/util";
import Menu from "../../components/Menu";
import { useState } from "react";
import { ScreenCoverNavbar } from "../ScreenCoverNavbar/ScreenCoverNavbar";

const tabs = ["home", "projects", "publications", "events", "team"];

const Navbar = () => {
  // get current tab
  const router = useRouter();

  // slicing because the route is contains '/', home route is '/' so we have || 'home' incase of ''
  const currentTab = router.asPath.slice(1) || "home";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    //TODO: add a little delay to make sure the screen is loaded before the screen cover is removed
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.navbar} id="navbar">
      <Logo closeMenu={closeMenu} />

      <div
        onClick={() => setIsMenuOpen((p) => !p)}
        className={styles.menuButton}
      >
        <Menu open={isMenuOpen} />
      </div>
      <div className={styles.links}>
        {tabs.map((tab) => {
          return (
            <NavbarItem isCurrTab={tab === currentTab} tab={tab} key={tab} />
          );
        })}
      </div>
      <ScreenCoverNavbar tabs={tabs} open={isMenuOpen} closeMenu={closeMenu} />
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
