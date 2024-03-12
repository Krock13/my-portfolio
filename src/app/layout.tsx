import { Providers } from './providers';
import { fontSans } from '@/config/fonts';
import type { Metadata } from 'next';
import clsx from 'clsx';

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
        <html lang='fr' suppressHydrationWarning>
            <body
                className={clsx(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
