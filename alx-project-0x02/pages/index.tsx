import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Project Setup and Basics</title>
        <meta name="description" content="Projet Next.js avec TypeScript et Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Bienvenue dans le projet Next.js
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Ce projet démontre l&apos;utilisation de Next.js avec TypeScript et Tailwind CSS
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Fonctionnalités incluses
            </h2>
            <ul className="text-left space-y-2 text-gray-700">
              <li>✅ Configuration Next.js avec TypeScript</li>
              <li>✅ Styling avec Tailwind CSS</li>
              <li>✅ Routing entre les pages</li>
              <li>✅ Composants réutilisables</li>
              <li>✅ Intégration d&apos;API externe</li>
              <li>✅ Interfaces TypeScript</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
