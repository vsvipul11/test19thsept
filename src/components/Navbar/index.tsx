// Navbar.js
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, TestTube, Clipboard, MessageCircle, ShoppingCart, Menu } from 'lucide-react';
import styles from './Navbar.module.css';
import Cart from '../Cart';
import AuthModal from '../AuthModal';
// @ts-ignore
const Navbar = ({ logo, navigationLinks, searchPlaceholder }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCartClick = () => {
    if (isLoggedIn) {
      setIsCartOpen(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };
 // @ts-ignore
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Cadabam Health Labs" width={100} height={60} />
        </Link>

        <div className={`${styles.navContent} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.searchBar}>
            <input type="text" placeholder={searchPlaceholder} />
            <button type="button" aria-label="Search">
              <Search size={18} />
            </button>
          </div>
   
          <div className={styles.navLinks}>
            
            {navigationLinks.map((link, index) => (
              <Link key={index} href={link.href} className={styles.navLink}>
                {link.text}
              </Link>
            ))}
            <button className={styles.supportButton}>
              <MessageCircle size={18} />
              <span>Support</span>
            </button>
            <button className={styles.cartButton} onClick={handleCartClick}>
              <ShoppingCart size={18} />
              <span>Cart</span>
            </button>
          </div>
        </div>

        <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} onLogin={handleLogin} />}
    </nav>
  );
};

export default Navbar;