// app/layout.tsx (composant côté serveur)
import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: "Go'Babi",
  description: "L'autre manière de se déplacer en Côte d'Ivoire",
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <ClientLayout>{children}</ClientLayout> {/* Utilisation du composant client */}
      </body>
    </html>
  );
}
