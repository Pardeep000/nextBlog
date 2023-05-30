import React, { useState } from "react";
import { serviceDropdown } from "../NavbarItems";
import  Link from "next/link"
import styles from './dropdown.module.css'

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        // className={dropdown ? "services-submenu clicked" : "services-submenu"}
        className={dropdown ? `${styles.services_submenu} ${styles.clicked}` : styles.services_submenu}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item:any) => {
          return (
            <li key={item.id}>
              <Link
                href={item.path}
                className={styles[item.cName]}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;