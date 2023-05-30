import React, { useState } from "react";
import Link from "next/link";
import * as Icons from "react-icons/fa";
import { navItemsLeft } from "../NavbarItems";
import { navItemsRight } from "../NavbarItems";
import Dropdown from "../dropdown/Dropdown";
import styles from './navbar.module.css'

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.nav_items}>
          {navItemsLeft.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={styles[item.cName]}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link href={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={styles[item.cName]}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Link href="/" className={styles.navbar_logo}>
          nextBLOGG
          <Icons.FaTree />
        </Link>
        <ul className={styles.nav_items}>
          {navItemsRight.map((item) => {
            return (
              <li key={item.id} className={styles[item.cName]}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar



// import React, { useState } from "react";
// import Link from "next/link";
// import * as Icons from "react-icons/fa";
// import { navItems } from "../NavbarItems";
// import Button from "../Button/Button";
// import Dropdown from "../dropdown/Dropdown";
// import styles from './navbar.module.css'

// const Navbar = () => {
//     const [dropdown, setDropdown] = useState(false);
//   return (
//     <>
//     <nav className={styles.navbar}>
//       <Link href="/" className={styles.navbar_logo}>
//         nextBLOGG
//         <Icons.FaTree />
//       </Link>
//       <ul className={styles.nav_items}>
//         {navItems.map((item) => {
//           if (item.title === "Services") {
//             return (
//               <li
//                 key={item.id}
//                 className={styles[item.cName]}
//                 onMouseEnter={() => setDropdown(true)}
//                 onMouseLeave={() => setDropdown(false)}
//               >
//                 <Link href={item.path}>{item.title}</Link>
//                 {dropdown && <Dropdown />}
//               </li>
//             );
//           }
//           return (
//             <li key={item.id} className={styles[item.cName]}>
//               <Link href={item.path}>{item.title}</Link>
//             </li>
//           );
//         })}
//       </ul>
//       <Button />
//     </nav>
//   </>
//   )
// }

// export default Navbar
