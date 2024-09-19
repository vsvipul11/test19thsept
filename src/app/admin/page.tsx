'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminPanel from '../../components/AdminPanel';
import { loadComponentsState, saveComponentsState, loadPagesState, savePagesState } from '../../utils/localstorage';
import styles from './AdminPage.module.css';

export default function AdminPage() {
  const [components, setComponents] = useState({});
  const [pages, setPages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadedComponents = loadComponentsState();
    const loadedPages = loadPagesState();
    setComponents(loadedComponents);
    setPages(loadedPages);
    setIsLoading(false);
  }, []);

  const updateComponent = (name: string, updates: any) => {
    setComponents(prev => {
      const newState = {
        ...prev,
        // @ts-ignore
        [name]: { ...prev[name], ...updates },
      };
      saveComponentsState(newState);
      return newState;
    });
  };
// @ts-ignore
  const updatePage = (currentRoute: string, update: Partial<Page>) => {
    setPages(prevPages => {
      const newPages = { ...prevPages };
      // @ts-ignore
      const currentPage = newPages[currentRoute];
      
      if (update.route && update.route !== currentRoute) {
        // If the route is being updated, we need to create a new entry and delete the old one
        // @ts-ignore
        delete newPages[currentRoute];
        // @ts-ignore
        newPages[update.route] = { ...currentPage, ...update };
      } else {
        // Otherwise, just update the existing page
        // @ts-ignore
        newPages[currentRoute] = { ...currentPage, ...update };
      }
      
      return newPages;
    });
  };

  const handleConfirm = () => {
    saveComponentsState(components);
    savePagesState(pages);
    router.push('/');
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.adminPage}>
      <h1 className={styles.pageTitle}>Admin Panel</h1>
      <AdminPanel 
        components={components} 
        updateComponent={updateComponent}
        pages={pages}
        updatePage={updatePage}
        onConfirm={handleConfirm}
      />
    </div>
  );
}