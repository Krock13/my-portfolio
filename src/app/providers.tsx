'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ThemeProviderProps } from 'next-themes/dist/types';
import Navbar from '@/components/Navbar';
import '../config/global.css';

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
    const router = useRouter();

    return (
        <NextUIProvider>
            <main className='purple-dark text-foreground bg-background'>
                <Navbar />
                {children}
            </main>
        </NextUIProvider>
    );
}
