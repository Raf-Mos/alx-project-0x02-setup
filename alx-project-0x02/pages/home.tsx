import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '../components/common/PostModal';

interface UserPost {
  title: string;
  content: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);

  const handleAddPost = (post: UserPost) => {
    setUserPosts([...userPosts, post]);
  };

  return (
    <>
      <Head>
        <title>Home - Next.js Project</title>
        <meta name="description" content="Page d'accueil du projet Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Page d&apos;accueil
          </h1>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Bienvenue sur la page d&apos;accueil de notre application Next.js !
            </p>
            <p className="text-gray-600">
              Cette page utilise le Pages Router de Next.js et démontre l&apos;utilisation 
              de composants réutilisables avec TypeScript et Tailwind CSS.
            </p>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Composants Card réutilisables
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Ajouter un post
            </button>
          </div>
          
          {userPosts.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Vos posts ajoutés
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {userPosts.map((post, index) => (
                  <Card 
                    key={index}
                    title={post.title} 
                    content={post.content}
                  />
                ))}
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              title="Next.js Framework" 
              content="Next.js est un framework React qui offre des fonctionnalités comme le rendu côté serveur, la génération de sites statiques et le routing automatique." 
            />
            <Card 
              title="TypeScript" 
              content="TypeScript ajoute des types statiques à JavaScript, permettant une meilleure détection des erreurs et une meilleure expérience de développement." 
            />
            <Card 
              title="Tailwind CSS" 
              content="Tailwind CSS est un framework CSS utilitaire qui permet de créer rapidement des interfaces utilisateur modernes et responsives." 
            />
            <Card 
              title="Composants réutilisables" 
              content="La création de composants réutilisables avec des interfaces TypeScript permet de maintenir un code propre et modulaire." 
            />
            <Card 
              title="Pages Router" 
              content="Le Pages Router de Next.js permet de créer facilement des routes basées sur la structure des fichiers dans le dossier pages." 
            />
            <Card 
              title="API Integration" 
              content="Next.js facilite l'intégration d'APIs externes pour récupérer et afficher des données dynamiques dans l'application." 
            />
          </div>
        </div>
      </main>

      <PostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </>
  );
}
