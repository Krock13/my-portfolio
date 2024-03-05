import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: { template: '%s | Julien Agneray', default: 'Portefolio Julien Agneray' },
    description:
        "Portefolio de Julien Agneray : où passion pour le code et esthétique du design s'harmonisent pour donner vie à des projets digitaux remarquables.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='fr' className='dark'>
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
