import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
  const handleClick = (buttonType: string) => {
    alert(`Vous avez cliqué sur le bouton ${buttonType}!`);
  };

  return (
    <>
      <Head>
        <title>About - Next.js Project</title>
        <meta name="description" content="À propos du projet Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            À propos
          </h1>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              SoloForge: Mastering Project Autonomy
            </h2>
            <p className="text-gray-700 mb-4">
              Ce projet fait partie du cursus ALX et démontre la maîtrise de technologies 
              web modernes pour le développement d&apos;applications complètes.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Démonstration du composant Button
            </h3>
            <p className="text-gray-600 mb-6">
              Voici trois boutons avec différentes tailles et formes pour démontrer 
              la réutilisabilité du composant Button.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center justify-center p-6 bg-gray-50 rounded-lg">
              <Button 
                size="small" 
                shape="rounded-sm"
                onClick={() => handleClick('petit et carré')}
              >
                Petit & Carré
              </Button>
              
              <Button 
                size="medium" 
                shape="rounded-md"
                onClick={() => handleClick('moyen et arrondi')}
              >
                Moyen & Arrondi
              </Button>
              
              <Button 
                size="large" 
                shape="rounded-full"
                onClick={() => handleClick('grand et rond')}
              >
                Grand & Rond
              </Button>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> Ces boutons utilisent le même composant Button avec 
                différentes props pour size (small, medium, large) et shape (rounded-sm, rounded-md, rounded-full).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Technologies utilisées
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Next.js 15.4.2</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">React 19.1.0</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-gray-700">TypeScript</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">ESLint</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Objectifs d&apos;apprentissage
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Configuration d&apos;un projet Next.js</li>
                <li>✓ Implémentation du routing</li>
                <li>✓ Création de composants réutilisables</li>
                <li>✓ Intégration d&apos;APIs externes</li>
                <li>✓ Gestion des états et props</li>
                <li>✓ Design responsive</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Structure du projet
            </h3>
            <div className="font-mono text-sm text-gray-600 bg-white p-4 rounded border overflow-x-auto">
              <div>alx-project-0x02/</div>
              <div>├── components/</div>
              <div>│   ├── common/</div>
              <div>│   └── layout/</div>
              <div>├── interfaces/</div>
              <div>├── pages/</div>
              <div>├── public/</div>
              <div>└── styles/</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
