import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from '@nextui-org/react';

export default function MyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Mes Projets', path: '/projects' },
        { name: 'A Propos', path: '/about' },
        { name: 'Mes Compétences', path: '/skills' },
        { name: 'Mes Certifications', path: '/certifications' },
        { name: 'Témoignages', path: '/testimonials' },
        { name: 'Me Contacter', path: '/contact' },
    ];
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
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
                    <NavbarMenuItem key={item.name}>
                        <Link
                            color={index === 1 ? 'primary' : 'foreground'}
                            className='w-full'
                            href={item.path}
                            size='lg'
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
