import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

function ClientsPage() {
  const router = useRouter();
  console.log(router.query);

  const clients = [
    { id: 'nikita', name: 'Nikita' },
    { id: 'michel', name: 'Michel' },
    { id: 'ahmet', name: 'Ahmet' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client, index) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
