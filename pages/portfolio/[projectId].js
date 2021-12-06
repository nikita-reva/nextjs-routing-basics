import { useRouter } from 'next/dist/client/router';
import React from 'react';

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return <h1>The Portfolio Project Page</h1>;
}

export default PortfolioProjectPage;
