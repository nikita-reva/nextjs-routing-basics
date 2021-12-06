import { useRouter } from 'next/dist/client/router';
import React from 'react';

function ClientPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // load data ...
    // router.push('/clients/ahmet/project-a');
    // router.replace('/clients/ahmet/project-a');
    router.push({
      pathname: '/clients/[clientId]/[clientProjectId]',
      query: { clientId: 'nikita', clientProjectId: 'project-a' },
    });
  }
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Project A</button>
    </div>
  );
}

export default ClientPage;
