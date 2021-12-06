import { useRouter } from 'next/dist/client/router';
import React from 'react';

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return <h1>The Project Page for a Specific Project for a Specifc Client</h1>;
}

export default SelectedClientProjectPage;
