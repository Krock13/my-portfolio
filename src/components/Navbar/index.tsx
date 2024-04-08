import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    Button,
} from '@nextui-org/react';
import Link from 'next/link';

export default function MyNavbar() {
    'use client';
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Accueil', path: '/' },
        { name: 'Mes Projets', path: '/projects' },
        { name: 'A Propos', path: '/about' },
        { name: 'Mes Compétences', path: '/skills' },
        { name: 'Mes Certifications', path: '/certifications' },
        { name: 'Témoignages', path: '/testimonials' },
        { name: 'Me Contacter', path: '/contact' },
    ];

    return (
        <Navbar className='z-20' onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className='sm:hidden'
                />
                <NavbarBrand>
                    <p className='font-bold text-inherit'>Julien Agneray</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <Button
                        as='a'
                        color='primary'
                        href='/assets/CV.pdf'
                        download='JulienAgneray_CV.pdf'
                        variant='flat'
                    >
                        Télécharger Mon CV
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <Link href={item.path} key={index} passHref>
                        <NavbarItem
                            className='w-full'
                            style={{
                                color: pathname === item.path ? 'var(--color-primary)' : 'black',
                            }}
                        >
                            {item.name}
                        </NavbarItem>
                    </Link>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
