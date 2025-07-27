import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '../components/common/UserCard';
import { type UserProps } from '../interfaces';

interface UsersPageProps {
  initialUsers: UserProps[];
}

export default function Users({ initialUsers }: UsersPageProps) {
  const [users, setUsers] = useState<UserProps[]>(initialUsers || []);
  const [loading, setLoading] = useState(!initialUsers?.length);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Si nous avons déjà les données initiales, pas besoin de fetch
    if (initialUsers?.length > 0) {
      setLoading(false);
      return;
    }
    
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des utilisateurs');
        }
        
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [initialUsers?.length]);

  return (
    <>
      <Head>
        <title>Users - Next.js Project</title>
        <meta name="description" content="Page des utilisateurs du projet Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Utilisateurs
          </h1>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-green-800 mb-2">
              Données utilisateurs depuis JSONPlaceholder
            </h2>
            <p className="text-green-700">
              Cette page récupère et affiche les informations des utilisateurs depuis 
              l&apos;API JSONPlaceholder en utilisant le composant UserCard.
            </p>
          </div>
          
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              <p className="mt-4 text-gray-600">Chargement des utilisateurs...</p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Erreur de chargement
              </h3>
              <p className="text-red-700">{error}</p>
            </div>
          )}
          
          {!loading && !error && users.length > 0 && (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  {users.length} utilisateur{users.length > 1 ? 's' : ''} trouvé{users.length > 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                  <UserCard 
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    address={user.address}
                    phone={user.phone}
                    website={user.website}
                    company={user.company}
                  />
                ))}
              </div>
            </>
          )}
          
          {!loading && !error && users.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">Aucun utilisateur trouvé.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

// Utilisation de getStaticProps() pour pré-charger les données utilisateurs côté serveur
export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    return {
      props: {
        initialUsers: users,
      },
      // Régénération toutes les heures
      revalidate: 3600,
    };
  } catch {
    return {
      props: {
        initialUsers: [],
      },
      revalidate: 60, // Réessayer plus fréquemment en cas d'erreur
    };
  }
}
