'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { loadPagesState } from '../../utils/localstorage';
import MedicalTestTemplate from '../../components/MedicalTestTempate';

export default function DynamicTestPage() {
  const [pageData, setPageData] = useState(null);
  const params = useParams();
  const { testSlug } = params;

  useEffect(() => {
    const pages = loadPagesState();
// @ts-ignore
const currentPage = Object.values(pages).find(page => page.route === `/${testSlug}`);    
// @ts-ignore
setPageData(currentPage);
  }, [testSlug]);

  if (!pageData) {
    return <div>Loading...</div>;
  }
// @ts-ignore
  return <MedicalTestTemplate {...pageData} />;
}