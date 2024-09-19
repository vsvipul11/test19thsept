'use client'

import { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for tests or checkups"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        <img src="/search-icon.svg" alt="Search" />
      </button>
    </form>
  )
}