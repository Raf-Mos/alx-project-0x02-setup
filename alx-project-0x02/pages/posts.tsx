import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '../components/common/PostCard';
import { type PostProps } from '../interfaces';

interface PostsPageProps {
  initialPosts: PostProps[];
}

export default function Posts({ initialPosts }: PostsPageProps) {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts?.length);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Si nous avons déjà les données initiales, pas besoin de fetch
    if (initialPosts?.length > 0) {
      setLoading(false);
      return;
    }
    
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des posts');
        }
        
        const data = await response.json();
        setPosts(data.slice(0, 12)); // Limitons à 12 posts pour l'affichage
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [initialPosts?.length]);

  return (
    <>
      <Head>
        <title>Posts - Next.js Project</title>
        <meta name="description" content="Page des posts du projet Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Posts
          </h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">
              Intégration API JSONPlaceholder
            </h2>
            <p className="text-blue-700">
              Cette page récupère et affiche des posts depuis l&apos;API JSONPlaceholder 
              en utilisant le composant PostCard réutilisable.
            </p>
          </div>
          
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Chargement des posts...</p>
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
          
          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard 
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  userId={post.userId}
                />
              ))}
            </div>
          )}
          
          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">Aucun post trouvé.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

// Utilisation de getStaticProps pour pré-charger les données côté serveur
export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    return {
      props: {
        initialPosts: posts.slice(0, 12), // Limitons à 12 posts
      },
      // Régénération toutes les heures
      revalidate: 3600,
    };
  } catch {
    return {
      props: {
        initialPosts: [],
      },
      revalidate: 60, // Réessayer plus fréquemment en cas d'erreur
    };
  }
}
