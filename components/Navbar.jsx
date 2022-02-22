import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width={32} height={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 6789</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" width={160} height={69} />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart} style={{ cursor: "pointer" }}>
          <Link href={"/cart"} passHref>
            <Image src="/img/cart.png" width={30} height={30} />
          </Link>
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
